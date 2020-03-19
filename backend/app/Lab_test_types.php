<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lab_test_types extends Model
{
    protected $fillable = [
        'test_name', 'test_description', 'status', 'lab_dept_id'
    ];
}
