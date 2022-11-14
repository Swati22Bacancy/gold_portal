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
        $response = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/requisitions/828413c3-0ff6-4289-a1fd-efa4feda9738/',[
            'headers' => [
                'Content-Type' => 'application/json',
                'authorization' => 'Bearer '.nordigenToken(),
            ]]);
        $res_data = json_decode($response->getBody());

        if(count($res_data->accounts)>0)
        {
            $accounts = array();
            foreach($res_data->accounts as $key => $account)
            {
                if($account != '2402e627-96ec-4702-8830-a86d950179c2')
                {
                    $accounts[$key]['id'] = $account;
                    $client = new Client();

                    // Account Details
                    $responsedetails = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/accounts/'.$account.'/details',[
                        'headers' => [
                            'Content-Type' => 'application/json',
                            'authorization' => 'Bearer '.nordigenToken(),
                        ]]);
                    $res_accountdetails = json_decode($responsedetails->getBody());
                    $accounts[$key]['account_no'] = $res_accountdetails->account->bban;

                    // Account Balance
                    $responseaccount = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/accounts/'.$account.'/balances',[
                        'headers' => [
                            'Content-Type' => 'application/json',
                            'authorization' => 'Bearer '.nordigenToken(),
                        ]]);
                    $res_accountdata = json_decode($responseaccount->getBody());
                    $accounts[$key]['balance'] = $res_accountdata->balances[0]->balanceAmount->amount;
                    $accounts[$key]['currency'] = $res_accountdata->balances[0]->balanceAmount->currency;
                    $accounts[$key]['title'] = ($res_accountdata->balances[0]->balanceAmount->currency=='USD')?'Wise Bank (USD)':'Wise Bank (GBP)';
                    // Account Transactions
                    $responsetransaction = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/accounts/'.$account.'/transactions',[
                        'headers' => [
                            'Content-Type' => 'application/json',
                            'authorization' => 'Bearer '.nordigenToken(),
                        ]]);
                    $res_transactiondata = json_decode($responsetransaction->getBody());
                    
                    $accounts[$key]['transactions'] = array_slice($res_transactiondata->transactions->booked, 0, 5);
                }
            }
        }
        return response()->json($accounts);
    }
}
