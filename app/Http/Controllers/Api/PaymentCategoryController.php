<?php

namespace App\Http\Controllers\Api;

use App\Models\PaymentCategory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PaymentCategoryController extends Controller
{
    public function createpaymentcategory(Request $request)
    {
        try {
            $paymentcategory = PaymentCategory::create([
                'name' => $request->input('name'),
             ]);

            return response()->json($paymentcategory);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function paymentcategorylist()
    {
        $paymentcategories = PaymentCategory::select('*')->orderBy('id', 'DESC')->get();
        return response()->json($paymentcategories);
    }

    public function deletepaymentcategory($id){
        $paymentcategory = PaymentCategory::find($id);
            if($paymentcategory){
                $paymentcategory->delete();
                
                return response()->json(
                    [
                        'status' => 'success',
                        'msg' => 'Payment Category deleted successfully'
                    ],
                    200
                );
            }else{
                return response()->json(['error' => 'Record does not exists'], 404);
            }
    }

    public function paymentcategorydetails($id)
    {
        $paymentcategory = PaymentCategory::where('id', $id)->first();

        return response()->json($paymentcategory);
    }

    public function updatepaymentcategory(Request $request)
    {
        try {
            $paymentcategory = PaymentCategory::where('id', $request->input('id'))->update([
                'name' => $request->input('name'),
            ]);

            return response()->json($paymentcategory);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }
}
