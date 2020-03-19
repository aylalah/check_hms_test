<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shelves extends Model
{
    protected $fillable = [
        'name', 'point', 'branch_id', 'status'	
    ];
}
