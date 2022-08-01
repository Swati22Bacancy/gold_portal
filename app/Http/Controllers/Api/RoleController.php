<?php

namespace App\Http\Controllers\Api;

use App\Models\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RoleController extends Controller
{
    public function createrole(Request $request)
    {
        try {
            $role = Role::create([
                'name' => $request->input('name'),
             ]);

            return response()->json($role);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function rolelist()
    {
        $roles = Role::select('*')->where('id','!=',1)->orderBy('id', 'DESC')->get();
        return response()->json($roles);
    }

    public function deleterole($id){
        $role = Role::find($id);
            if($role){
                $role->delete();
                
                return response()->json(
                    [
                        'status' => 'success',
                        'msg' => 'Role deleted successfully'
                    ],
                    200
                );
            }else{
                return response()->json(['error' => 'Record does not exists'], 404);
            }
    }

    public function roledetails($id)
    {
        $role = Role::where('id', $id)->first();

        return response()->json($role);
    }

    public function updaterole(Request $request)
    {
        try {
            $role = Role::where('id', $request->input('id'))->update([
                'name' => $request->input('name'),
            ]);

            return response()->json($role);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }
}
