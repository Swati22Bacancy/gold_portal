<?php

namespace App\Http\Controllers\Api;

use App\Models\Sales;
use App\Models\SalesItems;
use App\Models\InvoiceOptions;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SalesController extends Controller
{
    public function create_invoice(Request $request)
    {
        try {
            $invoiceoptions = InvoiceOptions::where('id',1)->first();
            if(!empty($invoiceoptions))
            {
                $invprefix = ($invoiceoptions->invoice_name)?$invoiceoptions->invoice_name:'INV';
            }
            else
            {
                $invprefix = 'INV';
            }
            $lastinvoice = Sales::orderBy('id', 'DESC')->first();
            $invoicekey= (!empty($lastinvoice))?($lastinvoice->invoicekey)+1:1;

            $sales = Sales::create([
                'customer_id' => $request->input('formfields.customer_id'),
                'invoicekey' => $invoicekey,
                'invoiceno' => $invprefix.'-'.$invoicekey,
                'billing_address' => $request->input('formfields.billing_address'),
                'reference' => $request->input('formfields.reference'),
                'currency_id' => $request->input('formfields.currency_id'),
                'recurring_invoice' => $request->input('formfields.recurring_invoice'),
                'subtotal' => $request->input('formfields.subtotal'),
                'vattotal' => $request->input('formfields.vattotal'),
                'totalamount' => $request->input('formfields.totalamount'),
                'issue_date' => date("Y-m-d", strtotime($request->input('formfields.issue_date'))),
                'due_date' => date("Y-m-d", strtotime($request->input('formfields.due_date'))),
                'comment' => $request->input('formfields.comment')
             ]);

            if(!empty($request->input('itemfields')))
            {
                foreach($request->input('itemfields') as $itemfield)
                {
                    $salesitems = SalesItems::create([
                        'sales_id' => $sales->id,
                        'producttype_id' => $itemfield['invoice_type'],
                        'product_id' => $itemfield['invoice_product'],
                        'weight' => $itemfield['weight'],
                        'quantity' => $itemfield['quantity'],
                        'unitprice' => $itemfield['unitprice'],
                        'vat' => $itemfield['vat'],
                        'invoice_amount' => $itemfield['invoice_amount']
                    ]);
                }
            }

            return response()->json($sales);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function industrysectorlist()
    {
        $industrysectors = IndustrySector::select('*')->orderBy('id', 'DESC')->get();
        return response()->json($industrysectors);
    }

    public function deleteindustrysector($id){
        $industrysector = IndustrySector::find($id);
            if($industrysector){
                $industrysector->delete();
                
                return response()->json(
                    [
                        'status' => 'success',
                        'msg' => 'Industry Sector deleted successfully'
                    ],
                    200
                );
            }else{
                return response()->json(['error' => 'Record does not exists'], 404);
            }
    }

    public function industrysectordetails($id)
    {
        $industrysector = IndustrySector::where('id', $id)->first();

        return response()->json($industrysector);
    }

    public function updateindustrysector(Request $request)
    {
        try {
            $industrysector = IndustrySector::where('id', $request->input('id'))->update([
                'title' => $request->input('title'),
            ]);

            return response()->json($industrysector);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }
}
