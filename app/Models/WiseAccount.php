<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class WiseAccount extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;
    protected $table = 'wise_accounts';
    protected $fillable = [
        'account_no',
        'account_name',
        'account_id',
        'balance'
    ];
}
