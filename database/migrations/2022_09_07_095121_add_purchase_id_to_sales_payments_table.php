<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPurchaseIdToSalesPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sales_payments', function (Blueprint $table) {
            $table->bigInteger('purchase_id')->nullable()->unsigned();
            $table->foreign('purchase_id')->references('id')->on('purchase_invoice');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sales_payments', function (Blueprint $table) {
            //
        });
    }
}
