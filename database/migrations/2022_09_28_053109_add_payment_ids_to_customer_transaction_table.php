<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPaymentIdsToCustomerTransactionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('customer_transaction', function (Blueprint $table) {
            $table->unsignedBigInteger('sales_payment_id')->nullable();
            $table->foreign('sales_payment_id')->references('id')->on('sales_payments');
            $table->unsignedBigInteger('purchase_payment_id')->nullable();
            $table->foreign('purchase_payment_id')->references('id')->on('purchase_payments');
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
