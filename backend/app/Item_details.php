<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item_details extends Model
{
    protected $fillable = [
        'generic_name', 'price_3', 'price_2', 'selling_price', 'purchasing_price', 'markup_price', 'manufacture_date', 'expiring_date', 'status', 'item_date', 'item_time', 'item_img', 'item_unit_id', 'item_category_id', 'item_type_id', 'manufacturer_id', 'tax_id', 'discount_id', 'staff_id', 'shelve_id', 'item_shelf_id'	
    ];
}
