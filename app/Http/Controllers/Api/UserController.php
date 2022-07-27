<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function createuser(Request $request)
    {
        try {
            $string = $request->input('name');
            $name = explode(" ", $string, 2);
            $user = User::create([
                'first_name' => $name[0],
                'last_name' => (isset($name[1]))?$name[1]:'',
                'username' => $request->input('username'),
                'email' => $request->input('email')
            ]);

            return response()->json($user);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }

    public function userlist()
    {
        $users = User::select('*')->orderBy('id', 'DESC')->get();
        return response()->json($users);
    }

    public function deleteuser($id){
        $user = User::find($id);
            if($user){
                $user->delete();
                
                return response()->json(
                    [
                        'status' => 'success',
                        'msg' => 'User deleted successfully'
                    ],
                    200
                );
            }else{
                return response()->json(['error' => 'Record does not exists'], 404);
            }
    }

    public function userdetails($id)
    {
        $user = User::where('id', $id)->first();

        return response()->json($user);
    }

    public function updateuser(Request $request)
    {
        try {
            $string = $request->input('name');
            $name = explode(" ", $string, 2);
            $user = User::where('id', $request->input('id'))->update([
                'first_name' => $name[0],
                'last_name' => (isset($name[1]))?$name[1]:'',
                'username' => $request->input('username'),
                'email' => $request->input('email')
            ]);

            return response()->json($user);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }
}
