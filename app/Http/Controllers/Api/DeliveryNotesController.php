<?php

namespace App\Http\Controllers\Api;

use App\Models\DeliveryNotes;
use App\Models\DeliveryNotesItems;
use App\Models\SalesPayments;
use App\Models\InvoiceOptions;
use App\Models\SalesNotes;
use App\Models\SalesHistory;
use App\Models\SalesRefunds;
use App\Models\InvoiceKyc;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\Purchases;
use DB;
use Illuminate\Support\Facades\Storage;
use App\Models\PurchasePayments;
use App\Models\CustomerTransaction;
use App\Models\InvoiceSignature;
use App\Exports\SalesExport;
use Maatwebsite\Excel\Facades\Excel;
use PDF;
use Mail;

class DeliveryNotesController extends Controller
{
    public function createdeliverynote(Request $request)
    {
        try {
            
            $invprefix = 'DN';
            $deliverynotes = DeliveryNotes::create([
                'customer_id' => $request->input('formfields.customer_id'),
                'invoicekey' => $request->input('formfields.invoiceno'),
                'invoiceno' => $invprefix.'-'.$request->input('formfields.invoiceno'),
                'billing_address' => $request->input('formfields.billing_address'),
                'reference' => $request->input('formfields.reference'),
                'subtotal' => $request->input('formfields.subtotal'),
                'vattotal' => $request->input('formfields.vattotal'),
                'totalamount' => $request->input('formfields.totalamount'),
                'issue_date' => date("Y-m-d", strtotime($request->input('formfields.issue_date'))),
                'comment' => $request->input('formfields.comment'),
                'price_status' => ($request->input('formfields.price_difference_count')==0)?'match':'mismatch'
             ]);

            if(!empty($request->input('itemfields')))
            {
                foreach($request->input('itemfields') as $itemfield)
                {
                    $deliverynotesitems = DeliveryNotesItems::create([
                        'deliverynotes_id' => $deliverynotes->id,
                        'producttype_id' => $itemfield['invoice_typeid'],
                        'product_id' => $itemfield['invoice_product'],
                        'weight' => $itemfield['weight'],
                        'quantity' => $itemfield['quantity'],
                        'unitprice' => $itemfield['unitprice'],
                        'vat' => $itemfield['vat'],
                        'invoice_amount' => $itemfield['invoice_amount'],
                        'price_status' => ($itemfield['price_status']==0)?'match':'mismatch'
                    ]);
                }
            }
            return response()->json($deliverynotes);
        } 
        catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function deliverynoteslist()
    {
        $deliverynotes = DeliveryNotes::leftjoin('customers', 'customers.id', '=', 'delivery_notes.customer_id')->select('delivery_notes.*','customers.first_name as firstname','customers.last_name as lastname')->orderBy('delivery_notes.id', 'DESC')->get();

        foreach($deliverynotes as $key => $deliverynote)
        {
            $deliverynoteitems = DeliveryNotesItems::leftjoin('producttypes', 'producttypes.id', '=', 'delivery_notes_items.producttype_id')->select(DB::raw('group_concat(producttypes.name) as typename'))->where('deliverynotes_id',$deliverynote->id)->groupby('deliverynotes_id')->first();
            $deliverynotes[$key]->typename = ($deliverynoteitems)?$deliverynoteitems->typename:'';

        }
        return response()->json($deliverynotes);
    }

    public function deliverynotesdetails($id)
    {
        $deliverynotes = DeliveryNotes::leftjoin('customers', 'customers.id', '=', 'delivery_notes.customer_id')->select('delivery_notes.*','customers.first_name as firstname','customers.last_name as lastname','customers.vat as vat','customers.email as customer_email','customers.company_code as company_code','customers.customer_type as customer_type')->where('delivery_notes.id',$id)->orderBy('delivery_notes.id', 'DESC')->first();

        $deliverynotesitems = DeliveryNotesItems::leftjoin('producttypes', 'producttypes.id', '=', 'delivery_notes_items.producttype_id')->leftjoin('products', 'products.id', '=', 'delivery_notes_items.product_id')->select('delivery_notes_items.*','producttypes.name as typename','producttypes.metal_type as metal_type','products.name as productname')->where('deliverynotes_id',$id)->get();

        foreach($deliverynotesitems as $index => $deliverynotesitem)
        {
            $deliverynotesitems[$index]->invoice_type = $deliverynotesitem->typename;
            $deliverynotesitems[$index]->invoice_typeid = $deliverynotesitem->producttype_id;
            $deliverynotesitems[$index]->invoice_product = $deliverynotesitem->product_id;
        }

        $deliverynotes->deliverynotesitem = $deliverynotesitems;
        return response()->json($deliverynotes);
    }

    public function getinvoicekey()
    {
        $lastinvoice = DeliveryNotes::orderBy('invoicekey', 'DESC')->first();
        $invoicekey= (!empty($lastinvoice))?($lastinvoice->invoicekey)+1:1;
        return response()->json($invoicekey);
    }

    public function create()
    {
        $pdf = storage_path('pdf/test.pdf');
        return response()->download($pdf);
    }

    public function saleslistCustomer($id)
    {
        $sales = DeliveryNotes::leftjoin('customers', 'customers.id', '=', 'sales_invoice.customer_id')->select('sales_invoice.*','customers.first_name as firstname','customers.last_name as lastname')->where('sales_invoice.customer_id',$id)->orderBy('sales_invoice.id', 'DESC')->get();

        foreach($sales as $key => $sale)
        {
            $saleitems = SalesItems::leftjoin('producttypes', 'producttypes.id', '=', 'sales_items.producttype_id')->select(DB::raw('group_concat(producttypes.name) as typename'))->where('sales_id',$sale->id)->groupby('sales_id')->first();
            $sales[$key]->typename = ($saleitems)?$saleitems->typename:'';

            $salemethods = SalesPayments::where('sales_id',$sale->id)->where('action','!=','Exchange')->groupby('method')->get('method');
            $methods='';
            foreach($salemethods as $method)
            {
                $methods .=$method->method.',';
            }
            
            $sales[$key]->methoddata = (!empty($salemethods))?rtrim($methods, ','):'';
            $sales[$key]->typename = ($saleitems)?$saleitems->typename:'';
        }
        return response()->json($sales);
    }

    public function editdeliverynote(Request $request)
    {
        try {
            
            $deliverynotesdata = DeliveryNotes::where('id', $request->input('s_id'))->update([
                'customer_id' => $request->input('formfields.customer_id'),
                'billing_address' => $request->input('formfields.billing_address'),
                'reference' => $request->input('formfields.reference'),
                'subtotal' => $request->input('formfields.subtotal'),
                'vattotal' => $request->input('formfields.vattotal'),
                'totalamount' => $request->input('formfields.totalamount'),
                'issue_date' => date("Y-m-d", strtotime($request->input('formfields.issue_date'))),
                'comment' => $request->input('formfields.comment'),
                'price_status' => ($request->input('formfields.price_difference_count')==0)?'match':'mismatch'
             ]);

            $deliverynotes = DeliveryNotes::where('id',$request->input('s_id'))->first();


            $items_deliverynotes = DeliveryNotesItems::where('deliverynotes_id', $request->input('s_id'))->delete();

            if(!empty($request->input('itemfields')))
            {
                foreach($request->input('itemfields') as $itemfield)
                {
                    $deliverynotesitems = DeliveryNotesItems::create([
                        'deliverynotes_id' => $deliverynotes->id,
                        'producttype_id' => $itemfield['invoice_typeid'],
                        'product_id' => $itemfield['invoice_product'],
                        'weight' => $itemfield['weight'],
                        'quantity' => $itemfield['quantity'],
                        'unitprice' => $itemfield['unitprice'],
                        'vat' => $itemfield['vat'],
                        'invoice_amount' => $itemfield['invoice_amount'],
                        'price_status' => ($itemfield['price_status']==0)?'match':'mismatch'
                    ]);
                }
            }

            return response()->json($deliverynotes);
        } 
        catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function deletedeliverynote($id){
        $delete_items = DeliveryNotesItems::where('deliverynotes_id', $id)->delete();
        
        $delete_deliverynote = DeliveryNotes::find($id);
            if($delete_deliverynote){
                $delete_deliverynote->delete();
                return response()->json(
                    [
                        'status' => 'success',
                        'msg' => 'Delivery note deleted successfully'
                    ],
                    200
                );
            }else{
                return response()->json(['error' => 'Record does not exists'], 404);
            }
    }

    public function sendMailWithPDF(Request $request)
    {
        $data["email"] = "swati.suthar@bacancy.com";
        //$data["email"] = $request->input('customeremail');
        $data["title"] = "Welcome to Gold Bank Accounting Portal";
        $data["body"] = "This is the email body.";
        $data["salesdata"] = $request->input('salesdata');
        $data["companydata"] = $request->input('companydata');
        $data["signaturedata"] = $request->input('signaturedata');
        $data["output_tax"] = $request->input('output_tax');
        $data["invoicetitle"] = ($request->input('title')=='Purchase Order')?$request->input('title'):'Sales Invoice';
        $data["title"] = 'Invoice '.$data["salesdata"]['invoiceno'].' from Gold Bank for '.$data["salesdata"]['firstname'].' '.$data["salesdata"]['lastname'];
        //$pdfname = ($request->input('title')=='Purchase Order')?"Purchase Order.pdf":"Sales Invoice.pdf";
        $pdfname = 'Invoice '.$data["salesdata"]['invoiceno'].'.pdf';
        $pdf = PDF::loadView('mail', $data);

        try {
            Mail::send('Mails.invoice', $data, function ($message) use ($data, $pdf, $pdfname) {
                $message->to($data["email"], $data["email"])
                    ->subject($data["title"])
                    ->attachData($pdf->output(), $pdfname);
            });
            
            return response()->json(
                [
                    'status' => 'success',
                    'message' => 'Email has been sent successfully'
                ],
                200
            );
        }
        catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function exportsales(Request $request)
    {
        //return (new SalesExport())->download('sales.xlsx');
        return Excel::download(new SalesExport, 'users.xlsx');
    }
}
