<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('date');
            $table->string('time');
            $table->string('status')->default('open');
            $table->integer('customer_id')->index();
            $table->integer('dept_id')->index();
            $table->integer('treatment_id')->index();
            $table->integer('prescription_id')->index();
            $table->integer('invoice_id')->index();
            $table->integer('voucher_id')->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appointments');
    }
}
