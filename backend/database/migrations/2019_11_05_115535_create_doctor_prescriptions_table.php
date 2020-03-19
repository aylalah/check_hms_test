<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDoctorPrescriptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctor_prescriptions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('item_id')->index();
            $table->string('quantity');
            $table->string('instruction');
            $table->string('day_supply');
            $table->string('days');
            $table->timestamps();
            $table->string('date');
            $table->string('time');
            $table->string('status');
            $table->string('supply_quantity');
            $table->string('refill_status');
            $table->string('refill_quantity');
            $table->string('cost');
            $table->string('paid');
            $table->string('to_balance');
            $table->integer('voucher_id')->index();
            $table->integer('payment_id')->index();
            $table->integer('customer_id')->index();
            $table->integer('doctor_id')->index();
            $table->integer('pharmacist_id')->index();
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
        Schema::dropIfExists('doctor_prescriptions');
    }
}
