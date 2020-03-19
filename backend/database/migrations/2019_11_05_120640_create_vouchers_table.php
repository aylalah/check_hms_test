<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVouchersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vouchers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('no_of _item');
            $table->string('open_quantity');
            $table->string('supply_quantity');   
            $table->string('amount_cost'); 
            $table->string('refill_quantity');
            $table->string('refill_amount');
            $table->string('status');
            $table->timestamps();
            $table->string('date');
            $table->string('time');
            $table->integer('item_detail_id')->index();
            $table->integer('customer_id')->index();
            $table->integer('staff_id')->index();
            $table->integer('branch_id')->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vouchers');
    }
}
