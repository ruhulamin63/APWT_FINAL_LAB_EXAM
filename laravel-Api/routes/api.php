<?php

use App\Http\Controllers\api\EmpController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/emp-register', [EmpController::class, 'store']);