<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Register;

class EmpController extends Controller
{
    public function index(){

        $employee = Register::all();

        return response()->json([
            'status'=>200,
            'employees'=>$employee
        ]);
    }

    public function store(Request $req){

        $emp = new Register;

        $emp->username = $req->input('username');
        $emp->name = $req->input('name');
        $emp->company_name = $req->input('company_name');
        $emp->phone = $req->input('phone');
        $emp->password = $req->input('password');

        $emp->save();

        return response()->json([
            'status'=>200,
            'message'=>'Employee Register Added Successfully',
        ]);
    }

    public function edit($id){
        
        $student = Register::find($id);

        return response()->json([
            'status'=>200,
            'student'=>$student,
        ]);
    }

    public function update(Request $req, $id){

        $student = Register::find($id);

        $student->name = $req->input('name');
        $student->course = $req->input('course');
        $student->email = $req->input('email');
        $student->phone = $req->input('phone');

        $student->update();

        return response()->json([
            'status'=>200,
            'message'=>'Employee Update Successfully',
        ]);
    }

    public function destroy($id){

        $student = Register::find($id);
        $student->delete();

        return response()->json([
            'status'=>200,
            'message'=>'Employee Delete Successfully',
        ]);
    }
}
