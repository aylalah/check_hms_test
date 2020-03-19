<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLabTestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lab_tests', function (Blueprint $table) {
            $table->increments('id');
            $table->string('test_type');
            $table->string('test_name');
            $table->string('test_description');
            $table->timestamps();
            $table->string('date');
            $table->string('time');
            $table->string('customer_id')->index();
            $table->string('test_type_id')->index();
            $table->string('lab_id')->index();
            $table->string('staff_id')->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lab_tests');
    }
}
