<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Positions;
use App\Departments;
use App\User;
use App\Item_units;
use App\Item_types;
use App\Item_categories;
use App\Manufacturer_details;
use App\Shelves;
use App\Branches;
use App\Item_details;
use App\Customers;
use App\Doctor_prescriptions;
use App\Invoices;
use App\Vouchers;
use App\Appointments;
use App\Lab_depts;
use App\Lab_test_types;
use Carbon\Carbon;
use App\Role;
use App\Duration;

class DoctorModule extends Controller
{
    public function patientData($id) {
        $sqlStatement = DB::table('customers')->join('customer_category','customers.cust_category_id','=','customer_category.id')->select('customers.*','customer_category.*', 'customers.id as cust_id')->where('customers.id',$id)->get();
        return response()->json($sqlStatement);
    }

    public function displayAppointment(){
        $deptId= Auth()->user()->dept_id;
        $branchId= Auth()->user()->branch_id;
        
        return Appointments::orderBy('id')->join('departments','appointments.department_id','=','departments.id')
                ->join('customers','appointments.customer_id','=','customers.id')
                ->select('appointments.*','departments.name as dept_name', 'customers.name as pat_name', 'customers.id as cust_id', 'customers.othername', 'customers.card_number', 'customers.patient_image', 'customers.blood_group', 'customers.genotype')               
                ->where('appointments.department_id','=',$deptId)
                ->where('appointments.branch_id','=',$branchId)
                ->where('appointments.status','!=','terminated')
                ->where('appointments.status','!=','close')
                ->get();
    }
}
