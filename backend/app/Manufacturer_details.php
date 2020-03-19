<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Manufacturer_details extends Model
{
    protected $fillable = [
        'name', 'address', 'contact_number', 'details', 'status'	
    ];
}
