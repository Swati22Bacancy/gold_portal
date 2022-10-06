<?php

namespace App\Http\Controllers\Api;

use App\Models\Sales;
use App\Models\SalesItems;
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
                'comment' => $request->input('formfields.comment'),
                'price_status' => ($request->input('formfields.price_difference_count')==0)?'match':'mismatch'
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
                        'invoice_amount' => $itemfield['invoice_amount'],
                        'price_status' => ($itemfield['price_status']==0)?'match':'mismatch'
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

            $customertransaction = CustomerTransaction::create([
                'sales_id' => $sales->id,
                'customer_id' => $request->input('formfields.customer_id'),
                'amount' => $request->input('formfields.totalamount'),
                'amount_due' => $request->input('formfields.totalamount'),
                'activity' => 'Invoice '.$sales->invoiceno,
                'sales_history_id' => $saleshistory->id,
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

    public function salesdetails($id)
    {
        $sales = Sales::leftjoin('customers', 'customers.id', '=', 'sales_invoice.customer_id')->select('sales_invoice.*','customers.first_name as firstname','customers.last_name as lastname','customers.vat as vat')->where('sales_invoice.id',$id)->orderBy('sales_invoice.id', 'DESC')->first();

        $saleitems = SalesItems::leftjoin('producttypes', 'producttypes.id', '=', 'sales_items.producttype_id')->leftjoin('products', 'products.id', '=', 'sales_items.product_id')->select('sales_items.*','producttypes.name as typename','products.name as productname')->where('sales_id',$id)->get();

        foreach($saleitems as $index => $saleitem)
        {
            $saleitems[$index]->invoice_type = $saleitem->typename;
            $saleitems[$index]->invoice_typeid = $saleitem->producttype_id;
            $saleitems[$index]->invoice_product = $saleitem->product_id;
        }

        $salepayments = SalesPayments::where('sales_id',$id)->orderBy('id', 'DESC')->get();

        $refund = SalesPayments::select(DB::raw("SUM(totalamount) as refundamount"))->where('action', 'Refund')->where('sales_id',$id)->first();
        $paid = SalesPayments::select(DB::raw("SUM(totalamount) as paidamount"))->whereIn('action', array('Receive', 'Exchange'))->where('sales_id',$id)->first();

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
            $historyaction= ($request->input('action')=='Receive')?'Payment':'Refund';
            $saleshistory = SalesHistory::create([
                'sales_id' => $request->input('sales_id'),
                'amount' => $request->input('totalamount'),
                'log_date' => date("Y-m-d"),
                'category' =>'payment',
                'user_id' => Auth::user()->id,
                'changes' => $historyaction.' Added',
                
                'comment' => $historyaction.' of £'.$request->input('totalamount').' '.'has been made by '.Auth::user()->first_name.' '.Auth::user()->last_name.'.'
                
            ]);

            $sales = Sales::where('id',$request->input('sales_id'))->first();

            $refund = SalesPayments::select(DB::raw("SUM(totalamount) as refundamount"))->where('action', 'Refund')->where('sales_id',$request->input('sales_id'))->first();
        
            $paid = SalesPayments::select(DB::raw("SUM(totalamount) as paidamount"))->whereIn('action', array('Receive', 'Exchange'))->where('sales_id',$request->input('sales_id'))->first();

            $payment_due = $sales->totalamount - $paid->paidamount;
            $payment_due = $payment_due + $refund->refundamount;

            $activity= ($request->input('action')=='Receive')?'Payment Received by':'Refunded by';

            $customertransaction = CustomerTransaction::create([
                'sales_id' => $request->input('sales_id'),
                'customer_id' => $sales->customer_id,
                'payment' => $request->input('totalamount'),
                'amount_due' => $payment_due,
                'activity' => $activity.' '.$request->input('method').' Ref '.$sales->invoiceno,
                'sales_history_id' => $saleshistory->id,
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
        $action = $salepayment->action;
        $sales_id = $salepayment->sales_id;
            if($salepayment){
                
                $salepayment->delete();
                
                $historyaction= ($action=='Receive')?'Payment':(($action=='Refund')? 'Refund': 'Payment');

                $refund = SalesPayments::select(DB::raw("SUM(totalamount) as refundamount"))->where('action', 'Refund')->where('sales_id',$sales_id)->first();
        
                $paid = SalesPayments::select(DB::raw("SUM(totalamount) as paidamount"))->whereIn('action', array('Receive', 'Exchange'))->where('sales_id',$sales_id)->first();

                $sales = Sales::where('id',$sales_id)->first();

                $payment_due = $sales->totalamount - $paid->paidamount;
                $payment_due = $payment_due + $refund->refundamount;

                if($payment_due==0)
                {
                    $status='Paid';
                }
                else if($payment_due<0)
                {
                    $status='Over Paid';
                }
                else if($payment_due == $sales->totalamount)
                {
                    $status='UnPaid';
                }
                else
                {
                    $status='Partially Paid';
                }

                $saledata = Sales::where('id', $sales_id)->update([
                    'status' => $status,
                ]);

                $saleshistory = SalesHistory::create([
                    'sales_id' => $sales_id,
                    'amount' => $amount,
                    'log_date' => date("Y-m-d"),
                    'category' =>'payment',
                    'user_id' => Auth::user()->id,
                    'changes' => $historyaction.' Deleted',
                    'comment' => $historyaction.' of £'.$amount.' '.'has been deleted by '.Auth::user()->first_name.' '.Auth::user()->last_name.'.'
                ]);

                $sales = Sales::where('id', $sales_id)->first();

                $refund = SalesPayments::select(DB::raw("SUM(totalamount) as refundamount"))->where('action', 'Refund')->where('sales_id', $sales_id)->first();
            
                $paid = SalesPayments::select(DB::raw("SUM(totalamount) as paidamount"))->whereIn('action', array('Receive', 'Exchange'))->where('sales_id', $sales_id)->first();

                $payment_due = $sales->totalamount - $paid->paidamount;
                $payment_due = $payment_due + $refund->refundamount;

                $customertransaction = CustomerTransaction::create([
                    'sales_id' =>  $sales_id,
                    'customer_id' => $sales->customer_id,
                    'payment' => $amount,
                    'amount_due' => $payment_due,
                    'activity' => 'Payment Deleted by for Ref '.$sales->invoiceno,
                    'sales_history_id' => $saleshistory->id,
                ]);
                
                return response()->json(
                    [
                        'status' => 'success',
                        'msg' => 'Record deleted successfully'
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
            $sales[$key]->typename = ($saleitems)?$saleitems->typename:'';

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

    public function uploadkyc(Request $request)
    {
        try {
            if ($request->hasFile('kyc')) {
                $files = $request->file('kyc');
                foreach($files as $file)
                {
                    $newName = 'customer_kyc_'.time() . '_' . $file->getClientOriginalName();
                    $file->storeAs('Customeruploads', $newName);
                    $originalName = $file->getClientOriginalName();

                    $invoicekyc = InvoiceKyc::create([
                        'sales_id' => $request->input('sales_id'),
                        'identification_file' => $newName,
                        'identification_file_original_name' => $originalName,
                        'category' => $request->input('category'),
                        'file_type' => $file->extension()
                    ]);
                }
                return response()->json($invoicekyc);
            }
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function fetchkyc($id)
    {
        $uploadeddocs = array();
        $uploadeddocs['regdocs'] = InvoiceKyc::where('sales_id',$id)->where('category','=','registration')->get();
        $uploadeddocs['vatdocs'] = InvoiceKyc::where('sales_id',$id)->where('category','=','vat')->get();
        foreach($uploadeddocs['vatdocs'] as $key => $vatdoc)
        {
            $uploadeddocs['vatdocs'][$key]['imageurl'] = Storage::url(
                'app/Customeruploads/' . $vatdoc['identification_file']
            );
        }
        $uploadeddocs['iddocs'] = InvoiceKyc::where('sales_id',$id)->where('category','=','iddoc')->get();
        $uploadeddocs['creditdocs'] = InvoiceKyc::where('sales_id',$id)->where('category','=','credit')->get();
        return response()->json($uploadeddocs);
    }

    public function deletefile($id){
        $kycfile = InvoiceKyc::find($id);
        
        if($kycfile){
                $kycfile->delete();
                return response()->json(
                    [
                        'status' => 'success',
                        'msg' => 'File deleted successfully'
                    ],
                    200
                );
            }else{
                return response()->json(['error' => 'Record does not exists'], 404);
            }
    }

    public function downloadkyc(Request $request)
    {
        return response()->download(storage_path('app/Customeruploads/'.$request->image), $request->image)->setStatusCode(200);
    }

    public function applycontra(Request $request)
    {
        $purchase = Purchases::where('id',$request->input('purchase_id'))->first();
        try {
            $salespayments = SalesPayments::create([
                'sales_id' => $request->input('sales_id'),
                'payment_date' => date("Y-m-d"),
                'totalamount' => $purchase->totalamount,
                'method' => 'Contra with '.$purchase->invoiceno,
                'bank' => '',
                'comment' => $request->input('comment'),
                'action' => $request->input('action'),
                'purchase_id' => $request->input('purchase_id')
            ]);
            
            $historyaction= 'Exchange';
            $saleshistory = SalesHistory::create([
                'sales_id' => $request->input('sales_id'),
                'amount' => $purchase->totalamount,
                'log_date' => date("Y-m-d"),
                'category' =>'exchange',
                'user_id' => Auth::user()->id,
                'changes' => 'Payment Added',
                
                'comment' => 'Contra credit of of £'.$purchase->totalamount.' '.'has been made by '.Auth::user()->first_name.' '.Auth::user()->last_name.' against Purchase Order '.$purchase->invoiceno.'.'
                
            ]);

            $sales = Sales::where('id',$request->input('sales_id'))->first();

            $refund = SalesPayments::select(DB::raw("SUM(totalamount) as refundamount"))->where('action', 'Refund')->where('sales_id',$request->input('sales_id'))->first();
        
            $paid = SalesPayments::select(DB::raw("SUM(totalamount) as paidamount"))->whereIn('action', array('Receive', 'Exchange'))->where('sales_id',$request->input('sales_id'))->first();

            $payment_due = $sales->totalamount - $paid->paidamount;
            $payment_due = $payment_due + $refund->refundamount;

            $activity= ($request->input('action')=='Receive')?'Payment Received by':'Refunded by';

            $customertransaction = CustomerTransaction::create([
                'sales_id' => $request->input('sales_id'),
                'customer_id' => $sales->customer_id,
                'payment' =>  $purchase->totalamount,
                'amount_due' => $payment_due,
                'activity' => 'Contra with Purchase Order '.$purchase->invoiceno.' Ref Sale Invoice'.$sales->invoiceno,
                'sales_payment_id' => $salespayments->id,
            ]);

            return response()->json($salespayments);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function create()
    {
        $pdf = storage_path('pdf/test.pdf');
        return response()->download($pdf);
    }

    public function saleslistCustomer($id)
    {
        $sales = Sales::leftjoin('customers', 'customers.id', '=', 'sales_invoice.customer_id')->select('sales_invoice.*','customers.first_name as firstname','customers.last_name as lastname')->where('sales_invoice.customer_id',$id)->orderBy('sales_invoice.id', 'DESC')->get();

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

    public function getCustomerTransactions($id)
    {
        $customertransactions = CustomerTransaction::where('customer_id',$id)->orderBy('id', 'DESC')->get();

        return response()->json($customertransactions);
    }

    public function getCustomerSummary($id)
    {
        $customersummary=[];
        
        //Sales Summary

        $invoiceall = Sales::where('customer_id',$id)->selectRaw("count(id) as counter")->first();
        $invoiceunpaid = Sales::where('customer_id',$id)->where('status','UnPaid')->selectRaw("count(id) as unpaid")->first();
        $invoicetotal = Sales::select(DB::raw("SUM(totalamount) as invoicetotal"))->where('customer_id',$id)->first();
        
        $customersummary['invoiceall']=$invoiceall->counter;
        $customersummary['invoiceunpaid']=$invoiceunpaid->unpaid;
        $customersummary['invoicetotal']=$invoicetotal->invoicetotal;
        
        $paid = SalesPayments::leftjoin('sales_invoice', 'sales_invoice.id', '=', 'sales_payments.sales_id')->select(DB::raw("SUM(sales_payments.totalamount) as paidamount"))->whereIn('sales_payments.action', array('Receive', 'Exchange'))->where('sales_invoice.customer_id',$id)->first();

        $refund = SalesPayments::leftjoin('sales_invoice', 'sales_invoice.id', '=', 'sales_payments.sales_id')->select(DB::raw("SUM(sales_payments.totalamount) as refundamount"))->where('sales_payments.action', 'Refund')->where('sales_invoice.customer_id',$id)->first();

        $payment_due = $invoicetotal->invoicetotal - $paid->paidamount;
        $customersummary['payment_due'] = $payment_due + $refund->refundamount;

        //Purchase Summary

        $purchaseall = Purchases::where('customer_id',$id)->selectRaw("count(id) as counter")->first();
        $purchaseunpaid = Purchases::where('customer_id',$id)->where('status','UnPaid')->selectRaw("count(id) as unpaid")->first();
        $purchasetotal = Purchases::select(DB::raw("SUM(totalamount) as purchasetotal"))->where('customer_id',$id)->first();

        $customersummary['purchaseall']=$purchaseall->counter;
        $customersummary['purchaseunpaid']=$purchaseunpaid->unpaid;
        $customersummary['purchasetotal']=$purchasetotal->purchasetotal;

        $paidpurchase = PurchasePayments::leftjoin('purchase_invoice', 'purchase_invoice.id', '=', 'purchase_payments.purchase_id')->select(DB::raw("SUM(purchase_payments.totalamount) as paidamount"))->where('purchase_invoice.customer_id',$id)->first();

        $customersummary['payment_duepurchase'] = $purchasetotal->purchasetotal - $paidpurchase->paidamount;
        
        return response()->json($customersummary);
    }

    public function editinvoice(Request $request)
    {
        try {
            
            $salesdata = Sales::where('id', $request->input('s_id'))->update([
                'customer_id' => $request->input('formfields.customer_id'),
                'billing_address' => $request->input('formfields.billing_address'),
                'reference' => $request->input('formfields.reference'),
                'currency_id' => $request->input('formfields.currency_id'),
                'recurring_invoice' => $request->input('formfields.recurring_invoice'),
                'subtotal' => $request->input('formfields.subtotal'),
                'vattotal' => $request->input('formfields.vattotal'),
                'totalamount' => $request->input('formfields.totalamount'),
                'issue_date' => date("Y-m-d", strtotime($request->input('formfields.issue_date'))),
                'due_date' => date("Y-m-d", strtotime($request->input('formfields.due_date'))),
                'comment' => $request->input('formfields.comment'),
                'price_status' => ($request->input('formfields.price_difference_count')==0)?'match':'mismatch',
                'status' => 'UnPaid'
             ]);

            $sales = Sales::where('id',$request->input('s_id'))->first();


            $items_sales = SalesItems::where('sales_id', $request->input('s_id'))->delete();

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
                        'invoice_amount' => $itemfield['invoice_amount'],
                        'price_status' => ($itemfield['price_status']==0)?'match':'mismatch'
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
                'comment' => 'Invoice '.$sales->invoiceno.' of £'.$request->input("formfields.totalamount"). 'has been edited by '.Auth::user()->first_name.' '.Auth::user()->last_name.'.'
            ]);

            $customertransaction = CustomerTransaction::create([
                'sales_id' => $sales->id,
                'customer_id' => $request->input('formfields.customer_id'),
                'amount' => $request->input('formfields.totalamount'),
                'amount_due' => $request->input('formfields.totalamount'),
                'activity' => 'Invoice '.$sales->invoiceno,
                'sales_history_id' => $saleshistory->id,
            ]);

            return response()->json($sales);
        } 
        catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function deletesalesinvoice($id){
        $delete_transaction = CustomerTransaction::where('sales_id', $id)->delete();
        $delete_history = SalesHistory::where('sales_id', $id)->delete();
        $delete_payments = SalesPayments::where('sales_id', $id)->delete();
        $delete_items = SalesItems::where('sales_id', $id)->delete();
        $delete_notes = SalesNotes::where('sales_id', $id)->delete();
        $invoice_kyc = InvoiceKyc::where('sales_id', $id)->delete();
        
        $delete_sales = Sales::find($id);
            if($delete_sales){
                $delete_sales->delete();
                return response()->json(
                    [
                        'status' => 'success',
                        'msg' => 'Sales Invoice deleted successfully'
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
            'sales_id' => $request->input('sales_id'),
            'signature_filename' => $imageName,
            'signed_by' => $request->input('signedby')
        ]);

        return response()->json($invoicesignature);
    }

    public function fetchinvoicesignature($id)
    {
        $signature = InvoiceSignature::where('sales_id',$id)->first();

        return response()->json($signature);
    }
}
