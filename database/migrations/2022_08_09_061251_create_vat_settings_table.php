<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVatSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vat_settings', function (Blueprint $table) {
            $table->id();
            $table->string('vat_status')->nullable();
            $table->string('tax_name')->nullable();
            $table->string('vat_number')->nullable();
            $table->string('turnover')->nullable();
            $table->string('vat_period')->nullable();
            $table->string('calculation_method')->nullable();
            $table->boolean('owe_vat')->default(0);
            $table->boolean('remind_vat')->default(0);
            $table->boolean('lock_transaction')->default(0);
            $table->string('vat_rate')->nullable();
            $table->string('default_vatrate')->nullable();
            $table->boolean('scheme_cash')->default(0);
            $table->string('cash_scheme')->nullable();
            $table->boolean('flatrate_scheme')->default(0);
            $table->string('frs_rate')->nullable();
            $table->string('flatvat_rate')->nullable();
            $table->string('priorfrs_rate')->nullable();
            $table->string('prior_to')->nullable();
            $table->boolean('enable_filing')->default(0);
            $table->string('username')->nullable();
            $table->string('password')->nullable();
            $table->string('branch')->nullable();
            $table->string('postcode')->nullable();
            $table->string('ecs_vat')->nullable();
            $table->boolean('ecs_exclude')->default(0);
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
        Schema::dropIfExists('vat_settings');
    }
}
