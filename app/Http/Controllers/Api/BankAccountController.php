<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Models\WiseTransaction;
use App\Models\WiseAccount;

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
                    $accounts[$key]['balance'] = number_format($res_accountdata->balances[0]->balanceAmount->amount, 2, '.', ',');
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

                    foreach ($accounts[$key]['transactions'] as $index => $transaction)
                    {
                        if($transaction->transactionAmount->amount<0)
                        {   $outamount= abs($transaction->transactionAmount->amount);
                            $accounts[$key]['transactions'][$index]->outamount = number_format($outamount, 2, '.', ',');
                        }
                        else
                        {
                            $accounts[$key]['transactions'][$index]->inamount = number_format($transaction->transactionAmount->amount, 2, '.', ',');
                        }
                        if(!isset($transaction->debtorName) && !isset($transaction->creditorName))
                        {
                            $accounts[$key]['transactions'][$index]->payee = substr(strstr($transaction->remittanceInformationUnstructured," "), 1); 
                        }
                    }
                }
            }
        }
        return response()->json($accounts);
    }

    public function accountdetails($id,$currencyid)
    {
        $accounts=array();

        $accountdetails = WiseAccount::where('id',$id)->first();
        $accounts['balance'] = number_format($accountdetails->balance, 2, '.', ',');
        $accounts['title'] = ($currencyid=='1')?'Wise Bank (USD)':'Wise Bank (GBP)';
        $accounts['currency'] = ($currencyid=='1')?'USD':'GBP';
        
        return response()->json($accounts);
    }

    public function accounttransactions($id,$currencyid)
    {
        $accounts = WiseTransaction::where('account_id',$id)->get();
        foreach($accounts as $key => $account)
        {
            $accounts[$key]->transactionAmount = number_format($account->transactionAmount, 2, '.', ',');
        }
        
        return response()->json($accounts);
        exit;
        $client = new Client();
        $responsetransaction = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/accounts/'.$id.'/transactions',[
            'headers' => [
                'Content-Type' => 'application/json',
                'authorization' => 'Bearer '.nordigenToken(),
            ]]);
        $res_transactiondata = json_decode($responsetransaction->getBody());

        $responseaccount = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/accounts/'.$id.'/balances',[
            'headers' => [
                'Content-Type' => 'application/json',
                'authorization' => 'Bearer '.nordigenToken(),
            ]]);
        $res_accountdata = json_decode($responseaccount->getBody());
        $accounts['balance'] = number_format($res_accountdata->balances[0]->balanceAmount->amount, 2, '.', ',');
        
        $accounts['transactions'] = $res_transactiondata->transactions->booked;
        foreach ($res_transactiondata->transactions->booked as $index => $transaction)
        {
            if(isset($res_transactiondata->transactions->booked[$index]->proprietaryBankTransactionCode))
            {
                $res_transactiondata->transactions->booked[$index]->proprietaryBankTransactionCode = ($transaction->proprietaryBankTransactionCode=='CARD_TRANSACTION')?'CARD':$transaction->proprietaryBankTransactionCode;
            }
            else
            {
                $res_transactiondata->transactions->booked[$index]->proprietaryBankTransactionCode = 'TRANSFER';
            }
            if($transaction->transactionAmount->amount<0)
            {
                $res_transactiondata->transactions->booked[$index]->outamount = number_format($transaction->transactionAmount->amount, 2, '.', ',');
            }
            else
            {
                $res_transactiondata->transactions->booked[$index]->inamount = number_format($transaction->transactionAmount->amount, 2, '.', ',');
            }
            if(!isset($transaction->debtorName) && !isset($transaction->creditorName))
            {
                $res_transactiondata->transactions->booked[$index]->payee = substr(strstr($transaction->remittanceInformationUnstructured," "), 1); 
            }
        }
        $accounts['title'] = ($currencyid=='1')?'Wise Bank (USD)':'Wise Bank (GBP)';
        $accounts['currency'] = ($currencyid=='1')?'USD':'GBP';
        return response()->json($accounts);
    }

    public function accounttransactionsbk($id,$currencyid)
    {
        $accounts=array();
        $client = new Client();
        $responsetransaction = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/accounts/'.$id.'/transactions',[
            'headers' => [
                'Content-Type' => 'application/json',
                'authorization' => 'Bearer '.nordigenToken(),
            ]]);
        $res_transactiondata = json_decode($responsetransaction->getBody());

        $responseaccount = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/accounts/'.$id.'/balances',[
            'headers' => [
                'Content-Type' => 'application/json',
                'authorization' => 'Bearer '.nordigenToken(),
            ]]);
        $res_accountdata = json_decode($responseaccount->getBody());
        $accounts['balance'] = number_format($res_accountdata->balances[0]->balanceAmount->amount, 2, '.', ',');
        
        $accounts['transactions'] = $res_transactiondata->transactions->booked;
        foreach ($res_transactiondata->transactions->booked as $index => $transaction)
        {
            if(isset($res_transactiondata->transactions->booked[$index]->proprietaryBankTransactionCode))
            {
                $res_transactiondata->transactions->booked[$index]->proprietaryBankTransactionCode = ($transaction->proprietaryBankTransactionCode=='CARD_TRANSACTION')?'CARD':$transaction->proprietaryBankTransactionCode;
            }
            else
            {
                $res_transactiondata->transactions->booked[$index]->proprietaryBankTransactionCode = 'TRANSFER';
            }
            if($transaction->transactionAmount->amount<0)
            {
                $res_transactiondata->transactions->booked[$index]->outamount = number_format($transaction->transactionAmount->amount, 2, '.', ',');
            }
            else
            {
                $res_transactiondata->transactions->booked[$index]->inamount = number_format($transaction->transactionAmount->amount, 2, '.', ',');
            }
            if(!isset($transaction->debtorName) && !isset($transaction->creditorName))
            {
                $res_transactiondata->transactions->booked[$index]->payee = substr(strstr($transaction->remittanceInformationUnstructured," "), 1); 
            }
        }
        $accounts['title'] = ($currencyid=='1')?'Wise Bank (USD)':'Wise Bank (GBP)';
        $accounts['currency'] = ($currencyid=='1')?'USD':'GBP';
        return response()->json($accounts);
    }

    public function fetchaccountfeedswithid($id)
    {
        $accounts = WiseTransaction::where('account_id',$id)->latest()->take(5)->get();
        foreach($accounts as $key => $account)
        {
            $accounts[$key]->transactionAmount = number_format($account->transactionAmount, 2, '.', ',');
        }
        // $data=array();
        // $data['headers'] = array(
        //     'Content-Type' => 'application/json',
        //     'authorization' => 'Bearer '.nordigenToken(),
        // );
        
        // $client = new Client();
        // $accounts=array();
        // // Account Balance
        // $responseaccount = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/accounts/'.$id.'/balances',[
        //     'headers' => [
        //         'Content-Type' => 'application/json',
        //         'authorization' => 'Bearer '.nordigenToken(),
        //     ]]);
        // $res_accountdata = json_decode($responseaccount->getBody());
        // $accounts['balance'] = number_format($res_accountdata->balances[0]->balanceAmount->amount, 2, '.', ',');
        // $accounts['currency'] = $res_accountdata->balances[0]->balanceAmount->currency;
        // $accounts['title'] = ($res_accountdata->balances[0]->balanceAmount->currency=='USD')?'Wise Bank (USD)':'Wise Bank (GBP)';
        // // Account Transactions
        // $responsetransaction = $client->request('GET', config('constants.authernticationApiUrl').'/api/v2/accounts/'.$id.'/transactions',[
        //     'headers' => [
        //         'Content-Type' => 'application/json',
        //         'authorization' => 'Bearer '.nordigenToken(),
        //     ]]);
        // $res_transactiondata = json_decode($responsetransaction->getBody());
        
        // $accounts['transactions'] = array_slice($res_transactiondata->transactions->booked, 0, 5);

        // foreach ($accounts['transactions'] as $index => $transaction)
        // {
        //     if($transaction->transactionAmount->amount<0)
        //     {   $outamount= abs($transaction->transactionAmount->amount);
        //         $accounts['transactions'][$index]->outamount = number_format($outamount, 2, '.', ',');
        //     }
        //     else
        //     {
        //         $accounts['transactions'][$index]->inamount = number_format($transaction->transactionAmount->amount, 2, '.', ',');
        //     }
        //     if(!isset($transaction->debtorName) && !isset($transaction->creditorName))
        //     {
        //         $accounts['transactions'][$index]->payee = substr(strstr($transaction->remittanceInformationUnstructured," "), 1); 
        //     }
        // }
        return response()->json($accounts);
    }

    public function fetchaccountbalancewithid($id)
    {
        $accounts = WiseAccount::where('id',$id)->first();
        $accounts->balance = number_format($accounts->balance, 2, '.', ',');
        
        return response()->json($accounts);
    }
}
