<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class SetupController extends Controller
{
    public function setupStatus()
    {
        // $con = DB::connection('mysql2')->table('client_config')->get();
        // return $con;
        $this->updateItemTables();
        return DB::table('general_settings')->select('status', 'short_name', 'module')->get();
    }

    public function generalSettings()
    {
        return DB::table('general_settings')->select('app_url', 'logo')->get();
    }
    public function updateItemTables()
    {
        $loop = true;
        $branch = DB::table("branches")->select('branches.*')->get();   
        $dt = Carbon::yesterday();
        $yesterDate = $dt->toFormattedDateString();
        $dt2 = Carbon::now();
        $todayDate = $dt2->toFormattedDateString();
        $cTime = $dt2->format('h:i:s A');
        foreach($branch as $brancID){
            $branch_name = $brancID->br_name;
            $getFromBranch = DB::table($branch_name)
                ->where ('c_date', '=', $yesterDate)
                ->get();
            foreach($getFromBranch as $itemID){
                if(DB::table($branch_name)->where(['c_date' => $todayDate, 'item_detail_id' => $itemID->item_detail_id])->exists()){
                    $loop = false;
                    continue;
                }
                if($loop){
                    $insert = DB::table($branch_name)->insertGetId(
                        [
                            'open_stock'=> $itemID->total_remain,
                            'variance'=> $itemID->variance,
                            'sales'=> '0',
                            'transfer'=> '0',
                            'receive'=> '0',
                            'total_remain'=> $itemID->total_remain,
                            'physical_balance'=> $itemID->physical_balance,
                            'c_date'=> $todayDate,
                            'c_time'=> $cTime, 
                            'item_detail_id' => $itemID->item_detail_id,
                            'staff_id' => $itemID->staff_id,
                        ]);
                }
            }
        }
    }
}
