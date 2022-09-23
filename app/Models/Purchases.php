<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Purchases extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;
    protected $table = 'purchase_invoice';
    protected $fillable = [
        'invoiceno',
        'invoicekey',
        'customer_id',
        'currency_id',
        'subtotal',
        'vattotal',
        'totalamount',
        'issue_date',
        'due_date',
        'billing_address',
        'reference',
        'comment',
        'price_status'
    ];
}
