<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

use App\Departments;

class DailyDBUpdate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:day';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update all center table with the insertion of the previous data going to another day';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //
        // $this->info('Word of the Day sent to All Users');

        $branch = DB::table("branches")->get();   
        $dt = Carbon::yesterday();
        $yesterDate = $dt->toFormattedDateString();
        $dt2 = Carbon::now();
        $todayDate = $dt2->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');
        foreach($branch as $brancID){
            $branch_name = $brancID->br_name;
            $getFromBranch = DB::table($branch_name)
                ->where ('c_date', '=', $yesterDate)
                ->get();
            foreach($getFromBranch as $itemID){
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
        $this->info('DB updated');
    }
}
