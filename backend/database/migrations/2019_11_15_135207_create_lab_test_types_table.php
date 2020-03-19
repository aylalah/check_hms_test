<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLabTestTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lab_test_types', function (Blueprint $table) {
            $table->increments('id');
            $table->string('test_type');
            $table->string('test_name');
            $table->string('test_description');
            $table->timestamps();
            $table->string('date');
            $table->string('time');
            $table->string('lab_dept_id')->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lab_test_types');
    }
}
