<?php

namespace App\Http\Controllers\Api;

use App\Models\Currency;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CurrencyController extends Controller
{
    public function createcurrency(Request $request)
    {
        try {
            $currency = Currency::create([
                'name' => $request->input('name'),
                'symbol' => $request->input('symbol'),
                'exchange_rate' => $request->input('exchange_rate'),
                'right_position' => ($request->input('right_position'))?1:0,
                'update_rates' => ($request->input('update_rates'))?1:0
            ]);

            return response()->json($currency);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function currencylist()
    {
        $currencies = Currency::select('*')->orderBy('id', 'DESC')->get();
        return response()->json($currencies);
    }

    public function deletecurrency($id){
        $currency = Currency::find($id);
            if($currency){
                $currency->delete();
                
                return response()->json(
                    [
                        'status' => 'success',
                        'msg' => 'Currency deleted successfully'
                    ],
                    200
                );
            }else{
                return response()->json(['error' => 'Record does not exists'], 404);
            }
    }

    public function currencydetails($id)
    {
        $currency = Currency::where('id', $id)->first();

        return response()->json($currency);
    }

    public function updatecurrency(Request $request)
    {
        try {
            $currency = Currency::where('id', $request->input('id'))->update([
                'name' => $request->input('name'),
                'symbol' => $request->input('symbol'),
                'exchange_rate' => $request->input('exchange_rate'),
                'right_position' => ($request->input('right_position'))?1:0,
                'update_rates' => ($request->input('update_rates'))?1:0
            ]);

            return response()->json($currency);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }
}
