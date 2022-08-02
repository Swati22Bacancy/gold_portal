<?php

namespace App\Http\Controllers\Api;

use App\Models\InvoiceOptions;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InvoiceOptionsController extends Controller
{
    public function storebasic(Request $request)
    {
        try {
            $invoiceoptions = InvoiceOptions::create([
                'method' => $request->input('method'),
                'name_include' => ($request->input('name_include'))?1:0
            ]);

            return response()->json($invoiceoptions);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function storefields(Request $request)
    {
        try {
            $invoiceoptions = InvoiceOptions::create([
                'invoice_name' => $request->input('invoice_name'),
                'creditnote_name' => $request->input('creditnote_name'),
                'customer_reference' => $request->input('customer_reference'),
                'quantity' => $request->input('quantity'),
            ]);

            return response()->json($invoiceoptions);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function saved_invoiceoptions()
    {
        $invoiceoptions = InvoiceOptions::where('id',1)->first();
        return response()->json($invoiceoptions);
    }

    public function update_basic(Request $request)
    {
        try {
            $invoiceoptions = InvoiceOptions::where('id', 1)->update([
                'method' => $request->input('method'),
                'name_include' => ($request->input('name_include'))?1:0
            ]);

            return response()->json($invoiceoptions);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function update_fields(Request $request)
    {
        try {
            $invoiceoptions = InvoiceOptions::where('id', 1)->update([
                'invoice_name' => $request->input('invoice_name'),
                'creditnote_name' => $request->input('creditnote_name'),
                'customer_reference' => $request->input('customer_reference'),
                'quantity' => $request->input('quantity'),
            ]);

            return response()->json($invoiceoptions);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }
}
