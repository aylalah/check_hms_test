<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;


class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
        Commands\DailyDBUpdate::class,
        Commands\DBRemoteBackup::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {   
        //THIS RUN AT 11:59 MIDNIGHT EVERY DAY
        // 59 11 * * * cd /home/<username>/public_html/backend && php artisan schedule:run >> /dev/null 2>&1

        $schedule->command('sync:day')->daily();

        $schedule->command('composer export-database')->daily();  
        
        $schedule->command('remote:backup')->daily();

        // DB::table('recent_users')->delete();
        // })->daily();
    }

    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        require base_path('routes/console.php');
    }
}
