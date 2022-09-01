<?php

namespace App\Http\Controllers\Api;

use App\Models\Sales;
use App\Models\SalesItems;
use App\Models\SalesPayments;
use App\Models\InvoiceOptions;
use App\Models\SalesNotes;
use App\Models\SalesHistory;
use App\Models\SalesRefunds;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use DB;

class SalesController extends Controller
{
    public function createinvoice(Request $request)
    {
        try {
            // $invoiceoptions = InvoiceOptions::where('id',1)->first();
            // if(!empty($invoiceoptions))
            // {
            //     $invprefix = ($invoiceoptions->invoice_name)?$invoiceoptions->invoice_name:'INV';
            // }
            // else
            // {
            //     $invprefix = 'INV';
            // }
            // $lastinvoice = Sales::orderBy('id', 'DESC')->first();
            // $invoicekey= (!empty($lastinvoice))?($lastinvoice->invoicekey)+1:1;
            $invprefix = 'INV';
            $sales = Sales::create([
                'customer_id' => $request->input('formfields.customer_id'),
                'invoicekey' => $request->input('formfields.invoiceno'),
                'invoiceno' => $invprefix.'-'.$request->input('formfields.invoiceno'),
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

            $saleshistory = SalesHistory::create([
                'sales_id' => $sales->id,
                'amount' => $request->input('formfields.totalamount'),
                'log_date' => date("Y-m-d"),
                'category' =>'invoice',
                'user_id' => Auth::user()->id,
                'changes' => $sales->invoiceno.' '.'created',
                'comment' => 'Invoice '.$sales->invoiceno.' of £'.$request->input("formfields.totalamount"). 'has been created by '.Auth::user()->first_name.' '.Auth::user()->last_name.'.'
            ]);

            return response()->json($sales);
        } 
        catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function saleslist()
    {
        $sales = Sales::leftjoin('customers', 'customers.id', '=', 'sales_invoice.customer_id')->select('sales_invoice.*','customers.first_name as firstname','customers.last_name as lastname')->orderBy('sales_invoice.id', 'DESC')->get();

        foreach($sales as $key => $sale)
        {
            $saleitems = SalesItems::leftjoin('producttypes', 'producttypes.id', '=', 'sales_items.producttype_id')->select(DB::raw('group_concat(producttypes.name) as typename'))->where('sales_id',$sale->id)->groupby('sales_id')->first();
            $sales[$key]->typename = $saleitems->typename;

            $salemethods = SalesPayments::where('sales_id',$sale->id)->groupby('method')->get('method');
            $methods='';
            foreach($salemethods as $method)
            {
                $methods .=$method->method.',';
            }
            
            $sales[$key]->methoddata = (!empty($salemethods))?rtrim($methods, ','):'';
            $sales[$key]->typename = $saleitems->typename;
        }
        return response()->json($sales);
    }

    public function salesdetails($id)
    {
        $sales = Sales::leftjoin('customers', 'customers.id', '=', 'sales_invoice.customer_id')->select('sales_invoice.*','customers.first_name as firstname','customers.last_name as lastname','customers.vat as vat')->where('sales_invoice.id',$id)->orderBy('sales_invoice.id', 'DESC')->first();

        $saleitems = SalesItems::leftjoin('producttypes', 'producttypes.id', '=', 'sales_items.producttype_id')->leftjoin('products', 'products.id', '=', 'sales_items.product_id')->select('sales_items.*','producttypes.name as typename','products.name as productname')->where('sales_id',$id)->get();

        $salepayments = SalesPayments::where('sales_id',$id)->orderBy('id', 'DESC')->get();

        $refund = SalesPayments::select(DB::raw("SUM(totalamount) as refundamount"))->where('action', 'Refund')->where('sales_id',$id)->first();
        $paid = SalesPayments::select(DB::raw("SUM(totalamount) as paidamount"))->where('action', 'Receive')->where('sales_id',$id)->first();

        $sales->salesitem = $saleitems;
        $sales->salepayments = $salepayments;
        
        $payment_received=0;
        if(!empty($salepayments))
        {
            foreach($salepayments as $payment)
            {
                $payment_received += $payment->totalamount;
            }
        }
        
        $sales->payment_received = $payment_received;
        $sales->payment_due = $sales->totalamount - $paid->paidamount;
        $sales->payment_due = $sales->payment_due + $refund->refundamount;
        
        return response()->json($sales);
    }

    public function createpayment(Request $request)
    {
        try {
            $salespayments = SalesPayments::create([
                'sales_id' => $request->input('sales_id'),
                'payment_date' => date("Y-m-d", strtotime($request->input('payment_date'))),
                'totalamount' => $request->input('totalamount'),
                'method' => $request->input('method'),
                'bank' => $request->input('bank'),
                'comment' => $request->input('comment'),
                'action' => $request->input('action'),
            ]);

            $saleshistory = SalesHistory::create([
                'sales_id' => $request->input('sales_id'),
                'amount' => $request->input('totalamount'),
                'log_date' => date("Y-m-d"),
                'category' =>'payment',
                'user_id' => Auth::user()->id,
                'changes' => 'Payment Added',
                
                'comment' => 'Payment of £'.$request->input('totalamount').' '.'has been made by '.Auth::user()->first_name.' '.Auth::user()->last_name.'.'
                
            ]);

            return response()->json($salespayments);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function deletepayment($id){
        $salepayment = SalesPayments::find($id);
        $amount = $salepayment->totalamount;
        $sales_id = $salepayment->sales_id;
            if($salepayment){
                $salepayment->delete();

                $saleshistory = SalesHistory::create([
                    'sales_id' => $sales_id,
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

    public function createrefund(Request $request)
    {
        try {
            $salesrefunds = SalesRefunds::create([
                'sales_id' => $request->input('sales_id'),
                'refund_date' => date("Y-m-d", strtotime($request->input('refund_date'))),
                'totalamount' => $request->input('totalamount'),
                'method' => $request->input('method'),
                'bank' => $request->input('bank'),
                'comment' => $request->input('comment')
            ]);

            $saleshistory = SalesHistory::create([
                'sales_id' => $request->input('sales_id'),
                'amount' => $request->input('totalamount'),
                'log_date' => date("Y-m-d"),
                'category' =>'refund',
                'user_id' => Auth::user()->id,
                'changes' => 'Refund Issued',
                'comment' => 'Refund of £'.$request->input('totalamount').' '.'has been issued by '.Auth::user()->first_name.' '.Auth::user()->last_name.'.'
            ]);

            return response()->json($salesrefunds);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function deleterefund($id){
        $salesrefund = SalesRefunds::find($id);
        $amount = $salesrefund->totalamount;
        $sales_id = $salesrefund->sales_id;
            if($salesrefund){
                $salesrefund->delete();

                $saleshistory = SalesHistory::create([
                    'sales_id' => $sales_id,
                    'amount' => $amount,
                    'log_date' => date("Y-m-d"),
                    'category' =>'refund',
                    'user_id' => Auth::user()->id,
                    'changes' => 'Refund Deleted',
                    'comment' => 'Refund of £'.$amount.' '.'has been deleted by '.Auth::user()->first_name.' '.Auth::user()->last_name.'.'
                ]);
                
                return response()->json(
                    [
                        'status' => 'success',
                        'msg' => 'Refund deleted successfully'
                    ],
                    200
                );
            }else{
                return response()->json(['error' => 'Record does not exists'], 404);
            }
    }


    public function getinvoicekey()
    {
        $lastinvoice = Sales::orderBy('invoicekey', 'DESC')->first();
        $invoicekey= (!empty($lastinvoice))?($lastinvoice->invoicekey)+1:1;
        return response()->json($invoicekey);
    }

    public function createnote(Request $request)
    {
        try {
            $salesnotes = SalesNotes::create([
                'sales_id' => $request->input('sales_id'),
                'comment' => $request->input('note'),
            ]);

            $saleshistory = SalesHistory::create([
                'sales_id' => $request->input('sales_id'),
                'amount' => '',
                'note' => $request->input('note'),
                'log_date' => date("Y-m-d"),
                'category' =>'note',
                'user_id' => Auth::user()->id,
                'changes' => 'Note Created',
                'comment' => 'Note : '.$request->input('note').' '.'has been created by '.Auth::user()->first_name.' '.Auth::user()->last_name.'.'
            ]);

            return response()->json($salesnotes);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function saleshistory($id)
    {
        $saleshistory = SalesHistory::leftjoin('users', 'users.id', '=', 'sales_history.user_id')->select('sales_history.*','users.first_name as firstname','users.last_name as lastname')->where('sales_history.sales_id',$id)->orderBy('sales_history.id', 'DESC')->get();
        
        return response()->json($saleshistory);
    }

    public function updateinvoicestatus(Request $request)
    {
        try {
            $saledata = Sales::where('id', $request->input('sales_id'))->update([
                'status' => $request->input('status'),
                
            ]);
            return response()->json($saledata);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function salesbystatus($status)
    {
        $sales = Sales::leftjoin('customers', 'customers.id', '=', 'sales_invoice.customer_id')->select('sales_invoice.*','customers.first_name as firstname','customers.last_name as lastname')->where('status',$status)->orderBy('sales_invoice.id', 'DESC')->get();

        foreach($sales as $key => $sale)
        {
            $saleitems = SalesItems::leftjoin('producttypes', 'producttypes.id', '=', 'sales_items.producttype_id')->select(DB::raw('group_concat(producttypes.name) as typename'))->where('sales_id',$sale->id)->groupby('sales_id')->first();
            $sales[$key]->typename = $saleitems->typename;

            $salemethods = SalesPayments::where('sales_id',$sale->id)->groupby('method')->get('method');
            $methods='';
            foreach($salemethods as $method)
            {
                $methods .=$method->method.',';
            }
            
            $sales[$key]->methoddata = (!empty($salemethods))?rtrim($methods, ','):'';
        }
        return response()->json($sales);
    }
}
