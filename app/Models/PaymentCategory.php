<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use App\Models\Permission;

class PaymentCategory extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $table = 'payment_categories';
    protected $fillable = [
        'name'
    ];

    
}
