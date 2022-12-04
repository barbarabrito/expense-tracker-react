<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = ['date','title', 'value', 'user_id', 'item_category_id'];

    public function itemCategory()
    {
        return $this->belongsTo(ItemCategory::class);
    }
}
