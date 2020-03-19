<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTreatmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('treatments', function (Blueprint $table) {
            $table->increments('id');
            $table->string('treatment_type');
            $table->string('note');
            $table->timestamps();
            $table->string('date');
            $table->string('time');
            $table->integer('prescription_id')->index();
            $table->integer('staff_id')->index();
            $table->integer('branch_id')->index();
            $table->integer('dept_id')->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('treatments');
    }
}
