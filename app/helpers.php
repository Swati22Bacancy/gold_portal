<?php 
use GuzzleHttp\Client;

function nordigenToken()
{
    $data=array();
    $data['headers'] = array(
        'Content-Type' => 'application/x-www-form-urlencoded',
    );

    $data['form_params'] =  array(
        'secret_id' => env('NORDIGEN_SECRETID'),
        'secret_key' => env('NORDIGEN_SECRETKEY'),
    );


    $client = new Client();
    $response = $client->request('POST', config('constants.authernticationApiUrl').'/api/v2/token/new/',$data);
    return json_decode($response->getBody())->access;
}

?>