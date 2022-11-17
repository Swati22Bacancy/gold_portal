<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWiseTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wise_transactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('account_id');
            $table->foreign('account_id')->references('id')->on('wise_accounts');
            $table->string('transaction_id')->nullable();
            $table->string('bookingDate')->nullable();
            $table->string('bookingDateTime')->nullable();
            $table->string('transactionAmount')->nullable();
            $table->string('currency')->nullable();
            $table->string('payee_name')->nullable();
            $table->string('re_information')->nullable();
            $table->string('additional_information')->nullable();
            $table->string('transaction_type')->nullable();
            $table->string('internal_transaction_id')->nullable();
            $table->string('remark')->nullable();
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
        Schema::dropIfExists('wise_transactions');
    }
}
