<?php

namespace App\Http\Controllers\Api;

use App\Models\CompanySettings;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Currency;
use Illuminate\Support\Facades\Storage;

class CustomerSettingsController extends Controller
{
    public function storecustomersettings(Request $request)
    {
        try {
            $companysettings = CompanySettings::create([
                'display_option' => $request->input('display_option'),
                'post_code' => ($request->input('post_code'))?1:0,
                'due_date' => ($request->input('due_date'))?1:0,
                'payment_method' => ($request->input('payment_method'))?1:0,
                'customer_records' => ($request->input('customer_records'))?1:0,
                'supplier_records' => ($request->input('supplier_records'))?1:0
            ]);

            return response()->json($companysettings);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function savedcustomersettings()
    {
        $companysettings = CompanySettings::where('id',1)->first();
        return response()->json($companysettings);
    }

    public function updatecustomersettings(Request $request)
    {
        try {
            $companysettings = CompanySettings::where('id', 1)->update([
                'display_option' => $request->input('display_option'),
                'post_code' => ($request->input('post_code'))?1:0,
                'due_date' => ($request->input('due_date'))?1:0,
                'payment_method' => ($request->input('payment_method'))?1:0,
                'customer_records' => ($request->input('customer_records'))?1:0,
                'supplier_records' => ($request->input('supplier_records'))?1:0 
            ]);

            return response()->json($companysettings);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }
}
