<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Register extends Model
{
    use HasFactory;

    protected $table='registers';
    protected $fillabel = [
        'username',
        'name',
        'company_name',
        'phone',
        'password',
    ];
}
