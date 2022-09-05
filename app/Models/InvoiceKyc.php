<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class InvoiceKyc extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $table = 'invoice_kyc';
    protected $fillable = [
        'sales_id',
        'identification_file',
        'identification_file_original_name',
        'category',
        'file_type'
    ];
}
