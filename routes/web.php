<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\nftController;
use App\Http\Controllers\exploreController;
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

Route::get('/', [nftController::class, 'index']);
Route::get('creatCollectable',[nftController::class, 'create']);
Route::post('store',[nftController::class, 'store']);
Route::get('explore/{category?}',[exploreController::class, 'index']);
Route::get('item/{id}',[exploreController::class, 'show']);
Route::get('explore-filter',[exploreController::class, 'exploreFilter']);
Route::get('loadexplorefilter/{category}',[exploreController::class, 'loadMoreFilter']);