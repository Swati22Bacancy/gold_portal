<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class PurchaseHistory extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;
    protected $table = 'purchase_history';
    protected $fillable = [
        'purchase_id',
        'comment',
        'amount',
        'note',
        'category',
        'log_date'
    ];
}
