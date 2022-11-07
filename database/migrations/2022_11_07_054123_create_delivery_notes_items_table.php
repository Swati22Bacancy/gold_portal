<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeliveryNotesItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('delivery_notes_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('deliverynotes_id');
            $table->foreign('deliverynotes_id')->references('id')->on('delivery_notes');
            $table->unsignedBigInteger('producttype_id');
            $table->foreign('producttype_id')->references('id')->on('producttypes');
            $table->unsignedBigInteger('product_id');
            $table->foreign('product_id')->references('id')->on('products');
            $table->string('weight')->nullable();
            $table->string('quantity')->nullable();
            $table->string('unitprice')->nullable();
            $table->string('vat')->nullable();
            $table->string('invoice_amount')->nullable();
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
        Schema::dropIfExists('delivery_notes_items');
    }
}
