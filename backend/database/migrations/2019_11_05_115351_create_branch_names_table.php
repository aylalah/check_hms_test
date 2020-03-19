<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBranchNamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('branch_names', function (Blueprint $table) {
            $table->increments('id');
            $table->string('open_stock');
            $table->string('sales');
            $table->string('transfer');
            $table->string('receive');
            $table->string('total_remain');
            $table->string('close_balance');
            $table->string('variance');
            $table->string('physical_balance');
            $table->string('amount');
            $table->string('balance');
            $table->timestamps();
            $table->integer('item_detail_id')->index();
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
        Schema::dropIfExists('branch_names');
    }
}
