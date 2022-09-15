<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use App\Models\ProductType;
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
                'output_tax' => ($request->input('output_tax'))?1:0,
                'sales_commission' => ($request->input('sales_commission'))?$request->input('sales_commission'):0,
                'purchase_commission' => ($request->input('purchase_commission'))?$request->input('purchase_commission'):0
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
        $product = Product::leftjoin('producttypes', 'producttypes.id', '=', 'products.type_id')->select('products.*','producttypes.name as type','producttypes.rate as productrate','producttypes.purchase_rate as purchase_rate')->where('products.id', $id)->first();

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
                'output_tax' => ($request->input('output_tax'))?1:0,
                'sales_commission' => ($request->input('sales_commission'))?$request->input('sales_commission'):0,
                'purchase_commission' => ($request->input('purchase_commission'))?$request->input('purchase_commission'):0
            ]);

            return response()->json($product);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function productdata($id)
    {
        $products = Product::where('type_id', $id)->get();
        return response()->json($products);
    }

    public function productdetailsthirdParty($id)
    {
        $product = Product::leftjoin('producttypes', 'producttypes.id', '=', 'products.type_id')->select('products.*','producttypes.name as type','producttypes.rate as productrate','producttypes.purchase_rate as purchase_rate')->where('products.id', $id)->first();

        $producttype = ProductType::where('id', $product->type_id)->first();

        $metaltype = ($producttype->metal_type=='gold')?'gold':(($producttype->metal_type=='silver')? 'silver': '');

        if(!empty($metaltype))
        {
            $curl = curl_init();

            curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api.nfusionsolutions.biz/api/v1/Metals/spot/summary?token=44c8903f-0f89-4346-9d0d-87c4d4e13cd8&metals='.$metaltype.'&currency=gbp&_=1590202930230&unitofmeasure=g',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            ));

            $response = curl_exec($curl);
            $err = curl_error($curl);
            curl_close($curl);
            $data = json_decode($response);
            //echo $response;
            $askprice= $data[0]->data->ask;
            
            // if ($err) {
            //     echo "cURL Error #:" . $err;
            // } else {
            //     print_r(json_decode($response));
            // }
        }
        else
        {
            $askprice= '';
        }
        
        $product->askprice = $askprice;
        return response()->json($product);
    }
}
