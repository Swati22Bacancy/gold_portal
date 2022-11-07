<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class DeliveryNotesItems extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $fillable = [
        'deliverynotes_id',
        'producttype_id',
        'product_id',
        'weight',
        'quantity',
        'unitprice',
        'vat',
        'invoice_amount',
        'price_status'
    ];
}
