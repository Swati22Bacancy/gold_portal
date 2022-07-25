<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [Api\AuthController::class, 'login']);
Route::post('register', [Api\RegisterController::class, 'register']);
Route::post('forgot', [Api\ForgotController::class, 'forgot']);
Route::post('reset', [Api\ForgotController::class, 'reset']);
Route::get('email/resend/{user}', [Api\VerifyController::class, 'resend'])->name('verification.resend');
Route::get('email/verify/{id}', [Api\VerifyController::class, 'verify'])->name('verification.verify');; // Make sure to keep this as your route name
    
Route::group(['middleware' => ['auth:api']], function () {
    Route::get('user', [Api\AuthController::class, 'user']);

    // Customer Routes
    Route::post('create_customer', [Api\CustomerController::class, 'createcustomer']);
    Route::get('customerlist', [Api\CustomerController::class, 'customerlist']);
    Route::get('customerlist/{type}', [Api\CustomerController::class, 'customerlist']);
    Route::get('deletecustomer/{id}', [Api\CustomerController::class, 'deletecustomer']);
    Route::get('customerdetails/{id}', [Api\CustomerController::class, 'customerdetails']);
    Route::post('update_customer', [Api\CustomerController::class, 'updatecustomer']);

    // Group Routes
    Route::post('create_group', [Api\GroupController::class, 'creategroup']);
    Route::get('grouplist', [Api\GroupController::class, 'grouplist']);
    Route::get('deletegroup/{id}', [Api\GroupController::class, 'deletegroup']);
    Route::get('groupdetails/{id}', [Api\GroupController::class, 'groupdetails']);
    Route::post('update_group', [Api\GroupController::class, 'updategroup']);

    // Product Type Routes
    Route::post('create_producttype', [Api\ProductTypeController::class, 'createproducttype']);
    Route::get('producttypelist', [Api\ProductTypeController::class, 'producttypelist']);
    Route::get('deleteproducttype/{id}', [Api\ProductTypeController::class, 'deleteproducttype']);
    Route::get('producttypedetails/{id}', [Api\ProductTypeController::class, 'producttypedetails']);
    Route::post('update_producttype', [Api\ProductTypeController::class, 'updateproducttype']);

    // Product Routes
    Route::post('create_product', [Api\ProductController::class, 'createproduct']);
    Route::get('productlist', [Api\ProductController::class, 'productlist']);
    Route::get('deleteproduct/{id}', [Api\ProductController::class, 'deleteproduct']);
    Route::get('productdetails/{id}', [Api\ProductController::class, 'productdetails']);
    Route::post('update_product', [Api\ProductController::class, 'updateproduct']);
});
