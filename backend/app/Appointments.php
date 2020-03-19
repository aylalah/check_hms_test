<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointments extends Model
{
    protected $fillable = [
        
    	'customer_id', 'department_id', 'branch_id','voucher_id',  'treatment', 'lab','prescription',	'invoice', 'voucher',	'status', 'date', 'time'
    ];
}
