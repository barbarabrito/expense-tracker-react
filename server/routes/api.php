<?php

use App\Http\Controllers\Api\ItemCategoryController;
use App\Http\Controllers\Api\ItemController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;

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

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::prefix('users')->group(function() {
    Route::get('/all', [UserController::class, 'users']);
    Route::get('/{id}/items', [UserController::class, 'items']);
});

Route::prefix('categories')->group(function() {
    Route::get('/', [ItemCategoryController::class, 'categories']);
});

Route::prefix('items')->group(function(){
    Route::post('/', [ItemController::class, 'store']);
    Route::delete('/{id}', [ItemController::class, 'destroy']);
    Route::patch('/update/{id}', [ItemController::class, 'update']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
