<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class VatSettings extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $fillable = [
        'vat_status',
        'tax_name',
        'vat_number',
        'turnover',
        'vat_period',
        'owe_vat',
        'remind_vat',
        'lock_transaction',
        'calculation_method',
        'vat_rate',
        'default_vatrate',
        'scheme_cash',
        'cash_scheme',
        'flatrate_scheme',
        'frs_rate',
        'flatvat_rate',
        'priorfrs_rate',
        'prior_to',
        'enable_filing',
        'username',
        'password',
        'branch',
        'postcode',
        'ecs_vat',
        'ecs_exclude'
    ];
}
