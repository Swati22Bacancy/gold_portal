<?php

namespace App\Http\Controllers\Api;

use App\Models\IndustrySector;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndustrySectorController extends Controller
{
    public function createindustrysector(Request $request)
    {
        try {
            $industrysector = IndustrySector::create([
                'title' => $request->input('title'),
             ]);

            return response()->json($industrysector);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function industrysectorlist()
    {
        $industrysectors = IndustrySector::select('*')->orderBy('id', 'DESC')->get();
        return response()->json($industrysectors);
    }

    public function deleteindustrysector($id){
        $industrysector = IndustrySector::find($id);
            if($industrysector){
                $industrysector->delete();
                
                return response()->json(
                    [
                        'status' => 'success',
                        'msg' => 'Industry Sector deleted successfully'
                    ],
                    200
                );
            }else{
                return response()->json(['error' => 'Record does not exists'], 404);
            }
    }

    public function industrysectordetails($id)
    {
        $industrysector = IndustrySector::where('id', $id)->first();

        return response()->json($industrysector);
    }

    public function updateindustrysector(Request $request)
    {
        try {
            $industrysector = IndustrySector::where('id', $request->input('id'))->update([
                'title' => $request->input('title'),
            ]);

            return response()->json($industrysector);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }
}
