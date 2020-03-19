<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePurchasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchases', function (Blueprint $table) {
            $table->increments('id');
            $table->string('quantity');
            $table->timestamps();  
            $table->sting('date');
            $table->string('time');
            $table->integer('item_detail_id')->index();
            $table->integer('staff_id')->index();
            $table->integer('branch_id')->index();
            $table->integer('manufacturer_detail_id')->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('purchases');
    }
}
