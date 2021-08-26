<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class nft_file extends Model
{
    use HasFactory;
    protected $fillable = [
        'file','unLockable', 'collection','name','description',
        'royalties','category', 'dimension','length','putOnSale','price'
    ];
}
