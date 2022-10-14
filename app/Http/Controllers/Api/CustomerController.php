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
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'email' => $request->input('email'),
                'company_name' => $request->input('company_name'),
                'registered_address' => $request->input('registered_address'),
                'vat' => $request->input('vat'),
                'telephone' => $request->input('telephone'),
                'whatsapp' => $request->input('whatsapp'),
                'title' => $request->input('title'),
                'credit_limit' => $request->input('credit_limit'),
                'credit_period' => $request->input('credit_period'),
                'company_code' => $request->input('company_code'),
                'customer_type' => $request->input('customertype'),
                'group_id' => $request->input('group_id'),
                'account_name' => $request->input('account_name'),
                'account_number' => $request->input('account_number'),
                'sort_code' => $request->input('sort_code'),
            ]);

            return response()->json($customer);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function customerlist($type)
    {
        if($type !='all')
        {
            $customers = Customer::leftjoin('groups', 'groups.id', '=', 'customers.group_id')->select('customers.*','groups.name')->where('customer_type',$type)->orderBy('customers.id', 'DESC')->get();
        }
        else
        {
            $customers = Customer::leftjoin('groups', 'groups.id', '=', 'customers.group_id')->select('customers.*','groups.name')->orderBy('customers.id', 'DESC')->get();
        }

        foreach($customers as $key => $customer)
        {
            if($customer->customer_type=='Business')
            {
                $customers[$key]->typeicon = 'B';
            }
            else
            {
                $customers[$key]->typeicon = 'I';
            }
        }
        return response()->json($customers);
    }

    public function deletecustomer($id){
        $customer = Customer::find($id);
            if($customer){
                $customer->delete();
                
                return response()->json(
                    [
                        'status' => 'success',
                        'msg' => 'customer deleted successfully'
                    ],
                    200
                );
            }else{
                return response()->json(['error' => 'Record does not exists'], 404);
            }
    }

    public function customerdetails($id)
    {
        $customer = Customer::where('id', $id)->first();

        return response()->json($customer);
    }

    public function updatecustomer(Request $request)
    {
        try {
            $customer = Customer::where('id', $request->input('id'))->update([
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'email' => $request->input('email'),
                'company_name' => $request->input('company_name'),
                'registered_address' => $request->input('registered_address'),
                'vat' => $request->input('vat'),
                'telephone' => $request->input('telephone'),
                'whatsapp' => $request->input('whatsapp'),
                'title' => $request->input('title'),
                'credit_limit' => $request->input('credit_limit'),
                'credit_period' => $request->input('credit_period'),
                'company_code' => $request->input('company_code'),
                'customer_type' => $request->input('customertype'),
                'group_id' => $request->input('group_id'),
                'account_name' => $request->input('account_name'),
                'account_number' => $request->input('account_number'),
                'sort_code' => $request->input('sort_code'),
            ]);

            return response()->json($customer);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }
}
