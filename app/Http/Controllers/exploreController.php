<?php

namespace App\Http\Controllers;

use App\Models\nft_file;
use Illuminate\Http\Request;

class exploreController extends Controller
{
    public function index($category = '')
    {
        if (!empty($category)) {
            $nftFiles = nft_file::where('category', $category)->orderBy('created_at', 'desc')->limit(8)->get();
            return response()->json($nftFiles);
        } else {
            $nftFiles = nft_file::orderBy('created_at', 'desc')->paginate(8);
            return view('explore', compact('nftFiles'));
        }
    }
    public function exploreFilter()
    {
        $nftFiles = nft_file::orderBy('created_at', 'desc')->limit(8)->get();
        return response()->json($nftFiles);
    }
    public function show($id)
    {
        $nftFile = nft_file::find($id);
        return view('item', compact('nftFile'));
    }

    public function loadMoreFilter(Request $request, $category)
    {
        $id = $request->id;
        if ($category == 'all') {
            $post_data = nft_file::where('id', '<', $id)->orderBy('created_at', 'DESC')->limit(8)->get();
            return response()->json($post_data);
        } else {
            $post_data = nft_file::where('category', $category)->where('id', '<', $id)->orderBy('created_at', 'DESC')->limit(8)->get();
            return response()->json($post_data);
        }
    }
}
