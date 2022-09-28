<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class CustomerTransaction extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;
    protected $table = 'customer_transaction';
    protected $fillable = [
        'sales_id',
        'purchase_id',
        'activity',
        'amount',
        'payment',
        'amount_due',
        'comment',
        'sales_history_id',
        'purchase_history_id',
        'customer_id',
        'sales_payment_id',
        'purchase_payment_id'
    ];
}
