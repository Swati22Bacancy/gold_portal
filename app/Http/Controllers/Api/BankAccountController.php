<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

use function GuzzleHttp\json_decode;

class BankAccountController extends Controller
{
    public function fetchaccountfeeds()
    {
        $data=array();
        $data['headers'] = array(
            'Content-Type' => 'application/json',
            'authorization' => 'Bearer '.nordigenToken(),
        );
        
        $client = new Client();
        $response = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/requisitions/0f089d6c-d46a-40c4-b665-cff49603263f/',[
            'headers' => [
                'Content-Type' => 'application/json',
                'authorization' => 'Bearer '.nordigenToken(),
            ]]);
        $res_data = json_decode($response->getBody());

        if(count($res_data->accounts)>0)
        {
            foreach($res_data->accounts as $key => $account)
            {
                $res_data->accounts['id'] = $account;
                $client = new Client();

                // Account Balance
                $responseaccount = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/accounts/'.$account.'/balances',[
                    'headers' => [
                        'Content-Type' => 'application/json',
                        'authorization' => 'Bearer '.nordigenToken(),
                    ]]);
                $res_accountdata = json_decode($responseaccount->getBody());
                $res_data->accounts['balance'] = $res_accountdata->balances[0]->balanceAmount->amount;

                // Account Transactions
                $responsetransaction = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/accounts/'.$account.'/transactions',[
                    'headers' => [
                        'Content-Type' => 'application/json',
                        'authorization' => 'Bearer '.nordigenToken(),
                    ]]);
                $res_transactiondata = json_decode($responsetransaction->getBody());
                
                $res_data->accounts['transactions'] = $res_transactiondata->transactions->booked;
            }
        }
        return response()->json($res_data->accounts);
    }
}
