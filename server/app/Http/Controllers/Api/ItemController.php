<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function store(Request $request)
    {
        try {

            $item = $this->validate($request, [
                'date' => 'required|string',
                'title' => 'required|string',
                'value' => 'required',
                'user_id' => 'required',
                'item_category_id' => 'required'
            ]);

            Item::create($item);

            return response()->json([
                'status' => true,
                'message' => 'Item created.',
                'data' => $item
            ], 201);

        }catch (\Exception $exception){
            return response()->json($exception);
        }

    }

    public function destroy($id)
    {
        Item::findOrFail($id)->delete();

        return response()->json([
            'status' => true,
            'message' => 'Item deleted.',
        ],200);
    }

    public function update(Request $request)
    {
        Item::findOrfail($request->id)->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Item updated.'
        ],200);
    }
}
