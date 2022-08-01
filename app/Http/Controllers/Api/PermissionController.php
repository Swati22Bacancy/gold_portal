<?php

namespace App\Http\Controllers\Api;

use App\Models\Permission;
use App\Models\RolesPermissions;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Role;
use Auth;

class PermissionController extends Controller
{
    public function sync(Request $request){
        try {
            $permissions = $request->allpermissions;
            $rolepermission = array();
            $role = RolesPermissions::where('role_id',$request->role_id)->delete();
            //$role->delete();
            foreach($permissions as $key => $permission)
            {
                $permission_id = Permission::select('id')->where('name', $permission)->first();
                $rolepermission[$key]['role_id'] = $request->role_id;
                $rolepermission[$key]['permission_id'] = $permission_id['id'];
            }
            $data = $rolepermission;
            RolesPermissions::insert($data);
            return response()->json(
                [
                    'status' => 'success',
                    'msg' => 'permissions saved.'
                ],
                200
            );
        }catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function show($id){
        $permission_ids = RolesPermissions::where('role_id',$id)->pluck('permission_id')->join(',');
        $idsArr = explode(',',$permission_ids);  
        $permissions = Permission::select('name')->whereIn('id',$idsArr)->get();
        return response()->json(
          [
            'status' => 'success',
            'permissions' => $permissions 
          ],
          200
        );
    }
    public function check_permisssion()
    {
        $permission_ids = RolesPermissions::where('role_id',Auth::user()->role_id)->pluck('permission_id')->join(',');
        $idsArr = explode(',',$permission_ids);  
        $permissions = Permission::select('name')->whereIn('id',$idsArr)->get();
        $rolepermission = array();
        foreach($permissions as $key => $permission)
        {
            $rolepermission[$key] = $permission->name;
        }
        return response()->json($rolepermission);
    }
}
