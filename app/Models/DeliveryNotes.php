<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class DeliveryNotes extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;
    protected $table = 'delivery_notes';
    protected $fillable = [
        'invoiceno',
        'invoicekey',
        'customer_id',
        'subtotal',
        'vattotal',
        'totalamount',
        'issue_date',
        'billing_address',
        'comment',
        'price_status'
    ];
}
