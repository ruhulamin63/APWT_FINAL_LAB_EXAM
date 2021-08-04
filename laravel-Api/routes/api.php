<?php

use App\Http\Controllers\api\EmpController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/emp-register', [EmpController::class, 'store']);
Route::get('admin', [EmpController::class, 'index']);

Route::get('edit-employee/{id}', [EmpController::class, 'edit']);
Route::put('update-employee/{id}', [EmpController::class, 'update']);

Route::delete('delete-employee/{id}', [EmpController::class, 'destroy']);