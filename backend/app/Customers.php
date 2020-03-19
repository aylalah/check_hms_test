<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    protected $fillable = [
        'name', 
        'othername', 
        'email', 
        'gender', 
        'mobile_number', 
        'address', 
        'city', 
        'state', 
        'country', 
        'd_o_b', 
        // 'about',
        // 'allergy', 
        'cust_category_id',
        'n_h_i_s', 
        'card_number',
        'status',
        'age',
        'type',
        'occupation',
        'marital_status',
        'religion',
        'next_of_kin_name',
        'kin_relationship',
        'next_of_kin_mobile',
        'next_of_kin_address',
    ];
}
