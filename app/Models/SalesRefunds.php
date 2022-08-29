<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class SalesRefunds extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $table = 'sales_refund';

    protected $fillable = [
        'sales_id',
        'refund_date',
        'totalamount',
        'method',
        'bank',
        'comment'
    ];
}
