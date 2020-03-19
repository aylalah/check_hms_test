<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item_types extends Model
{
    protected $fillable = [
        'type_name', 'image'
    ];
}
