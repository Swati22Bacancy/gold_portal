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
    Route::post('updateprofile', [Api\AuthController::class, 'updateprofile']);
    Route::post('updatepassword', [Api\AuthController::class, 'updatepassword']);

    // Customer Routes
    Route::post('create_customer', [Api\CustomerController::class, 'createcustomer']);
    //Route::get('customerlist', [Api\CustomerController::class, 'customerlist']);
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
    Route::get('productdata/{id}', [Api\ProductController::class, 'productdata']);

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

    // Industry Sector Routes
    Route::post('create_industrysector', [Api\IndustrySectorController::class, 'createindustrysector']);
    Route::get('industrysector_list', [Api\IndustrySectorController::class, 'industrysectorlist']);
    Route::get('delete_industrysector/{id}', [Api\IndustrySectorController::class, 'deleteindustrysector']);
    Route::get('industrysector_details/{id}', [Api\IndustrySectorController::class, 'industrysectordetails']);
    Route::post('update_industrysector', [Api\IndustrySectorController::class, 'updateindustrysector']);

    // Company Details Routes
    Route::post('store_details',[Api\CompanyDetailsController::class, 'storedetails']);
    Route::get('saved_companydetails',[Api\CompanyDetailsController::class, 'saved_companydetails']);
    Route::post('update_details',[Api\CompanyDetailsController::class, 'update_details']);
    Route::get('download',[Api\CompanyDetailsController::class, 'download']);

    // Customer Settings Routes
    Route::post('store_customersettings',[Api\CustomerSettingsController::class, 'storecustomersettings']);
    Route::get('saved_customersettings',[Api\CustomerSettingsController::class, 'savedcustomersettings']);
    Route::post('update_customersettings',[Api\CustomerSettingsController::class, 'updatecustomersettings']);

    // Vat Settings Routes
    Route::post('store_vatsettings',[Api\VatSettingsController::class, 'storevatsettings']);
    Route::get('saved_vatsettings',[Api\VatSettingsController::class, 'savedvatsettings']);
    Route::post('update_vatsettings',[Api\VatSettingsController::class, 'updatevatsettings']);

    // Sales Invoice Routes
    Route::post('create_invoice',[Api\SalesController::class, 'createinvoice']);
    Route::get('sales_list', [Api\SalesController::class, 'saleslist']);
    Route::get('sales_details/{id}', [Api\SalesController::class, 'salesdetails']);
    Route::post('create_payment',[Api\SalesController::class, 'createpayment']);
    Route::get('delete-payment/{id}', [Api\SalesController::class, 'deletepayment']);
    Route::get('get_invoicekey', [Api\SalesController::class, 'getinvoicekey']);
    Route::post('create_note',[Api\SalesController::class, 'createnote']);
    Route::get('sales_history/{id}', [Api\SalesController::class, 'saleshistory']);
    Route::post('create_refund',[Api\SalesController::class, 'createrefund']);
    Route::get('delete-refund/{id}', [Api\SalesController::class, 'deleterefund']);
    Route::post('update_invoicestatus',[Api\SalesController::class, 'updateinvoicestatus']);
    Route::get('sales_list_by_status/{status}', [Api\SalesController::class, 'salesbystatus']);
    Route::post('upload_kyc',[Api\SalesController::class, 'uploadkyc']);
    Route::get('fetch_kyc/{id}', [Api\SalesController::class, 'fetchkyc']);
    Route::get('delete-file/{id}', [Api\SalesController::class, 'deletefile']);
    Route::get('download-kyc',[Api\SalesController::class, 'downloadkyc']);

    // Purchase Invoice Routes
    Route::post('create_purchase',[Api\PurchaseController::class, 'createinvoice']);
    Route::get('purchase_list', [Api\PurchaseController::class, 'purchaselist']);
    Route::get('purchase_details/{id}', [Api\PurchaseController::class, 'purchasedetails']);
    Route::post('create_purchasepayment',[Api\PurchaseController::class, 'createpayment']);
    Route::get('delete_purchasepayment/{id}', [Api\PurchaseController::class, 'deletepayment']);
    Route::get('get_purchasekey', [Api\PurchaseController::class, 'getinvoicekey']);
    Route::post('create_purchasenote',[Api\PurchaseController::class, 'createnote']);
    Route::get('purchase_history/{id}', [Api\PurchaseController::class, 'purchasehistory']);
    Route::post('update_orderstatus',[Api\PurchaseController::class, 'updateorderstatus']);
    Route::get('purchase_list_by_status/{status}', [Api\PurchaseController::class, 'purchasebystatus']);
});
