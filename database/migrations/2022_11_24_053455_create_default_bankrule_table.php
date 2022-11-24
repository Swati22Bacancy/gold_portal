<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDefaultBankruleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('default_bankrule', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_date')->default(0);
            $table->boolean('customer_name')->default(0);
            $table->boolean('invoice_number')->default(0);
            $table->boolean('invoice_amount')->default(0);
            $table->boolean('purchase_date')->default(0);
            $table->boolean('purchase_customer')->default(0);
            $table->boolean('purchase_number')->default(0);
            $table->boolean('purchase_amount')->default(0);
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
        Schema::dropIfExists('default_bankrule');
    }
}
