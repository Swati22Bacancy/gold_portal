<?php

namespace App\Http\Controllers\Api;

use App\Models\ProductType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductTypeController extends Controller
{
    public function createproducttype(Request $request)
    {
        try {
            $producttype = ProductType::create([
                'name' => $request->input('name'),
                'rate' => $request->input('rate'),
                'purchase_rate' => $request->input('purchase_rate')
            ]);

            return response()->json($producttype);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function producttypelist()
    {
        $producttypes = ProductType::select('*')->orderBy('id', 'DESC')->get();
        return response()->json($producttypes);
    }

    public function deleteproducttype($id){
        $producttype = ProductType::find($id);
            if($producttype){
                $producttype->delete();
                
                return response()->json(
                    [
                        'status' => 'success',
                        'msg' => 'Product Type deleted successfully'
                    ],
                    200
                );
            }else{
                return response()->json(['error' => 'Record does not exists'], 404);
            }
    }

    public function producttypedetails($id)
    {
        $producttype = ProductType::where('id', $id)->first();

        return response()->json($producttype);
    }

    public function updateproducttype(Request $request)
    {
        try {
            $producttype = ProductType::where('id', $request->input('id'))->update([
                'name' => $request->input('name'),
                'rate' => $request->input('rate'),
                'purchase_rate' => $request->input('purchase_rate')
            ]);

            return response()->json($producttype);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }
}
