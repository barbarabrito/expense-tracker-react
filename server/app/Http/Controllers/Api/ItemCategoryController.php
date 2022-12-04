<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ItemCategory;

class ItemCategoryController extends Controller
{
    public function categories()
    {
        $categories = ItemCategory::all();
        return response()->json($categories);
    }
}
