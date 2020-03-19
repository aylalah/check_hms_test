<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('mobile_number')->unique();   
            $table->string('address');
            $table->string('d_o_b');
            $table->string('allergy');
            $table->string('n_h_i_s');
            $table->string('card_number');
            $table->string('status');
            $table->string('about');
            $table->timestamps();
            $table->string('date');
            $table->string('time');
            $table->integer('blood_id')->index();
            $table->integer('account_id')->index();
            $table->integer('treatment_id')->index();
            $table->integer('prescription_id')->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
