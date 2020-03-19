<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vouchers extends Model
{
    protected $fillable = [
         'no_of_item', 'open_quantity', 'supply_quantity', 'amount_cost', 'refill_quantity', 'refill_amount', 'date', 'time', 'status', 'customer_id', 'staff_id', 'branch_id'
    ];
}
