<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoiceOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoice_options', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_name')->nullable();
            $table->string('method')->nullable();
            $table->string('creditnote_name')->nullable();
            $table->string('customer_reference')->nullable();
            $table->string('quantity')->nullable();
            $table->boolean('name_include')->default(0);
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
        Schema::dropIfExists('invoice_options');
    }
}
