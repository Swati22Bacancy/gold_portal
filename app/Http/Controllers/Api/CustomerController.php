<?php

namespace App\Http\Controllers\Api;

use App\Models\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CustomerController extends Controller
{
    public function createcustomer(Request $request)
    {
        try {
            $customer = Customer::create([
                'first_name' => $request->input('firstname'),
                'last_name' => $request->input('lastname'),
                'email' => $request->input('email'),
                'company_name' => $request->input('companyname'),
                'registered_address' => $request->input('registeredaddress'),
                'vat' => $request->input('vat'),
                'telephone' => $request->input('telephone'),
                'whatsapp' => $request->input('whatsapp'),
                'title' => $request->input('title'),
                'credit_limit' => $request->input('creditlimit'),
                'company_code' => $request->input('companycode'),
                'customer_type' => $request->input('customertype')
            ]);

            return response()->json($customer);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function customerlist()
    {
        $customers = Customer::select('*')->get();

        return response()->json($customers);
    }
}
