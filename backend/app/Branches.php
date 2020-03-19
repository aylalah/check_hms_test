<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Branches extends Model
{
    protected $table= 'branches';
    protected $fillable = [
        'name', 'br_name', 'address', 'contact_number', 'sales_rep','status', 'total_quantity', 'total_cost'
    ];
}
