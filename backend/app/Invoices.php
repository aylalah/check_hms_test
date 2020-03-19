<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoices extends Model
{
    protected $fillable = [
        'name', 'no_of_item', 'supply_quantity', 'date', 'time', 'status', 'amount_paid', 'customer_id', 'staff_id', 'branch_id', 'graph_date'
    ];
}
