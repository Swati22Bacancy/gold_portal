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
Route::get('check_permisssion/{id}',[Api\AuthController::class, 'check_permisssion']);
    
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

    // Currency Routes
    Route::post('create_currency', [Api\CurrencyController::class, 'createcurrency']);
    Route::get('currencylist', [Api\CurrencyController::class, 'currencylist']);
    Route::get('deletecurrency/{id}', [Api\CurrencyController::class, 'deletecurrency']);
    Route::get('currencydetails/{id}', [Api\CurrencyController::class, 'currencydetails']);
    Route::post('update_currency', [Api\CurrencyController::class, 'updatecurrency']);

    // User Routes
    Route::post('create_user', [Api\UserController::class, 'createuser']);
    Route::get('userlist', [Api\UserController::class, 'userlist']);
    Route::get('deleteuser/{id}', [Api\UserController::class, 'deleteuser']);
    Route::get('userdetails/{id}', [Api\UserController::class, 'userdetails']);
    Route::post('update_user', [Api\UserController::class, 'updateuser']);

    // Roles Routes
    Route::post('create_role', [Api\RoleController::class, 'createrole']);
    Route::get('rolelist', [Api\RoleController::class, 'rolelist']);
    Route::get('deleterole/{id}', [Api\RoleController::class, 'deleterole']);
    Route::get('roledetails/{id}', [Api\RoleController::class, 'roledetails']);
    Route::post('update_role', [Api\RoleController::class, 'updaterole']);

    // Permission Routes
    Route::post('assign_permission',[Api\PermissionController::class, 'sync']);
    Route::get('show_permission/{id}',[Api\PermissionController::class, 'show']);
    //Route::get('check_permisssion',[Api\PermissionController::class, 'check_permisssion']);

    // Invoice Options Routes
    Route::post('store_basic',[Api\InvoiceOptionsController::class, 'storebasic']);
    Route::post('store_fields',[Api\InvoiceOptionsController::class, 'storefields']);
    Route::get('saved_invoiceoptions',[Api\InvoiceOptionsController::class, 'saved_invoiceoptions']);
    Route::post('update_basic',[Api\InvoiceOptionsController::class, 'update_basic']);
    Route::post('update_fields',[Api\InvoiceOptionsController::class, 'update_fields']);
});
