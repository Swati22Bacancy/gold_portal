<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use GuzzleHttp\Client;

use function GuzzleHttp\json_decode;

class WiseTransactions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'wise:transactions';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch Account Transactions from Wise Accounts';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $client = new Client();
        $responsetransaction = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/accounts/ba3216c3-007d-44c4-963c-5e46a4ed70f5/transactions?date_from=2022-11-16&date_to=2022-11-18',[
            'headers' => [
                'Content-Type' => 'application/json',
                'authorization' => 'Bearer '.nordigenToken(),
            ]]);
        $res_transactiondata = json_decode($responsetransaction->getBody());

        $transactions = $res_transactiondata->transactions->booked;

        foreach ($transactions as $index => $transaction)
        {
            if(!isset($transaction->debtorName) && !isset($transaction->creditorName))
            {
                $payee = substr(strstr($transaction->remittanceInformationUnstructured," "), 1); 
            }
            else
            {
                $payee = (isset($transaction->debtorName))?$transaction->debtorName:$transaction->creditorName;
            }
            if($transaction->transactionAmount->amount<0)
            {   
                $remark = 'outamount';
            }
            else
            {
                $remark = 'inamount';
            }
            DB::table('wise_transactions')->insert([
                'account_id' => 2,
                'transaction_id' => $transaction->transactionId,
                'bookingDate' => $transaction->bookingDate,
                'bookingDateTime' => $transaction->bookingDateTime,
                'transactionAmount' => abs($transaction->transactionAmount->amount),
                'currency' => $transaction->transactionAmount->currency,
                'payee_name' => $payee,
                're_information' => $transaction->remittanceInformationUnstructured,
                'additional_information' => $transaction->additionalInformation,
                'transaction_type' => $transaction->proprietaryBankTransactionCode,
                'internal_transaction_id' => $transaction->internalTransactionId,
                'remark' => $remark
            ]);
        }
    }
}
