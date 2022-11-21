<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class WiseTransaction extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;
    protected $table = 'wise_transactions';
    protected $fillable = [
        'account_id',
        'transaction_id',
        'bookingDate',
        'bookingDateTime',
        'transactionAmount',
        'currency',
        'payee_name',
        're_information',
        'additional_information',
        'transaction_type',
        'internal_transaction_id',
        'remark'
    ];
}
