<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Med_reports extends Model
{
    protected $fillable = [        
        'temperature', 'pulse_rate', 'respiration_rate', 'weight',	'height', 'customer_id'
    ];
}
