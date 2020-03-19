<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Duration extends Model
{
    protected $table= 'durations';
    protected $fillable = [        
    	'duration_name', 'value', 'type_id', 'status', 'created_at', 'updated_at', 'user_id'
    ];
}
