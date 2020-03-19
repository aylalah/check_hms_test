<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Daily_supply extends Model
{
    protected $table= 'daily_supply';
    protected $fillable = [        
    	'name', 'value', 'type_id', 'status', 'created_at', 'updated_at', 'user_id'
    ];
}
