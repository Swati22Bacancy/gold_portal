<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class CompanyDetails extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $fillable = [
        'company_name',
        'address1',
        'address2',
        'postcode',
        'country',
        'contact_name',
        'contact_email',
        'contact_telephone',
        'contact_mobile',
        'payment_days',
        'payment_condition',
        'currency_id',
        'vat_status',
        'vat_number',
        'sector_id',
        'business_type',
        'account_name',
        'account_number',
        'sort_code',
        'usd_account_number',
        'bank_code',
        'routing_number'
    ];
}
