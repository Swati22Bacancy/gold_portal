<?php

namespace App\Http\Controllers\Api;

use App\Models\CompanyDetails;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Currency;

class CompanyDetailsController extends Controller
{
    public function storedetails(Request $request)
    {
        try {
            $companydetails = CompanyDetails::create([
                'company_name' => $request->input('company_name'),
                'address1' => $request->input('address1'),
                'address2' => $request->input('address2'),
                'postcode' => $request->input('postcode'),
                //'country' => $request->input('country'),
                'contact_name' => $request->input('contact_name'),
                'contact_email' => $request->input('contact_email'),
                'contact_telephone' => $request->input('contact_telephone'),
                'contact_mobile' => $request->input('contact_mobile'),
                'payment_days' => $request->input('payment_days'),
                'payment_condition' => $request->input('payment_condition'),
                'currency_id' => $request->input('currency_id'),
                'vat_status' => $request->input('vat_status'),
                'vat_number' => $request->input('vat_number'),
                'sector_id' => $request->input('sector_id'),
                'business_type' => $request->input('business_type'),
            ]);

            return response()->json($companydetails);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function saved_companydetails()
    {
        $companydetails = CompanyDetails::where('id',1)->first();
        if($companydetails->currency_id)
        {
            $currencydata = Currency::where('id', $companydetails->currency_id)->first();
            $companydetails->currency_symbol = $currencydata->symbol;
        }
        return response()->json($companydetails);
    }

    public function update_details(Request $request)
    {
        try {
            $companydetails = CompanyDetails::where('id', 1)->update([
                'company_name' => $request->input('company_name'),
                'address1' => $request->input('address1'),
                'address2' => $request->input('address2'),
                'postcode' => $request->input('postcode'),
                //'country' => $request->input('country'),
                'contact_name' => $request->input('contact_name'),
                'contact_email' => $request->input('contact_email'),
                'contact_telephone' => $request->input('contact_telephone'),
                'contact_mobile' => $request->input('contact_mobile'),
                'payment_days' => $request->input('payment_days'),
                'payment_condition' => $request->input('payment_condition'),
                'currency_id' => $request->input('currency_id'),
                'vat_status' => $request->input('vat_status'),
                'vat_number' => $request->input('vat_number'),
                'sector_id' => $request->input('sector_id'),
                'business_type' => $request->input('business_type'),
            ]);

            return response()->json($companydetails);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }
}
