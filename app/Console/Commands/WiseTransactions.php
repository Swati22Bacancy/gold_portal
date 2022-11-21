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
        $accountarray=array('ba3216c3-007d-44c4-963c-5e46a4ed70f5','4dae8287-51f7-4277-b556-f6409f8c4982');
        $today_date =date("Y-m-d");

        foreach($accountarray as $account)
        {
            $accountid=($account=='4dae8287-51f7-4277-b556-f6409f8c4982')?1:2;
        }
       
        $savedtransactions = DB::table('wise_transactions')->where('account_id',$accountid)->count();
        
        if($savedtransactions>0)
        {
            $lasttransactions = DB::table('wise_transactions')->latest()->get()->first();
            $bookingdate = $lasttransactions->bookingDate;
            
            $responsetransaction = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/accounts/'.$account.'/transactions?date_from='.$bookingdate.'&date_to='.$today_date,[
                'headers' => [
                    'Content-Type' => 'application/json',
                    'authorization' => 'Bearer '.nordigenToken(),
                ]]);
        }
        else
        {
            $responsetransaction = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/accounts/'.$account.'/transactions?date_to='.$today_date,[
                'headers' => [
                    'Content-Type' => 'application/json',
                    'authorization' => 'Bearer '.nordigenToken(),
                ]]);
        }
        
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
                'account_id' => $accountid,
                'transaction_id' => $transaction->transactionId,
                'bookingDate' => $transaction->bookingDate,
                'bookingDateTime' => $transaction->bookingDateTime,
                'transactionAmount' => abs($transaction->transactionAmount->amount),
                'currency' => $transaction->transactionAmount->currency,
                'payee_name' => $payee,
                're_information' => (isset($transaction->remittanceInformationUnstructured))?$transaction->remittanceInformationUnstructured:'',
                'additional_information' => (isset($transaction->additionalInformation))?$transaction->additionalInformation:'',
                'transaction_type' => (isset($transaction->proprietaryBankTransactionCode))?$transaction->proprietaryBankTransactionCode:'',
                'internal_transaction_id' => $transaction->internalTransactionId,
                'remark' => $remark
            ]);
        }
    }
}
