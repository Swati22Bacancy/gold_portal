<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function createproduct(Request $request)
    {
        try {
            $product = Product::create([
                'name' => $request->input('name'),
                'type_id' => $request->input('type_id'),
                'weight' => $request->input('weight'),
                'rate' => $request->input('rate'),
                'output_tax' => ($request->input('output_tax'))?1:0
            ]);

            return response()->json($product);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function productlist()
    {
        $products = Product::leftjoin('producttypes', 'producttypes.id', '=', 'products.type_id')->select('products.*','producttypes.name as type')->orderBy('products.id', 'DESC')->get();
        return response()->json($products);
    }

    public function deleteproduct($id){
        $product = Product::find($id);
            if($product){
                $product->delete();
                
                return response()->json(
                    [
                        'status' => 'success',
                        'msg' => 'Product deleted successfully'
                    ],
                    200
                );
            }else{
                return response()->json(['error' => 'Record does not exists'], 404);
            }
    }

    public function productdetails($id)
    {
        $product = Product::where('id', $id)->first();

        return response()->json($product);
    }

    public function updateproduct(Request $request)
    {
        try {
            $product = Product::where('id', $request->input('id'))->update([
                'name' => $request->input('name'),
                'type_id' => $request->input('type_id'),
                'weight' => $request->input('weight'),
                'rate' => $request->input('rate'),
                'output_tax' => ($request->input('output_tax'))?1:0
            ]);

            return response()->json($product);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }
}
