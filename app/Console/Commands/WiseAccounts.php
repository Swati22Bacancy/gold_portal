<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use GuzzleHttp\Client;

use function GuzzleHttp\json_decode;

class WiseAccounts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'wise:accounts';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch Account Details from Wise Accounts';

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
        $responseaccount = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/accounts/ba3216c3-007d-44c4-963c-5e46a4ed70f5/balances',[
            'headers' => [
                'Content-Type' => 'application/json',
                'authorization' => 'Bearer '.nordigenToken(),
            ]]);
        $res_accountdata = json_decode($responseaccount->getBody());
        $balance = $res_accountdata->balances[0]->balanceAmount->amount;

        DB::table('wise_accounts')->where('id',2)->update([
            'balance' => $balance,
        ]);
        
        $responseaccountusd = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/accounts/4dae8287-51f7-4277-b556-f6409f8c4982/balances',[
            'headers' => [
                'Content-Type' => 'application/json',
                'authorization' => 'Bearer '.nordigenToken(),
            ]]);
        $res_accountusd = json_decode($responseaccountusd->getBody());
        $balanceusd = $res_accountusd->balances[0]->balanceAmount->amount;

        DB::table('wise_accounts')->where('id',1)->update([
            'balance' => $balanceusd,
            'updated_at'=>date('YYYY-mm-dd H:i:s')
        ]);
    }
}
