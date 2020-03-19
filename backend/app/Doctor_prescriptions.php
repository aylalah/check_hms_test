<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doctor_prescriptions extends Model
{
    protected $fillable = [
        'customer_id',
        'item_id', 
        'quantity',
        'instruction',
        'day_supply',
        'days',
        'status',
        // 'supply_quantity', 
        'refill_status',
        // 'refill_quantity',
        // 'cost', 
        // 'paid', 
        // 'to_balance',
        'p_date',
        'p_time',
        'voucher_id',
        // 'payment_id',
        'appointment_id',
        'doctor_id',
        'pharmacist_id', 
        'branch_id',
        'dispense',
        'original_qty',
        'refill',
        'remain',
        'refill_range',
        'caution',
        'amount',
        'amount_paid',
        'instock',
    ];
}
