<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use App;
use File;
use phpseclib\Net\SSH2;
use phpseclib\Net\SFTP;

class DBRemoteBackup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'remote:backup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Allows you to sync your local database to your remote.';

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
        $remote_host = env('REMOTE_SYNC_HOST');
        $remote_db = env('REMOTE_SYNC_DB_NAME');
        $remote_db_username = env('REMOTE_SYNC_DB_USERNAME');
        $remote_db_password = env('REMOTE_SYNC_DB_PASSWORD');

        $ssh_user = env('REMOTE_SYNC_SSH_USERNAME');
        $ssh_pass = env('REMOTE_SYNC_SSH_PASSWORD');

        $BACKUPPATH = File::get('c:/wamp64/www/buth-pharm/backend/backupload/buth_pharmacy.sql');

        // Checking to make sure this isn't production.
        // if (App::environment('production')) {
        //     $this->error("Please don't try and run this in production... will not end well.");
        //     return;
        // }

        if(!$remote_db || !$remote_db || !$ssh_user || !$ssh_pass){            
            $this->error('Add your environment variables!');
            return;
        }
        
        // Connect via ssh to dump the db on the remote server.
        $ssh = new SSH2($remote_host);
        if (!$ssh->login($ssh_user, $ssh_pass)) {
            $this->error('Login failed make sure your ssh username and password is set in your env file.');
            return;
        }

         // Temporarily remove memory limit
        //  ini_set('memory_limit', '-1');
        
        $ssh->exec('mysqldump -u ' . $ssh_user . '  -pxyzzy ' . $remote_db . ' > sync_backup.sql');

        //Drop remote database
        $ssh->exec('mysqladmin -h '. $remote_host .' -u ' . $remote_db_username . '-p' . $remote_db_password . 'drop' . $remote_db . '-f');

        //Create remote database after dropping 
        $ssh->exec('mysqladmin -h '. $remote_host .' -u ' . $remote_db_username . '-p' . $remote_db_password . 'create' . $remote_db);

        //Import/upload the database 
        $ssh->exec('mysql -h '. $remote_host .' -u ' . $remote_db_username . '-p' . $remote_db_password . $remote_db < $BACKUPPATH);

        //Disconnect after
        $ssh->disconnect();

        // Connect via sftp to d/l the dump
        // $sftp = new SFTP($remote_url);

        // if (!$sftp->login($ssh_user, $ssh_pass)) {
        //     $this->error('Login failed make sure your SSH username and password is set in your env file.');
        //     return;
        // }

        // Temporarily remove memory limit
        // ini_set('memory_limit', '-1');

        // $this->info('Getting the backup.');
        
        // $sftp->get('sync_backup.sql', storage_path('sync_backup.sql'));

        // $this->info('Importing...');
        // DB::unprepared(File::get(storage_path('sync_backup.sql')));

        // $this->info('Migrating...');
        // $this->call('migrate');
        // $this->info('Removing back up files.');
        // $ssh->exec('rm sync_backup.sql');
        // File::delete(storage_path('sync_backup.sql'));
        // $this->info('Complete! You are synced with the remote DB.');

    }
}
