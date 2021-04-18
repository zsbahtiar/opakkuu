<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Home
Route::get('/')->name('home')->uses('HomeController@index');
// Product Detail
Route::get('/p/{product:slug}')->name('product.detail')->uses('HomeController@ProductDetail');


// Auth
Route::get('login')->name('login')->uses('Auth\LoginController@showLoginForm')->middleware('guest');
Route::post('login')->name('login.attempt')->uses('Auth\LoginController@login')->middleware('guest');
Route::post('logout')->name('logout')->uses('Auth\LoginController@logout');

// Dashboard
Route::prefix('panel')->group(function () {
    Route::get('/')->name('dashboard')->uses('DashboardController')->middleware('auth');

    // Images
    Route::get('/img/{path}', 'ImagesController@show')->where('path', '.*');


    // Products
    Route::get('products')->name('products')->uses('ProductsController@index')->middleware('remember', 'auth');
    Route::get('products/create')->name('products.create')->uses('ProductsController@create')->middleware('auth');
    Route::post('products')->name('products.store')->uses('ProductsController@store')->middleware('auth');
    Route::get('products/{product}/edit')->name('products.edit')->uses('ProductsController@edit')->middleware('auth');
    Route::put('products/{product}')->name('products.update')->uses('ProductsController@update')->middleware('auth');
    Route::delete('products/{product}')->name('products.destroy')->uses('ProductsController@destroy')->middleware('auth');
    Route::put('products/{product}/restore')->name('products.restore')->uses('ProductsController@restore')->middleware('auth');
});


// 500 error
Route::get('500', function () {
    echo $fail;
});
