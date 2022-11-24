<?php

namespace App\Http\Controllers\Api;

use App\Models\DefaultBankrule;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DefaultBankRuleController extends Controller
{
    public function storedefaultbankrule(Request $request)
    {
        try {
            $defaultbankrule = DefaultBankrule::create([
                'invoice_date' => ($request->input('invoice_date'))?1:0,
                'customer_name' => ($request->input('customer_name'))?1:0,
                'invoice_number' => ($request->input('invoice_number'))?1:0,
                'invoice_amount' => ($request->input('invoice_amount'))?1:0,
                'purchase_date' => ($request->input('purchase_date'))?1:0,
                'purchase_customer' => ($request->input('purchase_customer'))?1:0,
                'purchase_number' => ($request->input('purchase_number'))?1:0,
                'purchase_amount' => ($request->input('purchase_amount'))?1:0
            ]);

            return response()->json($defaultbankrule);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function saveddefaultbankrule()
    {
        $defaultbankrule = DefaultBankrule::where('id',1)->first();
        return response()->json($defaultbankrule);
    }

    public function updatedefaultbankrule(Request $request)
    {
        try {
            $defaultbankrule = DefaultBankrule::where('id', 1)->update([
                'invoice_date' => ($request->input('invoice_date'))?1:0,
                'customer_name' => ($request->input('customer_name'))?1:0,
                'invoice_number' => ($request->input('invoice_number'))?1:0,
                'invoice_amount' => ($request->input('invoice_amount'))?1:0,
                'purchase_date' => ($request->input('purchase_date'))?1:0,
                'purchase_customer' => ($request->input('purchase_customer'))?1:0,
                'purchase_number' => ($request->input('purchase_number'))?1:0,
                'purchase_amount' => ($request->input('purchase_amount'))?1:0
            ]);

            return response()->json($defaultbankrule);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }
}
