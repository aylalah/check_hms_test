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

// Today's date working with displayItem,

class DisplayController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
 public function general_setting()
    {
        return response()->json(
            DB::table('general_settings')->first()
        ); 
    }
    
    
    //staff
    public function staffdetails($id)
    {
        return response()->json(
        
            User::orderBy('id')->join ('departments','users.dept_id','=','departments.id')
            ->join('roles','users.role_id','=','roles.id')
            ->select('users.*', 'departments.position_id', 'departments.name AS nameD', 'roles.name AS role_name')
            ->where('users.id','=',$id)          
            ->get() 
        ); 
    }

    public function mydetails()
    {
        $id= Auth()->user()->id;
        return response()->json(
        
            User::orderBy('id')->join ('departments','users.dept_id','=','departments.id')
            ->join('roles','users.role_id','=','roles.id')
            ->select('users.*', 'departments.position_id', 'departments.name AS nameD', 'roles.name AS role_name')
            ->where('users.id','=',$id)          
            ->get() 
        ); 
    }
    
    public function displayAllstaff()
    {
        $id= Auth()->user()->id;
        return response()->json([

            'all'=>$all = User::orderBy('id')->join('departments','users.dept_id','=','departments.id')
                ->join('roles','users.role_id','=','roles.id')
                ->select('users.*','departments.name AS dept_name', 'roles.name AS role_name')  
                ->where('users.id', '!=', $id)             
                ->get(),
            'byB'=>User::join('branches', 'users.branch_id', '=', 'branches.id')
                ->select('users.id', 'branches.name AS branch_name')  
                // ->where('users.dept_id', '=', 'departments.id')             
                ->get(),
            'byD'=>User::join('departments','users.dept_id','=','departments.id')
                ->select('users.id','departments.name AS dept_name', 'departments.id AS d_id')  
                ->get(),
            'countAll'=> User::count(),
        ]);
    }
    public function uStatus(Request $request)
    {
        $id=$request[0];   
        $status=DB::table('users')
        ->where('id','=', $id)
        ->update(['status' =>'approved']); 
        return $status;
    }

    public function c_uStatus(Request $request)
    {
        $id=$request[0];
        $status=DB::table('users')
        ->where('id','=', $id)
        ->update(['status' =>'suspended']); 
        return $status;
    }

    public function reStatus(Request $request)
    {
        $id=$request[0];
        $status=DB::table('users')
        ->where('id','=', $id)
        ->update(['status' =>'approved']); 
        return $status;
    }

    //Depertment

    public function displayDepartments()
    {
        return Departments::orderBy('id')->join('positions','departments.position_id','=','positions.id')
                ->select('departments.*','positions.position_name')               
                ->get();
    }

    public function edtDept($id)
    {
        return response()->json(
            Departments::orderBy('id')->join('positions','departments.position_id','=','positions.id')
            ->select('departments.*','positions.position_name')     
            ->where('departments.id','=',$id)          
            ->get()      
        );
    }

    //Position
    public function displayAllposition()
    {
        return DB::table("positions")->get();
    }

    public function displayModule()
    {
        return DB::table("module")->get();
    }

    // Unit

    public function displayUnit()
    {
        return DB::table("item_units")->get();
    }

    public function edtUnit($id)
    {
        return response()->json(
            Item_units::orderBy('id')
            ->select('item_units.*')     
            ->where('id','=',$id)          
            ->get() 
        );
    }

    // type

    public function displayType()
    {
        return DB::table("item_types")->get();
    }

    public function edtType($id)
    {
        return response()->json(
            Item_types::orderBy('id')
            ->select('item_types.*')     
            ->where('id','=',$id)          
            ->get()   
        );
    }

    // Manufacturer

    public function displayManufacturer()
    {
        return DB::table("manufacturer_details")->get();
    }  

    // Refill
    public function displayRefill()
    {
        return DB::table("vouchers")
                // ->join ('item_details','vouchers.item_detail_id','=','item_details.id')
                ->join ('branches','vouchers.branch_id','=','branches.id')
                ->join ('customers','vouchers.customer_id','=','customers.id')
                ->join ('users','vouchers.staff_id','=','users.id')
                ->select('vouchers.*','users.firstname','users.lastname', 'branches.name', 'customers.name as customer_name','customers.othername as customer_othername')
                ->where('refill_status', '=', 'refillable')           
                ->get();
    }


    // Setting
    public function displayDuration()
    {
        return DB::table("durations")->join('item_types','durations.type_id','=','item_types.id')
                ->join('users','durations.user_id','=','users.id')
                ->select('durations.*','item_types.type_name','firstname','lastname')               
                ->get();
    }
    
    public function displayDurationForV($id)
    {
        return DB::table("durations")->select('durations.*')  
                ->where('type_id', '=', $id)             
                ->get();
    }

    public function idDurationForV($id)
    {
        return DB::table("durations")->select('durations.*')  
                ->where('id', '=', $id)             
                ->get();
    }
    public function editVoucher(Request $request){
        $id=$request[0];
        return $request;

    }
    public function voucherData(Request $request){
       $id=$request[0];
       return $details =Doctor_prescriptions::where('id',$id)->get();
    }

    public function edtduration($id)
    {
        return response()->json(
            DB::table('durations')->orderBy('id')
            ->select('durations.*')     
            ->where('id','=',$id)          
            ->get()   
        );
    }

    public function idInstruction($id)
    {
        return DB::table("daily_supply")->select('daily_supply.*')  
                ->where('id', '=', $id)             
                ->get();
    }

    public function displayInstruction()
    {
        return DB::table("daily_supply")->join('item_types','daily_supply.type_id','=','item_types.id')
                ->join('users','daily_supply.user_id','=','users.id')
                ->select('daily_supply.*','item_types.type_name','firstname','lastname')               
                ->get();
    }
    public function edtinstruction($id)
    {
        return response()->json(
            DB::table('daily_supply')->orderBy('id')
            ->select('daily_supply.*')     
            ->where('id','=',$id)          
            ->get()   
        );
    }

    public function edtManufacturer($id)
    {
        return response()->json(
            Manufacturer_details::orderBy('id')
            ->select('manufacturer_details.*')     
            ->where('id','=',$id)          
            ->get()   
        );
    }


    // Categories

    public function displayCategories()
    {
        return DB::table("item_categories")->get();
    }

    public function edtCategories($id)
    {
        return response()->json(
        
            Item_categories::orderBy('id')
            ->select('item_categories.*')     
            ->where('id','=',$id)          
            ->get()   
        );
    }

    // Shelve

    public function displayShelve()
    {
        return Shelves::orderBy('id')->join('branches','shelves.branch_id','=','branches.id')
                    ->select('shelves.*','branches.br_name')               
                    ->get();
    }

    public function edtShelve($id)
    {
        return response()->json(              
            Shelves::orderBy('id')
            ->select('shelves.*')     
            ->where('id','=',$id)          
            ->get()   
        );
    }

    // Item

    public function displayItemDetails()
    {
        $item = DB::table('item_details')->select('item_details.*', 'item_types.type_name', 'item_types.image', 'item_categories', 'manufacturer_details.name','item_categories.cat_name', 'item_details.item_img')
         ->join ('item_types','item_details.item_type_id','=','item_types.id')
         ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
         ->join ('item_units','item_details.item_unit_id','=','item_units.id')
         ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
         ->get();
        if($item){
            return $item;
        } else {
            return ;
        }
    }

    public function edtItemDetails($id)
    {
        return response()->json(
        
            Item_details::orderBy('id')
            ->join ('item_types','item_details.item_type_id','=','item_types.id')
            ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
            ->join ('item_units','item_details.item_unit_id','=','item_units.id')
            ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
            ->select('item_details.*', 'item_units.name AS unit_name', 'item_units.box_size', 'item_units.value', 'item_types.type_name', 'item_types.image', 'item_categories.cat_name', 'manufacturer_details.name AS manuf_name', 'manufacturer_details.address','manufacturer_details.contact_number', 'manufacturer_details.details', 'item_details.item_img')     
            ->where('item_details.id','=',$id)          
            ->get()
        );
    }

    // All Items Informations

    public function displayItem($id)
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');
        $bid = Auth()->user()->branch_id;

        if($id == 'undefined'){
            $id = Auth()->user()->branch_id;
        }

        $branch = Branches::select('branches.br_name', 'branches.id')
        ->where('id', '=', $id)
        ->orWhere('name', '=', $id)
        ->first();  
        $id = $branch->br_name;
        $bid = $branch->id;
        return response()->json([


           'item'=>DB::table($id)->orderBy('item_details.generic_name')->select( 'item_details.generic_name','item_details.id AS item_id', 'manufacturer_details.name','item_categories.cat_name', 'item_details.item_img', 'item_details.selling_price', 'item_details.price_2', 'item_details.price_3', 'item_details.purchasing_price', 'item_details.markup_price',$id.'.open_stock',$id.'.sales',$id.'.transfer',$id.'.receive',$id.'.total_remain',$id.'.close_balance',$id.'.physical_balance',$id.'.variance',$id.'.amount',$id.'.balance',$id.'.c_date',$id.'.c_time')

//            'item'=>DB::table($id)->orderBy('item_details.generic_name')->select($id.'.*', 'item_details.id AS item_id',  'item_details.generic_name', 'manufacturer_details.name','item_categories.cat_name', 'item_details.item_img', 'item_details.selling_price', 'item_details.purchasing_price', 'item_details.markup_price')

           ->join ('item_details',$id.'.item_detail_id','=','item_details.id')
           ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
           ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
           ->where ('c_date', '=', $cDate)
           ->get(),
           'addedItem'=>DB::table($id)->select($id.'.*')
           ->where ('c_date', '=', $cDate)
           ->sum($id.'.receive'),
           'transferredItem'=>DB::table($id)->select($id.'.*')
           ->where ('c_date', '=', $cDate)
           ->sum($id.'.transfer'),
           'soldItem'=>DB::table($id)->select($id.'.*')
           ->where ('c_date', '=', $cDate)
           ->sum($id.'.sales'),
           'varianced'=>DB::table($id)->select($id.'.*')->where($id.'.c_date', '=', $cDate)->sum($id.'.variance'),
           'openBal'=>DB::table($id)->select($id.'.*')
           ->where ('c_date', '=', $cDate)
           ->sum($id.'.open_stock'),
           'physBal'=>DB::table($id)->select($id.'.*')->where($id.'.c_date', '=', $cDate)
           ->sum($id.'.physical_balance'),
           'total'=>DB::table($id)->select($id.'.*')
           ->where ('c_date', '=', $cDate)
           ->sum($id.'.total_remain'),
           'bran'=>DB::table('branches')->select('branches.name')->where('br_name', '=', $id)
           ->first(), 
           'itemAmount'=>DB::table('invoices')->select('paid')
           ->where ('i_date', '=', $cDate)
           ->where('branch_id', '=', $bid)
            ->sum('paid'),
           
        ]);
    }

    public function edtItem($id)
    {
        return response()->json(
        
            Item_details::orderBy('id')
            ->select('item_details.*')     
            ->where('id','=',$id)          
            ->get()   
        );
    }

    // Branch

    public function displaysetBranch()
    {
        return Branches::all();
    }

    public function displayBranch()
    {
        return Branches::where('status', '=', 'active')->orderBy('id')->get();
    }

    public function edtBranch($id)
    {
        return response()->json(
            Branches::orderBy('id')
            ->select('branches.*')     
            ->where('id','=',$id)          
            ->get()   
        );
    }

    //Dashboard

    public function countCustomer()
    {
        return DB::table('customers')->select(DB::raw('count(id) as "patient", (select COUNT(id) from customers where gender = "Male") as "male", (select COUNT(id) from customers where gender = "Female") as "female",  (select COUNT(id) from customers where gender = "Female") as "female" '))    
        ->get();
    }

    public function countAppointmentDash()
    {
        $post = DB::table('appointments')->select(DB::raw('count(id) as "appointment", (select COUNT(id) from appointments where treatment = "open") as "doctor", (select COUNT(id) from appointments where lab = "open") as "lab",  (select COUNT(id) from appointments where prescription = "open") as "open" '))    
        ->get();
      return $post;
    }

    // Customers/ Patients   

    public function displayCustomer()
    {
        return Customers::orderBy('id')
        ->select('customers.*')->limit(10000)->get();

        return DB::table("customers")->get();
    }

    public function edtCustomer($id)
    {
        return response()->json(
            Customers::orderBy('id')
            ->select('customers.*')     
            ->where('id','=',$id)          
            ->get()
           
        );
    }

    public function edtCustCategories($id)
    {
        return response()->json(
            DB::table("customer_category")->where('id','=',$id) ->get()      
        );
    }

    public function patientdetails($id)
    {
        $customeId= Appointments::orderBy('id')->where('id','=',$id)->select('appointments.customer_id')->get();
        $cId= $customeId[0]->customer_id;
        return response()->json(
            Customers::join('customer_category', 'customers.cust_category_id', '=', 'customer_category.id')
            ->select('customers.*', 'customer_category.category_name', 'customer_category.pacentage_value', 'customer_category.price_list_column')
            ->where('customers.id','=',$cId)          
            ->get()   
        );
    }

    public function customer_category()
    {
        return DB::table("customer_category")->get();
    }
    
    public function patientbyappointment($id)
    {
        $customeId= Customers::where('id','=',$id)->first() ;
        $cId=$customeId->id;
        return response()->json([
            "app" => Appointments::orderBy('id')->join('departments','appointments.department_id','=','departments.id')
            ->join('customers','appointments.customer_id','=','customers.id')
            ->select('appointments.*','departments.name as dept_name', 'customers.name as pat_name', 'customers.othername', 'customers.patient_image', 'customers.card_number')   
            ->where('appointments.customer_id','=',$cId)->get(),
            "pat"=> Customers::where('id','=',$id)->get(),
            "pres" => Doctor_prescriptions::select('doctor_prescriptions.*', 'item_details.id AS item_id',  'item_details.generic_name', 'item_details.item_img', 'manufacturer_details.name AS manuf_name', 'users.firstname', 'users.lastname')->where('customer_id', $id)
            ->join('item_details','doctor_prescriptions.item_id','=','item_details.id')
            ->join('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
            ->join('users', 'doctor_prescriptions.pharmacist_id', '=', 'users.id')
            ->join('customers', 'doctor_prescriptions.customer_id', '=', 'customers.id')
            ->join('branches', 'doctor_prescriptions.branch_id', '=', 'branches.id')
            ->get()  
        ]);
    }
    //Appointment
    public function displayAllappointment()
    {          
        return Appointments::orderBy('appointments.id', 'DESC')->join('departments','appointments.department_id','=','departments.id')
                ->join('customers','appointments.customer_id','=','customers.id')
                ->select('appointments.treatment','customers.name as pat_name', 'customers.othername','customers.card_number','appointments.lab','appointments.prescription','appointments.invoice','appointments.voucher','appointments.status','appointments.updated_at','appointments.created_at','appointments.date','appointments.time','appointments.customer_id','appointments.department_id','appointments.voucher_id','appointments.branch_id','departments.name as dept_name','customers.patient_image')               
                ->get();
    }
    public function cancelPharmLog(Request $request){
        $id = $request[0];
        $cancel = DB::table("appointments")->where('id',$id)->delete();
         if($cancel){
             return response()->json("You have successfully calceled");
         }
    }
    public function displayDeptAppointment()
    {
        $currentDate= carbon::now()->toDateTimeString('Y-m-d');
        $currentDate.slice(0,6);
        return $currentDate;
        $deptId= Auth()->user()->dept_id;
        $branchId= Auth()->user()->branch_id;
        return Appointments::orderBy('id', 'DESC')->join('departments','appointments.department_id','=','departments.id')
                ->join('customers','appointments.customer_id','=','customers.id')
                ->select('appointments.*','departments.name as dept_name', 'customers.name as pat_name', 'customers.id as cust_id', 'customers.othername', 'customers.card_number', 'customers.patient_image', 'customers.blood_group', 'customers.genotype')               
                ->where('appointments.department_id','=',$deptId)
                // ->where('appointments.prescription','!=','close')
                ->where('appointments.branch_id','=',$branchId)
                ->where('appointments.status','!=','terminated')
                ->where('appointments.status','!=','close')
                ->get();
    }

    public function displayPharmStaffDashAppointment()
    {
        $deptId= Auth()->user()->dept_id;
        $branchId= Auth()->user()->branch_id;
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        return Appointments::orderBy('id')->join('departments','appointments.department_id','=','departments.id')
                ->join('customers','appointments.customer_id','=','customers.id')
                ->select('appointments.*','departments.name as dept_name', 'customers.name as pat_name', 'customers.id as cust_id', 'customers.othername', 'customers.card_number', 'customers.patient_image', 'customers.blood_group', 'customers.genotype')               
                ->where('appointments.department_id','=',$deptId)
                // ->where('appointments.prescription','!=','close')
                ->where('appointments.branch_id','=',$branchId)
                ->where('appointments.date', '=', $cDate)
                ->get();
    }

    public function displayDeptAppoint($id)
    {
        // $deptId= Auth()->user()->dept_id;
        // $branchId= Auth()->user()->branch_id;
        return Appointments::orderBy('id')->join('departments','appointments.department_id','=','departments.id')
                ->join('customers','appointments.customer_id','=','customers.id')
                ->select('appointments.*','departments.name as dept_name', 'customers.name as pat_name', 'customers.id as cust_id', 'customers.othername', 'customers.card_number', 'customers.patient_image', 'customers.blood_group', 'customers.genotype')               
                ->where('appointments.id','=',$id)               
                ->get();
    }

    public function countAppointment()
    {
        $deptId= Auth()->user()->dept_id;
        $post = DB::table('appointments')->select(DB::raw('count(id) as "all_appoint", (select COUNT(id) from appointments where treatment = "open" and department_id ='.$deptId.') as "open", (select COUNT(id) from appointments where treatment = "success" and department_id ='.$deptId.') as "success", (select COUNT(id) from appointments where lab = "open" and department_id ='.$deptId.') as "pending" '))
        ->where('appointments.department_id','=',$deptId)        
        ->get();
      return $post;
    }

    // Prescriptions

    public function displayPrescription()
    {
        return DB::table("doctor_prescriptions")->get();
    }

    public function pres_refill_id($id)
    {
        return DB::table("doctor_prescriptions")->where('doctor_prescriptions.id',$id)->get();
    }    

     public function displayRefillPrescriptions($vid)
     {
         $bid =  Auth()->user()->branch_id;
         $branch1 = DB::table("branches")
         ->select('branches.br_name')
         ->where('id', $bid)
         ->get(); 
         $branch = $branch1[0]->br_name; 

            return response()->json([         
            'refill'=>  DB::table('doctor_prescriptions')
                        ->join ('item_details','doctor_prescriptions.item_id','=','item_details.id')
                        ->join ('item_types','item_details.item_type_id','=','item_types.id')
                        ->join('branches', 'doctor_prescriptions.branch_id', '=', 'branches.id')
                        ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
                        ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
                        ->join ('customers', 'doctor_prescriptions.customer_id', '=', 'customers.id')
                        ->select('doctor_prescriptions.*', 'item_details.generic_name', 'item_types.type_name', 'branches.name as branchName', 'manufacturer_details.name','item_categories.cat_name', 'item_details.item_img', 'item_details.selling_price', 'customers.name AS fname', 'customers.othername', 'card_number', 'customers.mobile_number', 'customers.patient_image') 
                        ->where(['doctor_prescriptions.voucher_id' => $vid, 'doctor_prescriptions.refill_status' => 'refillable'])
                        ->get(),
            'refill2'=> DB::table('doctor_prescriptions')
                        ->join ('item_details','doctor_prescriptions.item_id','=','item_details.id')
                        ->join ('item_types','item_details.item_type_id','=','item_types.id')
                        ->join('branches', 'doctor_prescriptions.branch_id', '=', 'branches.id')
                        ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
                        ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
                        ->join ('customers', 'doctor_prescriptions.customer_id', '=', 'customers.id')
                        ->select('doctor_prescriptions.*', 'item_details.generic_name', 'item_types.type_name', 'branches.name as branchName', 'manufacturer_details.name','item_categories.cat_name', 'item_details.item_img', 'item_details.selling_price', 'customers.name AS fname', 'customers.othername', 'card_number', 'customers.mobile_number', 'customers.patient_image') 
                        ->where(['doctor_prescriptions.voucher_id' => $vid, 'doctor_prescriptions.refill_voucher_status' => 'saved'])
                        ->get(),

            'appId'=> DB::table("appointments")
                        ->select('appointments.*')
                        ->where('voucher_id', $vid)
                        ->get(),
            ]);
        
     }

     public function refillInStock($id)
     {
        $bid =  Auth()->user()->branch_id;
        $branch = DB::table("branches")
         ->select('branches.br_name')
         ->where('id', $bid)
         ->first(); 
        return DB::table($branch)
            ->where('item_detail_id', '=', $id)
            ->select('branch_main.total_remain')
            ->first();
     }

    public function displayPharmPrescription($id)
    {
        $bId= Auth()->user()->branch_id;
        return response()->json([
            "pres" => Doctor_prescriptions::orderBy('id') 
                    ->join ('item_details','doctor_prescriptions.item_id','=','item_details.id')
                    ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
                    // ->join ($branch, $branch.'.item_detail_id','=','doctor_prescriptions.item_id')
                    ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
                    ->select('doctor_prescriptions.*', 'item_details.selling_price', 'item_details.generic_name', 'item_details.item_img', 'item_categories.cat_name', 'item_details.selling_price', 'manufacturer_details.name')
                    // ->where('doctor_prescriptions.status', '!=', 'close')
                    ->where('doctor_prescriptions.appointment_id', '=', $id)
                    ->where('doctor_prescriptions.branch_id', '=', $bId)
                    ->get(),
            "tquant" => Doctor_prescriptions::select('doctor_prescriptions.*')
                        // ->where('doctor_prescriptions.status', '!=', 'close')
                        ->where('doctor_prescriptions.appointment_id', '=', $id)
                        ->where('doctor_prescriptions.branch_id', '=', $bId)
                        ->sum('doctor_prescriptions.quantity'),
            "refill" => Doctor_prescriptions::select('doctor_prescriptions.*')
                        // ->where('doctor_prescriptions.status', '!=', 'close')
                        ->where('doctor_prescriptions.appointment_id', '=', $id)
                        ->where('doctor_prescriptions.branch_id', '=', $bId)
                        ->sum('doctor_prescriptions.refill'),
            "remain" => Doctor_prescriptions::select('doctor_prescriptions.*')
                        // ->where('doctor_prescriptions.status', '!=', 'close')
                        ->where('doctor_prescriptions.appointment_id', '=', $id)
                        ->where('doctor_prescriptions.branch_id', '=', $bId)
                        ->sum('doctor_prescriptions.remain'),
            "eachcost" => Doctor_prescriptions::select('doctor_prescriptions.*')
                        //  ->where('doctor_prescriptions.status', '!=', 'close')
                        ->where('doctor_prescriptions.appointment_id', '=', $id)
                        ->where('doctor_prescriptions.branch_id', '=', $bId)
                        ->sum('doctor_prescriptions.amount'),
            "tcost" => Doctor_prescriptions::select('doctor_prescriptions.*')
                        // ->where('doctor_prescriptions.status', '!=', 'close')
                        ->where('doctor_prescriptions.appointment_id', '=', $id)
                        ->where('doctor_prescriptions.branch_id', '=', $bId)
                        ->sum('doctor_prescriptions.amount_paid'),
        ]);

    }

    public function edtPrescription($id)
    {
        return response()->json(
            Doctor_prescriptions::orderBy('id')
            ->select('doctor_prescriptions.*')     
            ->where('id','=',$id)          
            ->get()   
        );
    }

    // Invoices

    public function displayInvoice()
    {
        return DB::table("invoices")->get();
    }

    public function displayPharmInvoice($id, $vid)
    {
                                                                                                                                                      
        $bId= Auth()->user()->branch_id;
        $pc =  Doctor_prescriptions::orderBy('id') 
        ->join ('item_details','doctor_prescriptions.item_id','=','item_details.id')
        ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
        ->join ('customers', 'doctor_prescriptions.customer_id', '=', 'customers.id')
        ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
        ->select('doctor_prescriptions.*','customers.name AS fname', 'customers.othername', 'card_number', 'customers.mobile_number', 'customers.address', 'customers.city', 'customers.state', 'customers.country', 'item_details.selling_price', 'item_details.generic_name', 'item_details.item_img', 'item_categories.cat_name', 'item_details.selling_price', 'manufacturer_details.name AS manuf')
        // ->where('doctor_prescriptions.status', '=', 'close')
        ->where('doctor_prescriptions.appointment_id', '=', $id)
        ->where('doctor_prescriptions.branch_id', '=', $bId)
        ->count();
        if($pc=='0'){
            return response()->json([
                "pres" =>$p=  Doctor_prescriptions::orderBy('id') 
                ->join ('item_details','doctor_prescriptions.item_id','=','item_details.id')
                ->join ('durations','doctor_prescriptions.instruction','=','durations.id')
                ->join ('daily_supply','doctor_prescriptions.day_supply','=','daily_supply.id')
                ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
                ->join ('users','doctor_prescriptions.pharmacist_id','=','users.id')
                ->join ('customers', 'doctor_prescriptions.customer_id', '=', 'customers.id')
                ->join('customer_category', 'customers.cust_category_id', '=', 'customer_category.id')
                ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
                ->select('doctor_prescriptions.*',  'customer_category.category_name', 'durations.duration_name', 'users.firstname', 'users.lastname', 'daily_supply.name asdaily_name', 'customer_category.pacentage_value', 'customer_category.price_list_column', 'customers.name AS fname', 'customers.othername', 'card_number', 'customers.mobile_number', 'customers.address', 'customers.city', 'customers.state', 'customers.country', 'item_details.selling_price', 'item_details.generic_name', 'item_details.item_img', 'item_categories.cat_name', 'item_details.selling_price', 'manufacturer_details.name AS manuf')
                // ->where('doctor_prescriptions.status', '=', 'close')
                ->where('doctor_prescriptions.appointment_id', '=', $id)
                ->where('doctor_prescriptions.branch_id', '=', $bId)
                ->get(),
                "isE" =>$pc,
                ]);
           
            
        }
        if($vid=='inv'){
            return response()->json([
                "pres" =>$p =  Doctor_prescriptions::orderBy('id') 
                ->join ('item_details','doctor_prescriptions.item_id','=','item_details.id')
                ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
                ->join ('durations','doctor_prescriptions.instruction','=','durations.id')
                ->join ('daily_supply','doctor_prescriptions.day_supply','=','daily_supply.id')
                ->join ('users','doctor_prescriptions.pharmacist_id','=','users.id')
                ->join ('customers', 'doctor_prescriptions.customer_id', '=', 'customers.id')
                ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
                ->select('doctor_prescriptions.*','customers.name AS fname', 'users.firstname', 'users.lastname', 'customers.othername', 'card_number', 'durations.duration_name', 'daily_supply.name as daily_name', 'customers.mobile_number', 'customers.address', 'customers.city', 'customers.state', 'customers.country', 'item_details.selling_price', 'item_details.generic_name', 'item_details.item_img', 'item_categories.cat_name', 'item_details.selling_price', 'manufacturer_details.name AS manuf')
                // ->where('doctor_prescriptions.status', '=', 'close')
                ->where('doctor_prescriptions.appointment_id', '=', $id)
                ->where('doctor_prescriptions.branch_id', '=', $bId)
                ->get(),
                "totalAmount" => DB::table('vouchers')->where('id', '=', $p[0]->voucher_id)->select('vouchers.amount')->first(),
                "patient" => DB::table('customers')->where('customers.id', '=', $p[0]->customer_id)
                ->join ('customer_category', 'customers.cust_category_id', '=', 'customer_category.id')
                ->select('customers.*', 'customer_category.category_name', 'customer_category.pacentage_value', 'customer_category.price_list_column')
                ->first(),
                "isE" =>$p->count(),
                ]);
        }else if ($vid=='ref') {
            return response()->json([
                "pres" =>$p =  Doctor_prescriptions::orderBy('id') 
                ->join ('item_details','doctor_prescriptions.item_id','=','item_details.id')
                ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
                ->join ('durations','doctor_prescriptions.instruction','=','durations.id')
                ->join ('daily_supply','doctor_prescriptions.day_supply','=','daily_supply.id')
                ->join ('users','doctor_prescriptions.pharmacist_id','=','users.id')
                ->join ('customers', 'doctor_prescriptions.customer_id', '=', 'customers.id')
                ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
                ->select('doctor_prescriptions.*','customers.name AS fname', 'users.firstname', 'users.lastname', 'customers.othername', 'card_number', 'durations.duration_name', 'daily_supply.name as daily_name', 'customers.mobile_number', 'customers.address', 'customers.city', 'customers.state', 'customers.country', 'item_details.selling_price', 'item_details.generic_name', 'item_details.item_img', 'item_categories.cat_name', 'item_details.selling_price', 'manufacturer_details.name AS manuf')
                // ->where('doctor_prescriptions.status', '=', 'close')
                ->where('doctor_prescriptions.appointment_id', '=', $id)
                ->where('doctor_prescriptions.branch_id', '=', $bId)
                ->get(),
                "totalAmount" => DB::table('vouchers')->where('id', '=', $p[0]->voucher_id)->select('vouchers.amount')->first(),
                "patient" => DB::table('customers')->where('customers.id', '=', $p[0]->customer_id)
                ->join ('customer_category', 'customers.cust_category_id', '=', 'customer_category.id')
                ->select('customers.*', 'customer_category.category_name', 'customer_category.pacentage_value', 'customer_category.price_list_column')
                ->first(),
                "isE" =>$p->count(),
                ]);
        }
    } 

    public function edtInvoice($id)
    {
        return response()->json(
        
            Invoices::orderBy('id')
            ->select('invoices.*')     
            ->where('id','=',$id)          
            ->get()   
        );
    }

    // Vouchers

    public function displayVoucher()
    {
        return DB::table("vouchers")->get();
    }

    public function edtVoucher($id)
    {    
        return response()->json(
        
            Vouchers::orderBy('id')
            ->select('vouchers.*')     
            ->where('id','=',$id)          
            ->get()   
        );
    }

//Lab Depertment

    public function displayLabDepartments()
    {
        return response()->json(
        
            Lab_depts::orderBy('id')->join('departments','lab_depts.department_id','=','departments.id')
            ->select('lab_depts.*','departments.name')       
            ->get()   
        );
    }

    public function edtLabDept($id)
    {
        return response()->json(
        
            Lab_depts::orderBy('id')->join('departments','lab_depts.department_id','=','departments.id')
            ->select('lab_depts.*','departments.name') 
            ->where('lab_depts.id','=',$id)        
            ->get()
        );
    }


//Lab Test Types

    public function displayLabTestType()
    {
        return response()->json(
            Lab_test_types::orderBy('id')->join('lab_depts','lab_test_types.lab_dept_id','=','lab_depts.id')
            ->select('lab_test_types.*','lab_depts.lab_name')       
            ->get()   
        );
    }

    public function edtLabTestType($id)
    {
        return response()->json(
            Lab_test_types::orderBy('id')->join('lab_depts','lab_test_types.lab_dept_id','=','lab_depts.id')
            ->select('lab_test_types.*','lab_depts.lab_name') 
            ->where('lab_test_types.id','=',$id)        
            ->get()   
        );
    }
    
//Branches to add items to 
    public function stockBranches()
    {
        $branch = DB::table("branches")->get(); 
        $array = array();
        foreach($branch as $row){
            $name = $row->br_name;
            if($row->br_name != 'branch_main'){
                $name = 'branch_'.strtolower(trim(str_replace(' ', '', $row->br_name)));
            }
            array_push($array, $name);
         }
         return $array;
    }

    public function disItemDet()
    {
        return response()->json(
            Item_details::orderBy('generic_name')->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id') 
                                    ->select('item_details.*', 'manufacturer_details.name AS manuf_name')        
                                    ->get()
        );
    }

    public function addedItems()
    {
        return DB::table("purchases")
        ->select('item_details.id AS item_id',  'item_details.generic_name', 'item_details.item_img', 'manufacturer_details.name AS manuf_name', 'purchases.id AS aID', 'purchases.quantity', 'purchases.newstock', 'purchases.instock')
        ->join ('item_details','purchases.item_detail_id','=','item_details.id')
        ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
        // ->join ('purchases','branch_main.item_detail_id','=','purchases.item_detail_id')
        ->where('purchases.status','=','saved')
        ->get();
    }

    public function varianceItems()
    {
        return DB::table("variances")
        ->select('item_details.id AS item_id',  'item_details.generic_name', 'item_details.item_img', 'manufacturer_details.name AS manuf_name', 'variances.id AS vID', 'variances.quantity', 'variances.newstock', 'variances.instock', 'variances.purpose', 'variances.detail')
        ->join ('item_details','variances.item_detail_id','=','item_details.id')
        ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
        // ->join ('variances','branch_main.item_detail_id','=','variances.item_detail_id')
        ->where('variances.status','=','open')
        ->get();
    }

    public function transItems()
    {
        return DB::table("transfers")
        ->select('item_details.id AS item_id',  'item_details.generic_name', 'item_details.item_img', 'transfers.quantity_from', 'transfers.remain_from', 'transfers.remain_to', 'transfers.newstock', 'transfers.quantity_to', 'total_quantity', 'transfers.id AS tID')
        ->join ('item_details','transfers.item_detail_id','=','item_details.id')
        // ->join ('transfers','branch_main.item_detail_id','=','transfers.item_detail_id')
        ->where('transfers.status','=','open')
        ->get();
    }    

    public function inStock($id)
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
           return DB::table("branch_main")
            ->where(['item_detail_id' => $id, 'branch_main.c_date' => $cDate])
            ->select('branch_main.total_remain')
            ->get();
    }

    public function inStockT(Request $request)
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $item = $request[0];
        $branch= $request[1];
        return DB::table($branch)
        ->where(['item_detail_id' => $item, $branch.'.c_date'=> $cDate])
        ->select($branch.'.total_remain')
        ->get();
    }

    public function voucherAllStock($item)
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();

        $id= Auth()->user()->branch_id;
        $branch1 = DB::table("branches")
            ->select('branches.br_name')
            ->where('id', $id)
            ->get(); 
        $branch = $branch1[0]->br_name;
        $itemr = DB::table('item_details')->select('item_details.*', 'item_types.type_name', 'item_types.id AS type_id', 'item_types.image', 'item_categories.cat_name', 'manufacturer_details.name','item_categories.cat_name', 'item_details.item_img', 'item_details.selling_price', $branch.'.total_remain', 'shelves.name AS shelve_name', 'shelves.point AS shelve_point')
        ->join ('item_types','item_details.item_type_id','=','item_types.id')
        ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
        ->join ('item_units','item_details.item_unit_id','=','item_units.id')
        ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
        ->join ($branch,$branch.'.item_detail_id','=','item_details.id')
        ->join ('shelves','shelves.id','=','item_details.shelve_id')
        ->where(['item_details.id' => $item, 'c_date' => $cDate])
        ->get();
        return $itemr;
    }

    // Report

    public function stockReport(Request $request)
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');

        $sDate = $request->sDate;
        $eDate = $request->eDate;
        $id = $request->to;
        $startDate = new Carbon($sDate);
        $endDate = new Carbon($eDate);
        $dateRange = array();
        $array = array();
        while ($startDate->lte($endDate)) {
            $dateRange[] = $startDate->toFormattedDateString();
            $startDate->addDay();
        }
        $itemD = DB::table("item_details")->select('id')->orderBy('id')->get(); 
        foreach($itemD as $row){
            $get = DB::table($id)->select(DB::raw('sum(open_stock) as "open_stock", sum(sales) as "sales", sum(transfer) as "transfer", sum(receive) as "receive", sum(total_remain) as "total_remain", sum(close_balance) as "close_balance", sum(variance) as "variance", sum(physical_balance) as "physical_balance", sum(balance) as "balance"'))->where($id.'.item_detail_id', $row->id)->whereIn($id.'.c_date', $dateRange)->first();
            array_push($array, array($get));
        }

        return response()->json([
            'item'=>DB::table('item_details')->select('item_details.id AS item_id',  'item_details.generic_name', 'manufacturer_details.name','item_categories.cat_name', 'item_details.item_img', 'item_details.selling_price', 'item_details.purchasing_price', 'item_details.markup_price', 'item_details.price_2', 'item_details.price_3')
            ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
            ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
            ->get(),
            'details' => $array,
            'addedItem'=>DB::table($id)->select($id.'.*')->whereIn($id.'.c_date', $dateRange)->sum($id.'.receive'),
            'transferredItem'=>DB::table($id)->select($id.'.*')->whereIn($id.'.c_date', $dateRange)->sum($id.'.transfer'),
            'soldItem'=>DB::table($id)->select($id.'.*')->whereIn($id.'.c_date', $dateRange)->sum($id.'.sales'),
            'varianced'=>DB::table($id)->select($id.'.*')->whereIn($id.'.c_date', $dateRange)->sum($id.'.variance'),
            'openBal'=>DB::table($id)->select($id.'.*')->whereIn($id.'.c_date', $dateRange)->sum($id.'.open_stock'),
            'physBal'=>DB::table($id)->select($id.'.*')->whereIn($id.'.c_date', $dateRange)->sum($id.'.physical_balance'),
            'total'=>DB::table($id)->select($id.'.*')->whereIn($id.'.c_date', $dateRange)->sum($id.'.total_remain'),
            'bran'=>DB::table('branches')->select('branches.name')->where('br_name', '=', $id)->first(),
            'date'=> [$sDate, $eDate]  
         ]);
    }

    public function searchReport(Request $request)
    {
        $branch = $request->br_name;
        $sDate = $request->sDate;
        $eDate = $request->eDate;

        $startDate = new Carbon('2020-01-01');
        $endDate = new Carbon('2020-01-08');
        $dateRange = array();
        while ($startDate->lte($endDate)) {
            $dateRange[] = $startDate->toFormattedDateString();
            $startDate->addDay();
        }

        if($branch != 'branch_main'){
            $branch = DB::table("branches")
            ->where('name', $id)
            ->get();   
            $branch = $branch[0]->br_name;
        }

        return DB::table($branch)
        ->select($branch.'.*', 'transfers.*')
        ->join ('transfers',$branch.'.item_detail_id','=','transfers.item_detail_id')
        ->whereIn($branch.'.c_date', $dateRange)
        ->get();
    }

    public function stockHistory(Request $request)
    {  
        $sDate = $request->sDate;
        $eDate = $request->eDate;
        $action = $request->action;
        $branch = $request->branch;
        $startDate = new Carbon($sDate);
        $endDate = new Carbon($eDate);
        $dateRange = array();
        while ($startDate->lte($endDate)) {
            $dateRange[] = $startDate->toFormattedDateString();
            $startDate->addDay();
        }
        $branch = Branches::select('branches.id', 'branches.name')
        ->where('br_name', '=', $branch)
        ->first();

        if($action == 'prescriptions'){
            return response()->json([
                "pres" => DB::table('doctor_prescriptions')
                ->select('doctor_prescriptions.*', 'item_details.id AS item_id',  'item_details.generic_name', 'item_details.item_img', 'manufacturer_details.name AS manuf_name', 'users.firstname', 'users.lastname', 'customers.name AS cname', 'customers.othername AS coname', 'branches.name AS branch_name')
                ->join ('item_details','doctor_prescriptions.item_id','=','item_details.id')
                ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
                ->join('users', 'doctor_prescriptions.pharmacist_id', '=', 'users.id')
                ->join('customers', 'doctor_prescriptions.customer_id', '=', 'customers.id')
                ->join('branches', 'doctor_prescriptions.branch_id', '=', 'branches.id')
                ->where('doctor_prescriptions.status','=','paid')
                ->where('doctor_prescriptions.branch_id','=',$branch->id)
                ->whereIn('doctor_prescriptions.p_date', $dateRange)
                ->get(),
                'bran'=> $branch->name,
                'action'=> $action,
                'date'=> [$sDate, $eDate]  
            ]);
        }
        if($action == 'adds'){
            return response()->json([
                "adds" => DB::table('purchases')
                ->select('purchases.*', 'item_details.id AS item_id',  'item_details.generic_name', 'item_details.item_img', 'manufacturer_details.name AS manuf_name', 'users.firstname', 'users.lastname')
                ->join ('item_details','purchases.item_detail_id','=','item_details.id')
                ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
                ->join('users', 'purchases.staff_id', '=', 'users.id')
                ->where('purchases.status','=','added')
                ->whereIn('purchases.p_date', $dateRange)
                ->get(),
                'bran'=> 'Main',
                'action' => $action,
                'date'=> [$sDate, $eDate] 
            ]);
        }
        if($action == 'transfersFrom'){
            return response()->json([
                "transFrm" => DB::table('transfers')
                ->select('transfers.*', 'item_details.id AS item_id',  'item_details.generic_name', 'item_details.item_img', 'users.firstname', 'users.lastname')
                ->join ('item_details','transfers.item_detail_id','=','item_details.id')
                ->join('users', 'transfers.staff_id', '=', 'users.id')
                ->where('transfers.status','=','close')
                ->where('transfers.quantity_from','=',$branch)
                ->whereIn('transfers.t_date', $dateRange)
                ->get(),
                'bran'=> $branch->name,
                'action'=> $action,
                'date'=> [$sDate, $eDate] 
            ]);
        }
        if($action == 'transfersTo'){
            return response()->json([
                "transTo" => DB::table('transfers')
                ->select('transfers.*', 'item_details.id AS item_id',  'item_details.generic_name', 'item_details.item_img', 'users.firstname', 'users.lastname')
                ->join ('item_details','transfers.item_detail_id','=','item_details.id')
                ->join('users', 'transfers.staff_id', '=', 'users.id')
                ->where('transfers.status','=','close')
                ->where('transfers.quantity_to','=',$branch)
                ->whereIn('transfers.t_date', $dateRange)
                ->get(),
                'bran'=> $branch->name,
                'action'=> $action,
                'date'=> [$sDate, $eDate] 
            ]);
        }
        if($action == 'variances'){
            return response()->json([
                "vari" => DB::table('variances')
                ->select('variances.*', 'item_details.id AS item_id',  'item_details.generic_name', 'item_details.item_img')
                ->join ('item_details','variances.item_detail_id','=','item_details.id')
                ->where('variances.status','=','close')
                ->where('variances.branch_id','=',$branch)
                ->whereIn('variances.v_date', $dateRange)
                ->get(),
                'bran'=> $branch->name,
                'action' => $action,
                'date'=> [$sDate, $eDate] 
            ]);
        }
        else{
            return response()->json(['error' => 'Invalid request, Try Again'], 401);
        }
    }
    // public function generalSearch($term)
    // {
    //     return DB::table($branch)
    //     ->select($branch.'.*', 'transfers.*')
    //     ->join ('transfers',$branch.'.item_detail_id','=','transfers.item_detail_id')
    //        ->where ('column', 'like', $term%)
    //     ->get();
    // }

    public function displayRole()
    {
        return Role::where('status', '=', 'active')->get();
    }

    public function displayPharAdminDash()
    {
        $branch = DB::table("branches")->where('status', '=', 'active')->orderBy('id')->get(); 
        $array = array();
        foreach($branch as $row){
            $name = $row->br_name;
            $return = DB::table($name)->sum($name.'.total_remain');
            array_push($array, (int)$return);
         }
         return $array;
    }

    public function displayPharStaffDash()
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();

        $id= Auth()->user()->branch_id;
        $get = DB::table("branches")->select('branches.br_name')->where('id', $id)->first();
        $branch = $get->br_name;

        return response()->json([
           "todayIncome" => DB::table('invoices')->where(['branch_id' => $id, 'i_date' => $cDate])->sum('paid'),
           "totalQuantity" => DB::table($branch)->where('c_date', $cDate)->sum('total_remain'),
           "totalPatients" => DB::table('customers')->count()
        ]);
    }

    public function displayPharAdminDashStaff()
    {
        return DB::table('users')->select(DB::raw('count(id) as "staffs", (select COUNT(id) from users where status = "approved") as "active", (select COUNT(id) from users where status = "suspended") as "suspended" '))    
        ->get();
    }

    public function displayPharAdminDashInvoice()
    {
        $branch = DB::table("branches")->where('status', '=', 'active')->orderBy('id')->get(); 
        $array = array();
        foreach($branch as $row){
            $name = $row->br_name;
            //Jan
            $getJan = DB::table('invoices')->where(["branch_id" => $row->id, "graph_date" => date("Y-01")])->sum('paid');
            //Feb
            $getFeb = DB::table('invoices')->where(["branch_id" => $row->id, "graph_date" => date("Y-02")])->sum('paid');
            //Mar
            $getMar = DB::table('invoices')->where(["branch_id" => $row->id, "graph_date" => date("Y-03")])->sum('paid');
            //Apr
            $getApr = DB::table('invoices')->where(["branch_id" => $row->id, "graph_date" => date("Y-04")])->sum('paid');
            //May
            $getMay = DB::table('invoices')->where(["branch_id" => $row->id, "graph_date" => date("Y-05")])->sum('paid');
            //Jun
            $getJun = DB::table('invoices')->where(["branch_id" => $row->id, "graph_date" => date("Y-06")])->sum('paid');
            //Jul
            $getJul = DB::table('invoices')->where(["branch_id" => $row->id, "graph_date" => date("Y-07")])->sum('paid');
            //Aug
            $getAug = DB::table('invoices')->where(["branch_id" => $row->id, "graph_date" => date("Y-08")])->sum('paid');
            //Sep
            $getSep = DB::table('invoices')->where(["branch_id" => $row->id, "graph_date" => date("Y-09")])->sum('paid');
            //Oct
            $getOct = DB::table('invoices')->where(["branch_id" => $row->id, "graph_date" => date("Y-10")])->sum('paid');
            //Nov
            $getNov = DB::table('invoices')->where(["branch_id" => $row->id, "graph_date" => date("Y-11")])->sum('paid');
            //Dec
            $getDec = DB::table('invoices')->where(["branch_id" => $row->id, "graph_date" => date("Y-12")])->sum('paid');
            
            array_push($array, array($row->br_name, $getJan, $getFeb, $getMar, $getApr, $getMay, $getJun, $getJul, $getAug, $getSep, $getOct, $getNov, $getDec));    
        }
        return $array;

    }

    public function displayPharStaffDashInvoice()
    {
        $id= Auth()->user()->branch_id;
        $get = DB::table("branches")->select('branches.name')->where('id', $id)->first();
        $branch = $get->name;

        $array = array();
        //Jan
        $getJan = DB::table('invoices')->where(["branch_id" => $id, "graph_date" => date("Y-01")])->sum('paid');
        //Feb
        $getFeb = DB::table('invoices')->where(["branch_id" => $id, "graph_date" => date("Y-02")])->sum('paid');
        //Mar
        $getMar = DB::table('invoices')->where(["branch_id" => $id, "graph_date" => date("Y-03")])->sum('paid');
        //Apr
        $getApr = DB::table('invoices')->where(["branch_id" => $id, "graph_date" => date("Y-04")])->sum('paid');
        //May
        $getMay = DB::table('invoices')->where(["branch_id" => $id, "graph_date" => date("Y-05")])->sum('paid');
        //Jun
        $getJun = DB::table('invoices')->where(["branch_id" => $id, "graph_date" => date("Y-06")])->sum('paid');
        //Jul
        $getJul = DB::table('invoices')->where(["branch_id" => $id, "graph_date" => date("Y-07")])->sum('paid');
        //Aug
        $getAug = DB::table('invoices')->where(["branch_id" => $id, "graph_date" => date("Y-08")])->sum('paid');
        //Sep
        $getSep = DB::table('invoices')->where(["branch_id" => $id, "graph_date" => date("Y-09")])->sum('paid');
        //Oct
        $getOct = DB::table('invoices')->where(["branch_id" => $id, "graph_date" => date("Y-10")])->sum('paid');
        //Nov
        $getNov = DB::table('invoices')->where(["branch_id" => $id, "graph_date" => date("Y-11")])->sum('paid');
        //Dec
        $getDec = DB::table('invoices')->where(["branch_id" => $id, "graph_date" => date("Y-12")])->sum('paid');
        
        array_push($array, array($branch, $getJan, $getFeb, $getMar, $getApr, $getMay, $getJun, $getJul, $getAug, $getSep, $getOct, $getNov, $getDec));    

        return response()->json([
            "branch" => $branch,
            "invoices" => $array
        ]);
    }

    public function displayPharAdminDashStock()
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();

        $branch = DB::table("branches")->where('status', '=', 'active')->orderBy('id')->get(); 
        $itemD = DB::table("item_details")->select('id')->orderBy('id')->get(); 
        $tempArray = array();
        $array = array();
        foreach($itemD as $row2){
            foreach($branch as $row){
                $name = $row->br_name;
                $itemFromBranch = DB::table($name)->select($name.'.item_detail_id', $name.'.total_remain')->where([$name.'.item_detail_id' => $row2->id, $name.'.c_date' => $cDate])->sum($name.'.total_remain');
                array_push($tempArray, (int)$itemFromBranch);
            }
            array_push($array, $tempArray);
            $tempArray = [];
        }
        return response()->json([
            "item" => DB::table('item_details')->orderBy('item_details.id')->select('item_details.id AS item_id', 'item_details.generic_name', 'manufacturer_details.name','item_categories.cat_name', 'item_details.item_img')
            ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
            ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
            ->get(),
            "inbranch" =>  $array,
        ]);
    }

    public function displayPharStaffDashStock()
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();

        $id= Auth()->user()->branch_id;
        $get = DB::table("branches")->select('branches.br_name')->where('id', $id)->first();
        $branch = $get->br_name;
        $itemD = DB::table("item_details")->select('id')->orderBy('id')->get();
        $array = array(); 
        foreach($itemD as $row){
            $itemFromBranch = DB::table($branch)->orderBy($branch.'.id')->select($branch.'.total_remain')->where([$branch.'.item_detail_id'=> $row->id, $branch.'c_date' => $cDate])->sum($branch.'.total_remain');
            array_push($array, (int)$itemFromBranch);
        }
        return response()->json([
            "item" => DB::table('item_details')->orderBy('item_details.id')->select('item_details.id AS item_id', 'item_details.generic_name', 'manufacturer_details.name','item_categories.cat_name', 'item_details.item_img', 'shelves.name as shelf_name', 'shelves.point as shelf_point','item_details.selling_price', 'item_details.purchasing_price', 'item_details.markup_price', 'item_types.type_name')
            ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
            ->join ('item_types','item_details.item_type_id','=','item_types.id')
            ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
            ->join ('shelves','shelves.id','=','item_details.shelve_id')
            ->get(),
            "total" =>  $array,
        ]);
    }

    public function displayPharAdminDashAppointment()
    {
        $branch = DB::table("branches")->where('status', '=', 'active')->orderBy('id')->get(); 
        $activeArray = array();
        $terminatedArray = array();
        $closeArray = array();
        foreach($branch as $row){
            //Active appointments
            $getActive = DB::table('appointments')->where(['branch_id' => $row->id, 'status' => 'active'])->count('status');
            if(empty($getActive)){
                array_push($activeArray, 0);
            }else {
                array_push($activeArray, $getActive);
            }
            //Terminated appointments
            $getTerminated = DB::table('appointments')->where(['branch_id' => $row->id, 'status' => 'terminated'])->count('status');
            if(empty($getTerminated)){
                array_push($terminatedArray, 0);
            }else {
                array_push($terminatedArray, $getTerminated);
            }
            //Closed appointments
            $getClosed = DB::table('appointments')->where(['branch_id' => $row->id, 'status' => 'close'])->count('status');
            if(empty($getClosed)){
                array_push($closeArray, 0);
            }else {
                array_push($closeArray, $getClosed);
            }
        }
        return response()->json([
            "active" => $activeArray,
            "terminated" => $terminatedArray,
            "closed" => $closeArray,
            "countAll" => DB::table('appointments')->count()
        ]);
    }
    
    public function displayPharStaffDashAppointment()
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();

        $id= Auth()->user()->branch_id; 

        $activeArray = array();
        $terminatedArray = array();
        $closeArray = array();

        //Active appointments
        $getActive = DB::table('appointments')->where(['branch_id' => $id, 'status' => 'active', 'date' => $cDate])->count('status');
        if(empty($getActive)){
            array_push($activeArray, 0);
        }else {
            array_push($activeArray, $getActive);
        }
        //Terminated appointments
        $getTerminated = DB::table('appointments')->where(['branch_id' => $id, 'status' => 'terminated', 'date' => $cDate])->count('status');
        if(empty($getTerminated)){
            array_push($terminatedArray, 0);
        }else {
            array_push($terminatedArray, $getTerminated);
        }
        //Closed appointments
        $getClosed = DB::table('appointments')->where(['branch_id' => $id, 'status' => 'close', 'date' => $cDate])->count('status');
        if(empty($getClosed)){
            array_push($closeArray, 0);
        }else {
            array_push($closeArray, $getClosed);
        }

        return response()->json([
            "active" => $activeArray,
            "terminated" => $terminatedArray,
            "closed" => $closeArray,
            "countAll" => DB::table('appointments')->where('branch_id', $id)->count(),
            "countToday" => DB::table('appointments')->where(['branch_id'=> $id, 'date' => $cDate])->count()
        ]);
    }

    public function displayCustomerCategory()
    {
        return DB::table("customer_category")->get(); 
    }
    // public function search($searchTerm)
    // {
    //     return response()->json(
    //         title::whereLike(['location', 'name_title'], $searchTerm)->get()   
    //     );
    // }
}
