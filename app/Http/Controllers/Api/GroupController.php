<?php

namespace App\Http\Controllers\Api;

use App\Models\Group;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GroupController extends Controller
{
    public function creategroup(Request $request)
    {
        try {
            $group = Group::create([
                'name' => $request->input('name'),
            ]);

            return response()->json($group);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function grouplist()
    {
        $groups = Group::select('*')->orderBy('id', 'DESC')->get();
        return response()->json($groups);
    }

    public function deletegroup($id){
        $group = Group::find($id);
            if($group){
                $group->delete();
                
                return response()->json(
                    [
                        'status' => 'success',
                        'msg' => 'Group deleted successfully'
                    ],
                    200
                );
            }else{
                return response()->json(['error' => 'Record does not exists'], 404);
            }
    }

    public function groupdetails($id)
    {
        $group = Group::where('id', $id)->first();

        return response()->json($group);
    }

    public function updategroup(Request $request)
    {
        try {
            $group = Group::where('id', $request->input('id'))->update([
                'name' => $request->input('name'),
            ]);

            return response()->json($group);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }
}
