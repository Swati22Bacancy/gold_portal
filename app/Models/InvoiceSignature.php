<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class InvoiceSignature extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;
    protected $table = 'invoice_signature';
    protected $fillable = [
        'purchase_id',
        'sales_id',
        'signature_file',
        'signature_filename',
        'signed_by',
        'comment'
    ];
}
