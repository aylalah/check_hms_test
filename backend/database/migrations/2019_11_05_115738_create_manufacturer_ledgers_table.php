<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateManufacturerLedgersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('manufacturer_ledgers', function (Blueprint $table) {
            $table->increments('id');
                $table->string('quantity');
                $table->string('credit');
                $table->string('balance');
                $table->string('invoice_number');
                $table->string('status');
                $table->timestamps();
                $table->string('date');
                $table->string('time');
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
        Schema::dropIfExists('manufacturer_ledgers');
    }
}
