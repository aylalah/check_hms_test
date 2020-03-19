<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;
use Hash;

class ChangePasswordController extends Controller
{
    public function process(Request $request)
    {
		$email = $request->email;
		$token = $request->token;
		$password = $request->password;
		$token = DB::table('password_resets')->where('email', '=', $email)
		->where( 'token', '=', $token)
		->get();
    	if(!empty($token)){
    		$update = DB::table('users')->where('email', '=', $email)
    		->update([
	            'password'=> bcrypt($password)
        	]);
    	 	if($update){
	            return '{
	                "success":true,
	                "message":"successful"
	            }' ;
	        } else {
	            return false;
	        }
	    }
    	 if(empty($token)){
    	 	return false;
    	 }
	}
	
	public function changePassword(Request $request)
	 {
		$check = Hash::check($request->current_password, Auth()->user()->password);
		if($check){
			$update = DB::table('users')->where('email', '=', Auth()->user()->email)
				->update([
					'password'=> bcrypt($request->new_password)
				]);
				if($update){
					return'{
						"success":true,
						"message":"successful"
					}';
				} else {
					return '{
						"success":false,
						"message":"Failed"
					}';
				}
		}else{
			return response()->json($check);
		}
	}

}
