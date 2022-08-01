<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use Illuminate\Auth\Events\Registered;
use App\Models\Permission;
use App\Models\RolesPermissions;

class AuthController extends Controller
{

    public function login(LoginRequest $request)
    {
        try {
            if (Auth::attempt($request->only('email', 'password'))) {
                /** @var User $user */
                $user = Auth::user();
                $token = $user->createToken('API Token')->accessToken;

                if (config('auth.must_verify_email') && !$user->hasVerifiedEmail()) {
                    return response([
                        'message' => 'Email must be verified.'
                    ], 401);
                }

                return response([
                    'message' => 'success',
                    'token' => $token,
                    'user' => $user
                ]);
            }
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }

        return response([
            'message' => 'Invalid Email or password.'
        ], 401);
    }

    public function user()
    {
        return response()->json(Auth::user());
    }

    public function check_permisssion($id)
    {
        $permission_ids = RolesPermissions::where('role_id',$id)->pluck('permission_id')->join(',');
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
