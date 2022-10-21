<?php

namespace App\Http\Controllers\Api;

use App\Models\Purchases;
use App\Models\PurchaseItems;
use App\Models\PurchasePayments;
use App\Models\InvoiceOptions;
use App\Models\PurchaseNotes;
use App\Models\PurchaseHistory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use DB;
use App\Models\CustomerTransaction;
use App\Models\SalesPayments;
use App\Models\InvoiceSignature;
use PDF;
use Mail;

class PurchaseController extends Controller
{
    public function createinvoice(Request $request)
    {
        try {
            $invprefix = 'PO';
            $purchase = Purchases::create([
                'customer_id' => $request->input('formfields.customer_id'),
                'invoicekey' => $request->input('formfields.invoiceno'),
                'invoiceno' => $invprefix.'-'.$request->input('formfields.invoiceno'),
                'billing_address' => $request->input('formfields.billing_address'),
                'reference' => $request->input('formfields.reference'),
                'currency_id' => $request->input('formfields.currency_id'),
                'subtotal' => $request->input('formfields.subtotal'),
                'vattotal' => $request->input('formfields.vattotal'),
                'totalamount' => $request->input('formfields.totalamount'),
                'issue_date' => date("Y-m-d", strtotime($request->input('formfields.issue_date'))),
                'due_date' => date("Y-m-d", strtotime($request->input('formfields.due_date'))),
                'comment' => $request->input('formfields.comment'),
                'price_status' => ($request->input('formfields.price_difference_count')==0)?'match':'mismatch'
             ]);

            if(!empty($request->input('itemfields')))
            {
                foreach($request->input('itemfields') as $itemfield)
                {
                    $purchaseitems = PurchaseItems::create([
                        'purchase_id' => $purchase->id,
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

            $purchasehistory = PurchaseHistory::create([
                'purchase_id' => $purchase->id,
                'amount' => $request->input('formfields.totalamount'),
                'log_date' => date("Y-m-d"),
                'category' =>'invoice',
                'user_id' => Auth::user()->id,
                'changes' => $purchase->invoiceno.' '.'created',
                'comment' => 'Invoice '.$purchase->invoiceno.' of £'.$request->input("formfields.totalamount"). ' has been created by '.Auth::user()->first_name.' '.Auth::user()->last_name.'.'
           ]);

            $customertransaction = CustomerTransaction::create([
                'purchase_id' => $purchase->id,
                'customer_id' => $request->input('formfields.customer_id'),
                'amount' => $request->input('formfields.totalamount'),
                'amount_due' => $request->input('formfields.totalamount'),
                'activity' => 'Purchase Order '.$purchase->invoiceno,
                'purchase_history_id' => $purchasehistory->id,
            ]);

            return response()->json($purchase);
        } 
        catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function purchaselist()
    {
        $purchases = Purchases::leftjoin('customers', 'customers.id', '=', 'purchase_invoice.customer_id')->select('purchase_invoice.*','customers.first_name as firstname','customers.last_name as lastname')->orderBy('purchase_invoice.id', 'DESC')->get();

        foreach($purchases as $key => $purchase)
        {
            $purchaseitems = PurchaseItems::leftjoin('producttypes', 'producttypes.id', '=', 'purchase_items.producttype_id')->select(DB::raw('group_concat(producttypes.name) as typename'))->where('purchase_id',$purchase->id)->groupby('purchase_id')->first();

            $purchasemethods = PurchasePayments::where('purchase_id',$purchase->id)->groupby('method')->get('method');
            $methods='';
            foreach($purchasemethods as $method)
            {
                $methods .=$method->method.',';
            }
            
            $purchases[$key]->methoddata = (!empty($purchasemethods))?rtrim($methods, ','):'';

            $purchases[$key]->typename = ($purchaseitems)?$purchaseitems->typename:'';
        }
        
        return response()->json($purchases);
    }

    public function purchasedetails($id)
    {
        $purchase = Purchases::leftjoin('customers', 'customers.id', '=', 'purchase_invoice.customer_id')->select('purchase_invoice.*','customers.first_name as firstname','customers.last_name as lastname','customers.email as customer_email','customers.account_name as account_name','customers.account_number as account_number','customers.sort_code as sort_code','customers.customer_type as customer_type','customers.company_code as company_code',)->where('purchase_invoice.id',$id)->orderBy('purchase_invoice.id', 'DESC')->first();

        $purchaseitems = PurchaseItems::leftjoin('producttypes', 'producttypes.id', '=', 'purchase_items.producttype_id')->leftjoin('products', 'products.id', '=', 'purchase_items.product_id')->select('purchase_items.*','producttypes.name as typename','products.name as productname')->where('purchase_id',$id)->get();

        foreach($purchaseitems as $index => $purchaseitem)
        {
            $purchaseitems[$index]->invoice_type = $purchaseitem->typename;
            $purchaseitems[$index]->invoice_typeid = $purchaseitem->producttype_id;
            $purchaseitems[$index]->invoice_product = $purchaseitem->product_id;
        }

        $purchasepayments = PurchasePayments::where('purchase_id',$id)->orderBy('id', 'DESC')->get();

        $purchase->purchaseitem = $purchaseitems;
        $purchase->purchasepayments = $purchasepayments;
        
        $payment_received=0;
        if(!empty($purchasepayments))
        {
            foreach($purchasepayments as $payment)
            {
                $payment_received += $payment->totalamount;
            }
        }

        $purchase->payment_received = $payment_received;
        $purchase->payment_due = $purchase->totalamount - $payment_received;
        
        return response()->json($purchase);
    }

    public function createpayment(Request $request)
    {
        try {
            $purchasepayments = PurchasePayments::create([
                'purchase_id' => $request->input('purchase_id'),
                'payment_date' => date("Y-m-d", strtotime($request->input('payment_date'))),
                'totalamount' => $request->input('totalamount'),
                'method' => $request->input('method'),
                'bank' => $request->input('bank'),
                'comment' => $request->input('comment')
            ]);

            $purchasehistory = PurchaseHistory::create([
                'purchase_id' => $request->input('purchase_id'),
                'amount' => $request->input('totalamount'),
                'log_date' => date("Y-m-d"),
                'category' =>'payment',
                'comment' => 'Payment of £'.$request->input('totalamount').' '.'has been made by '.Auth::user()->first_name.' '.Auth::user()->last_name.'.',
                'user_id' => Auth::user()->id,
                'changes' => 'Payment Added',
            ]);

            $purchase = Purchases::where('id',$request->input('purchase_id'))->first();

            $purchasepayments1 = PurchasePayments::where('purchase_id',$request->input('purchase_id'))->orderBy('id', 'DESC')->get();

            $payment_received=0;
            if(!empty($purchasepayments1))
            {
                foreach($purchasepayments1 as $payment)
                {
                    $payment_received += $payment->totalamount;
                }
            }

            $payment_due = $purchase->totalamount - $payment_received;

            $customertransaction = CustomerTransaction::create([
                'purchase_id' => $request->input('purchase_id'),
                'customer_id' => $purchase->customer_id,
                'payment' => $request->input('totalamount'),
                'amount_due' => $payment_due,
                'activity' => 'Payment Received by '.$request->input('method').' Ref '.$purchase->invoiceno,
                'purchase_history_id' => $purchasehistory->id,
            ]);

            return response()->json($purchasepayments);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function deletepayment($id){
        $purchasepayment = PurchasePayments::find($id);
        $amount = $purchasepayment->totalamount;
        $purchase_id = $purchasepayment->purchase_id;
            if($purchasepayment){
                $purchasepayment->delete();
                //$delettransaction = CustomerTransaction::where('purchase_payment_id', $id)->delete();
                $purchasehistory = PurchaseHistory::create([
                    'purchase_id' => $purchase_id,
                    'amount' => $amount,
                    'log_date' => date("Y-m-d"),
                    'category' =>'payment',
                    'user_id' => Auth::user()->id,
                    'changes' => 'Payment Deleted',
                    'comment' => 'Payment of £'.$amount.' '.'has been deleted by '.Auth::user()->first_name.' '.Auth::user()->last_name.'.'
                ]);

                $purchase = Purchases::where('id',$purchase_id)->first();

                $purchasepayments = PurchasePayments::where('purchase_id',$purchase_id)->orderBy('id', 'DESC')->get();

                $payment_received=0;
                if(!empty($purchasepayments))
                {
                    foreach($purchasepayments as $payment)
                    {
                        $payment_received += $payment->totalamount;
                    }
                }

                $payment_due = $purchase->totalamount - $payment_received;

                $customertransaction = CustomerTransaction::create([
                    'purchase_id' =>  $purchase_id,
                    'customer_id' => $purchase->customer_id,
                    'payment' => $amount,
                    'amount_due' => $payment_due,
                    'activity' => 'Payment Deleted by for Ref '.$purchase->invoiceno,
                    'purchase_history_id' => $purchasehistory->id,
                ]);
                
                return response()->json(
                    [
                        'status' => 'success',
                        'msg' => 'Payment deleted successfully'
                    ],
                    200
                );
            }else{
                return response()->json(['error' => 'Record does not exists'], 404);
            }
    }

    public function getinvoicekey()
    {
        $lastinvoice = Purchases::orderBy('invoicekey', 'DESC')->first();
        $invoicekey= (!empty($lastinvoice))?($lastinvoice->invoicekey)+1:1;
        return response()->json($invoicekey);
    }

    public function createnote(Request $request)
    {
        try {
            $purchasenotes = PurchaseNotes::create([
                'purchase_id' => $request->input('purchase_id'),
                'comment' => $request->input('note'),
            ]);

            $purchasehistory = PurchaseHistory::create([
                'purchase_id' => $request->input('purchase_id'),
                'amount' => '',
                'note' => $request->input('note'),
                'log_date' => date("Y-m-d"),
                'category' =>'note',
                'user_id' => Auth::user()->id,
                'changes' => 'Note Created',
                'comment' => 'Note : '.$request->input('note').' '.'has been created by '.Auth::user()->first_name.' '.Auth::user()->last_name.'.'
            ]);

            return response()->json($purchasenotes);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function purchasehistory($id)
    {
        $purchasehistory = PurchaseHistory::leftjoin('users', 'users.id', '=', 'purchase_history.user_id')->select('purchase_history.*','users.first_name as firstname','users.last_name as lastname')->where('purchase_history.purchase_id',$id)->orderBy('purchase_history.id', 'DESC')->get();

        return response()->json($purchasehistory);
    }

    public function updateorderstatus(Request $request)
    {
        try {
            $purchasedata = Purchases::where('id', $request->input('purchase_id'))->update([
                'status' => $request->input('status'),
                
            ]);
            return response()->json($purchasedata);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function purchasebystatus($status)
    {
        $purchases = Purchases::leftjoin('customers', 'customers.id', '=', 'purchase_invoice.customer_id')->select('purchase_invoice.*','customers.first_name as firstname','customers.last_name as lastname')->where('status',$status)->orderBy('purchase_invoice.id', 'DESC')->get();

        foreach($purchases as $key => $purchase)
        {
            $purchaseitems = PurchaseItems::leftjoin('producttypes', 'producttypes.id', '=', 'purchase_items.producttype_id')->select(DB::raw('group_concat(producttypes.name) as typename'))->where('purchase_id',$purchase->id)->groupby('purchase_id')->first();

            $purchasemethods = PurchasePayments::where('purchase_id',$purchase->id)->groupby('method')->get('method');
            $methods='';
            foreach($purchasemethods as $method)
            {
                $methods .=$method->method.',';
            }
            
            $purchases[$key]->methoddata = (!empty($purchasemethods))?rtrim($methods, ','):'';
            $purchases[$key]->typename = ($purchaseitems)?$purchaseitems->typename:'';
        }
        return response()->json($purchases);
    }

    public function purchaselistCustomer($id)
    {
        $purchases = Purchases::leftjoin('customers', 'customers.id', '=', 'purchase_invoice.customer_id')->select('purchase_invoice.*','customers.first_name as firstname','customers.last_name as lastname')->where('purchase_invoice.customer_id',$id)->orderBy('purchase_invoice.id', 'DESC')->get();

        foreach($purchases as $key => $purchase)
        {
            $purchaseitems = PurchaseItems::leftjoin('producttypes', 'producttypes.id', '=', 'purchase_items.producttype_id')->select(DB::raw('group_concat(producttypes.name) as typename'))->where('purchase_id',$purchase->id)->groupby('purchase_id')->first();

            $purchasemethods = PurchasePayments::where('purchase_id',$purchase->id)->groupby('method')->get('method');
            $methods='';
            foreach($purchasemethods as $method)
            {
                $methods .=$method->method.',';
            }
            
            $purchases[$key]->methoddata = (!empty($purchasemethods))?rtrim($methods, ','):'';

            $purchases[$key]->typename = $purchaseitems->typename;
        }
        return response()->json($purchases);
    }

    public function editpurchase(Request $request)
    {
        try {
            
            $purchasedata = Purchases::where('id', $request->input('po_id'))->update([
                'customer_id' => $request->input('formfields.customer_id'),
                'billing_address' => $request->input('formfields.billing_address'),
                'reference' => $request->input('formfields.reference'),
                'currency_id' => $request->input('formfields.currency_id'),
                'subtotal' => $request->input('formfields.subtotal'),
                'vattotal' => $request->input('formfields.vattotal'),
                'totalamount' => $request->input('formfields.totalamount'),
                'issue_date' => date("Y-m-d", strtotime($request->input('formfields.issue_date'))),
                'due_date' => date("Y-m-d", strtotime($request->input('formfields.due_date'))),
                'comment' => $request->input('formfields.comment'),
                'price_status' => ($request->input('formfields.price_difference_count')==0)?'match':'mismatch',
                'status' => 'UnPaid',
             ]);

            $purchase = Purchases::where('id',$request->input('po_id'))->first();

            $items_purchased = PurchaseItems::where('purchase_id', $request->input('po_id'))->delete();

            if(!empty($request->input('itemfields')))
            {
                foreach($request->input('itemfields') as $itemfield)
                {
                    $purchaseitems = PurchaseItems::create([
                        'purchase_id' => $request->input('po_id'),
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

            $purchasehistory = PurchaseHistory::create([
                'purchase_id' => $request->input('po_id'),
                'amount' => $request->input('formfields.totalamount'),
                'log_date' => date("Y-m-d"),
                'category' =>'invoice',
                'user_id' => Auth::user()->id,
                'changes' => $purchase->invoiceno.' '.'created',
                'comment' => 'Invoice '.$purchase->invoiceno.' of £'.$request->input("formfields.totalamount"). ' has been edited by '.Auth::user()->first_name.' '.Auth::user()->last_name.'.'
           ]);

            $customertransaction = CustomerTransaction::create([
                'purchase_id' => $request->input('po_id'),
                'customer_id' => $request->input('formfields.customer_id'),
                'amount' => $request->input('formfields.totalamount'),
                'amount_due' => $request->input('formfields.totalamount'),
                'activity' => 'Purchase Order '.$purchase->invoiceno,
                'purchase_history_id' => $purchasehistory->id,
            ]);

            return response()->json($purchase);
        } 
        catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function deletepurchaseorder($id){
        $delete_transaction = CustomerTransaction::where('purchase_id', $id)->delete();
        $delete_history = PurchaseHistory::where('purchase_id', $id)->delete();
        $delete_payments = PurchasePayments::where('purchase_id', $id)->delete();
        $delete_items = PurchaseItems::where('purchase_id', $id)->delete();
        $delete_notes = PurchaseNotes::where('purchase_id', $id)->delete();
        $delete_sales_payments = SalesPayments::where('purchase_id', $id)->delete();
        $delete_purchase = Purchases::find($id);
            if($delete_purchase){
                $delete_purchase->delete();
                return response()->json(
                    [
                        'status' => 'success',
                        'msg' => 'Purchase Order deleted successfully'
                    ],
                    200
                );
            }else{
                return response()->json(['error' => 'Record does not exists'], 404);
            }
    }

    public function addsignature(Request $request)
    {
        $image = $request->input('signature');
        $image = str_replace('data:image/png;base64,', '', $image);
        $image = str_replace(' ', '+', $image);
        $imageName = 'Signature_'.time().'.'.'png';
        $imagepath = \File::put(public_path(). '/uploads/' . $imageName, base64_decode($image));
        
        $invoicesignature = InvoiceSignature::create([
            'purchase_id' => $request->input('purchase_id'),
            'signature_filename' => $imageName,
            'signed_by' => $request->input('signedby')
        ]);

        return response()->json($invoicesignature);
    }

    public function fetchinvoicesignature($id)
    {
        $signature = InvoiceSignature::where('purchase_id',$id)->first();

        return response()->json($signature);
    }

    public function sendMailWithPDF(Request $request)
    {
        $data["email"] = "ishita.shah@bacancy.com";
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
        $pdf = PDF::loadView('purchasemail', $data);

        // try {
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
        // }
        // catch (\Exception $e) {
        //     return response([
        //         'message' => 'Internal error, please try again later.' //$e->getMessage()
        //     ], 400);
        // }
    }
}
