<?php

namespace App\Http\Controllers\Api;

use App\Models\VatSettings;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Currency;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;

class VatSettingsController extends Controller
{
    public function storevatsettings(Request $request)
    {
        try {
            $vatsettings = VatSettings::create([
                'vat_status' => $request->input('vat_status'),
                'tax_name' => $request->input('tax_name'),
                'vat_number' => $request->input('vat_number'),
                'turnover' => $request->input('turnover'),
                'vat_period' => $request->input('vat_period'),
                'calculation_method' => $request->input('calculation_method'),
                'cash_scheme' => $request->input('cash_scheme'),
                'frs_rate' => $request->input('frs_rate'),
                'flatvat_rate' => $request->input('flatvat_rate'),
                'priorfrs_rate' => $request->input('priorfrs_rate'),
                'prior_to' => $request->input('prior_to'),
                'username' => $request->input('username'),
                'password' => Hash::make($request->input('password')),
                'branch' => $request->input('branch'),
                'postcode' => $request->input('postcode'),
                'ecs_vat' => $request->input('ecs_vat'),
                'owe_vat' => ($request->input('owe_vat'))?1:0,
                'remind_vat' => ($request->input('remind_vat'))?1:0,
                'lock_transaction' => ($request->input('lock_transaction'))?1:0,
                'vat_rate' => ($request->input('vat_rate'))?1:0,
                'default_vatrate' => ($request->input('default_vatrate'))?1:0,
                'scheme_cash' => ($request->input('scheme_cash'))?1:0,
                'flatrate_scheme' => ($request->input('flatrate_scheme'))?1:0,
                'enable_filing' => ($request->input('enable_filing'))?1:0,
                'ecs_exclude' => ($request->input('ecs_exclude'))?1:0
            ]);

            return response()->json($vatsettings);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function savedvatsettings()
    {
        $vatsettings = VatSettings::where('id',1)->first();
        return response()->json($vatsettings);
    }

    public function updatevatsettings(Request $request)
    {
        try {
            $vatdata= VatSettings::where('id', 1)->first();
            $vatsettings = VatSettings::where('id', 1)->update([
                'vat_status' => $request->input('vat_status'),
                'tax_name' => $request->input('tax_name'),
                'vat_number' => $request->input('vat_number'),
                'turnover' => $request->input('turnover'),
                'vat_period' => $request->input('vat_period'),
                'calculation_method' => $request->input('calculation_method'),
                'cash_scheme' => $request->input('cash_scheme'),
                'frs_rate' => $request->input('frs_rate'),
                'flatvat_rate' => $request->input('flatvat_rate'),
                'priorfrs_rate' => $request->input('priorfrs_rate'),
                'prior_to' => $request->input('prior_to'),
                'username' => $request->input('username'),
                'password' => ($request->input('password'))?Hash::make($request->input('password')):$vatdata->password,
                'branch' => $request->input('branch'),
                'postcode' => $request->input('postcode'),
                'ecs_vat' => $request->input('ecs_vat'),
                'owe_vat' => ($request->input('owe_vat'))?1:0,
                'remind_vat' => ($request->input('remind_vat'))?1:0,
                'lock_transaction' => ($request->input('lock_transaction'))?1:0,
                'vat_rate' => ($request->input('vat_rate'))?1:0,
                'default_vatrate' => ($request->input('default_vatrate'))?1:0,
                'scheme_cash' => ($request->input('scheme_cash'))?1:0,
                'flatrate_scheme' => ($request->input('flatrate_scheme'))?1:0,
                'enable_filing' => ($request->input('enable_filing'))?1:0,
                'ecs_exclude' => ($request->input('ecs_exclude'))?1:0
            ]);

            return response()->json($vatsettings);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }
}
