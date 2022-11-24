<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class DefaultBankrule extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;
    protected $table = 'default_bankrule';
    protected $fillable = [
        'invoice_date',
        'customer_name',
        'invoice_number',
        'invoice_amount',
        'purchase_date',
        'purchase_customer',
        'purchase_number',
        'purchase_amount'
    ];
}
