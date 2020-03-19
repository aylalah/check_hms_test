<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lab_depts extends Model
{
    protected $fillable = [
        'lab_name', 'description', 'status', 'department_id'
    ];
}
