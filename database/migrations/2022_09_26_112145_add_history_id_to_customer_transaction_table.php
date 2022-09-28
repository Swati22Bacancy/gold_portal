<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddHistoryIdToCustomerTransactionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('customer_transaction', function (Blueprint $table) {
            $table->unsignedBigInteger('sales_history_id')->nullable();
            $table->foreign('sales_history_id')->references('id')->on('sales_history');
            $table->unsignedBigInteger('purchase_history_id')->nullable();
            $table->foreign('purchase_history_id')->references('id')->on('purchase_history');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('customer_transaction', function (Blueprint $table) {
            //
        });
    }
}
