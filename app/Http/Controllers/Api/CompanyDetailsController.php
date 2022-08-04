<?php

namespace App\Http\Controllers\Api;

use App\Models\CompanyDetails;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Currency;
use Illuminate\Support\Facades\Storage;

class CompanyDetailsController extends Controller
{
    public function storedetails(Request $request)
    {
        try {
            // Store files
            if ($request->hasFile('file')) {

                $file = $request->file('file');
                $newName = 'Identification_'.time() . '_' . $file->getClientOriginalName();
                $file->storeAs('Uploads', $newName);
                $originalName = $file->getClientOriginalName();
            }
            else {
                $newName = '';
                $originalName = '';
            }

            if ($request->hasFile('creditfile')) {

                $creditfile = $request->file('creditfile');
                $newCreditName = 'Credit_'.time() . '_' . $creditfile->getClientOriginalName();
                $creditfile->storeAs('Uploads', $newCreditName);
                $originalCreditName = $creditfile->getClientOriginalName();
            }
            else {
                $newCreditName = '';
                $originalCreditName = '';
            }

            if ($request->hasFile('vatfile')) {

                $vatfile = $request->file('vatfile');
                $newVatName = 'Vat_'.time() . '_' . $vatfile->getClientOriginalName();
                $vatfile->storeAs('Uploads', $newVatName);
                $originalVatName = $vatfile->getClientOriginalName();
            }
            else {
                $newVatName = '';
                $originalVatName = '';
            }

            if ($request->hasFile('incorporationfile')) {

                $incorporationfile = $request->file('incorporationfile');
                $newIncName = 'Incorporate_'.time() . '_' . $incorporationfile->getClientOriginalName();
                $incorporationfile->storeAs('Uploads', $newIncName);
                $originalIncName = $incorporationfile->getClientOriginalName();
            }
            else {
                $newIncName = '';
                $originalIncName = '';
            }

            if ($request->hasFile('accountingfile')) {

                $accountingfile = $request->file('accountingfile');
                $newAccountName = 'Accounting_'.time() . '_' . $accountingfile->getClientOriginalName();
                $accountingfile->storeAs('Uploads', $newAccountName);
                $originalAccountName = $accountingfile->getClientOriginalName();
            }
            else {
                $newAccountName = '';
                $originalAccountName = '';
            }

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
                'identification_file' => $newName,
                'identification_file_original_name' => $originalName,
                'credit_file' => $newCreditName,
                'credit_file_original_name' => $originalCreditName,
                'vat_file' => $newVatName,
                'vat_file_original_name' => $originalVatName,
                'incorporation_file' => $newIncName,
                'incorporation_file_original_name' => $originalIncName,
                'accounting_file' => $newAccountName,
                'accounting_file_original_name' => $originalAccountName,
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
            // Store files
            $companydetails = CompanyDetails::where('id',1)->first();
            if ($request->hasFile('file')) {

                // // first unlink the first file if exist
                if ($companydetails->identification_file && Storage::exists('Uploads/' . $companydetails->identification_file)) {
                    Storage::delete('Uploads/' . $companydetails->identification_file);
                }

                $file = $request->file('file');
                $newName = 'Identification_'.time() . '_' . $file->getClientOriginalName();
                $file->storeAs('Uploads', $newName);
                $originalName = $file->getClientOriginalName();
            }
            else {
                $newName = $companydetails->identification_file;
                $originalName = $companydetails->identification_file_original_name;
            }

            if ($request->hasFile('creditfile')) {

                // // first unlink the first file if exist
                if ($companydetails->identification_file && Storage::exists('Uploads/' . $companydetails->identification_file)) {
                    Storage::delete('Uploads/' . $companydetails->identification_file);
                }

                $creditfile = $request->file('creditfile');
                $newCreditName = 'Credit_'.time() . '_' . $creditfile->getClientOriginalName();
                $creditfile->storeAs('Uploads', $newCreditName);
                $originalCreditName = $creditfile->getClientOriginalName();
            }
            else {
                $newCreditName = $companydetails->credit_file;
                $originalCreditName = $companydetails->credit_file_original_name;
            }

            if ($request->hasFile('vatfile')) {

                // // first unlink the first file if exist
                if ($companydetails->identification_file && Storage::exists('Uploads/' . $companydetails->identification_file)) {
                    Storage::delete('Uploads/' . $companydetails->identification_file);
                }

                $vatfile = $request->file('vatfile');
                $newVatName = 'Vat_'.time() . '_' . $vatfile->getClientOriginalName();
                $vatfile->storeAs('Uploads', $newVatName);
                $originalVatName = $vatfile->getClientOriginalName();
            }
            else {
                $newVatName = $companydetails->vat_file;
                $originalVatName = $companydetails->vat_file_original_name;
            }

            if ($request->hasFile('incorporationfile')) {

                // // first unlink the first file if exist
                if ($companydetails->identification_file && Storage::exists('Uploads/' . $companydetails->identification_file)) {
                    Storage::delete('Uploads/' . $companydetails->identification_file);
                }

                $incorporationfile = $request->file('incorporationfile');
                $newIncName = 'Incorporate_'.time() . '_' . $incorporationfile->getClientOriginalName();
                $incorporationfile->storeAs('Uploads', $newIncName);
                $originalIncName = $incorporationfile->getClientOriginalName();
            }
            else {
                $newIncName = $companydetails->incorporation_file;
                $originalIncName = $companydetails->incorporation_file_original_name;
            }

            if ($request->hasFile('accountingfile')) {

                // // first unlink the first file if exist
                if ($companydetails->identification_file && Storage::exists('Uploads/' . $companydetails->identification_file)) {
                    Storage::delete('Uploads/' . $companydetails->identification_file);
                }

                $accountingfile = $request->file('accountingfile');
                $newAccountName = 'Accounting_'.time() . '_' . $accountingfile->getClientOriginalName();
                $accountingfile->storeAs('Uploads', $newAccountName);
                $originalAccountName = $accountingfile->getClientOriginalName();
            }
            else {
                $newAccountName = $companydetails->accounting_file;
                $originalAccountName = $companydetails->accounting_file_original_name;
            }

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
                'identification_file' => $newName,
                'identification_file_original_name' => $originalName,
                'credit_file' => $newCreditName,
                'credit_file_original_name' => $originalCreditName,
                'vat_file' => $newVatName,
                'vat_file_original_name' => $originalVatName,
                'incorporation_file' => $newIncName,
                'incorporation_file_original_name' => $originalIncName,
                'accounting_file' => $newAccountName,
                'accounting_file_original_name' => $originalAccountName,
            ]);

            return response()->json($companydetails);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }
    public function download(Request $request)
    {
        return response()->download(storage_path('app/Uploads/'.$request->image), $request->image)->setStatusCode(200);
    }
}
