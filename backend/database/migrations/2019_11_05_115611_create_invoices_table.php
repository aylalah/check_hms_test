<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('no_of_item');
            $table->string('supply_quantity');
            $table->string('amount_paid');
            $table->string('status');
            $table->string('delivery_status');
            $table->timestamps();
            $table->string('date');
            $table->string('time');
            $table->integer('customer_id')->index();
            $table->integer('branch_id')->index();
            $table->integer('staff_id')->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoices');
    }
}
