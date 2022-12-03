<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Item;
use App\Models\User;

class UserController extends Controller
{
    public function users()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function items($id)
    {
        $items = Item::with('itemCategory')
            ->whereHas('itemCategory')
            ->where('user_id', $id)
            ->get();
        return response()->json($items);
    }
    

}
