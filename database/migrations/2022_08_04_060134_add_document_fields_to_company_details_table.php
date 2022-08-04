<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDocumentFieldsToCompanyDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('company_details', function (Blueprint $table) {
            $table->string('identification_file')->nullable();
            $table->string('identification_file_original_name')->nullable();
            $table->string('credit_file')->nullable();
            $table->string('credit_file_original_name')->nullable();
            $table->string('vat_file')->nullable();
            $table->string('vat_file_original_name')->nullable();
            $table->string('incorporation_file')->nullable();
            $table->string('incorporation_file_original_name')->nullable();
            $table->string('accounting_file')->nullable();
            $table->string('accounting_file_original_name')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('company_details', function (Blueprint $table) {
            //
        });
    }
}
