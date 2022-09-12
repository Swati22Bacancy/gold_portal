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
                'comment' => $request->input('formfields.comment')
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
                        'invoice_amount' => $itemfield['invoice_amount']
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
                'comment' => 'Invoice '.$purchase->invoiceno.' of £'.$request->input("formfields.totalamount"). 'has been created by '.Auth::user()->first_name.' '.Auth::user()->last_name.'.'
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

            $purchases[$key]->typename = $purchaseitems->typename;
        }
        return response()->json($purchases);
    }

    public function purchasedetails($id)
    {
        $purchase = Purchases::leftjoin('customers', 'customers.id', '=', 'purchase_invoice.customer_id')->select('purchase_invoice.*','customers.first_name as firstname','customers.last_name as lastname')->where('purchase_invoice.id',$id)->orderBy('purchase_invoice.id', 'DESC')->first();

        $purchaseitems = PurchaseItems::leftjoin('producttypes', 'producttypes.id', '=', 'purchase_items.producttype_id')->leftjoin('products', 'products.id', '=', 'purchase_items.product_id')->select('purchase_items.*','producttypes.name as typename','products.name as productname')->where('purchase_id',$id)->get();

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

                $purchasehistory = PurchaseHistory::create([
                    'purchase_id' => $purchase_id,
                    'amount' => $amount,
                    'log_date' => date("Y-m-d"),
                    'category' =>'payment',
                    'user_id' => Auth::user()->id,
                    'changes' => 'Payment Deleted',
                    'comment' => 'Payment of £'.$amount.' '.'has been deleted by '.Auth::user()->first_name.' '.Auth::user()->last_name.'.'
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
            $purchases[$key]->typename = $purchaseitems->typename;
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
}
