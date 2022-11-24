<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveUniqueTransactionIdToWiseTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('wise_transactions', function (Blueprint $table) {
            $table->dropUnique('wise_transactions_transaction_id_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('wise_transactions', function (Blueprint $table) {
            $table->string('transaction_id')->nullable(false)->unique()->change();
        });
    }
}
