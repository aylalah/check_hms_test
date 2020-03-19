<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item_units extends Model
{
    protected $fillable = [
        'name', 'box_size', 'value'
    ];
}
