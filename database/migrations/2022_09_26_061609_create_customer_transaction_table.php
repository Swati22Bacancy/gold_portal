<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomerTransactionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer_transaction', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sales_id')->nullable();
            $table->foreign('sales_id')->references('id')->on('sales_invoice');
            $table->unsignedBigInteger('purchase_id')->nullable();
            $table->foreign('purchase_id')->references('id')->on('purchase_invoice');
            $table->string('activity')->nullable();
            $table->string('amount')->nullable();
            $table->string('payment')->nullable();
            $table->string('amount_due')->nullable();   
            $table->string('comment')->nullable();   
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customer_transaction');
    }
}
