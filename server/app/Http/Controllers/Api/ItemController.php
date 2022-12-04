<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function store(Request $request)
    {
        $this->validate($request, [
            'date' => ['required'],
            'title' => ['required'],
            'value' => ['required']
        ]);

        $item = Item::create([
            'date' => $request->input('date'),
            'title' => $request->input('title'),
            'value' => $request->input('value'),
            'user_id' => $request->input('user_id'),
            'item_category_id' => $request->input('item_category_id'),
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Item created.',
            'data' => $item
        ],201);
    }
}
