<?php

namespace App\Http\Controllers;

use App\Models\nft_file;
use Illuminate\Http\Request;

class nftController extends Controller
{
    public function index()
    {
        $nftFiles = nft_file::orderBy('created_at', 'desc')->paginate(15);

        return view('welcome', compact('nftFiles'));
        // return view('nft.createdFile', compact('nftFiles'));

    }

    public function create()
    {
        return view('create');
    }

    public function store(Request $request)
    {
        // dd('dd');
        $request->validate([
            'file' => 'required|max:30000',
            'royalties' => 'required|integer',
        ]);
        $fileName = $this->uploadNft($request->file);
        $fileUpload = new nft_file;
        $fileUpload->file = $fileName;
        $fileUpload->name = $request->name;
        $fileUpload->description = $request->description;
        $fileUpload->royalties = $request->royalties;
        $fileUpload->category = $request->category;
        $fileUpload->dimension = $request->dimension;
        $fileUpload->length =  $request->length;
        $putOnSale = $request->type;
        if ($putOnSale == 1) {
            $fileUpload->price = 0;
        } else if ($putOnSale == 2) {
            $fileUpload->price = 1;
        } else if ($putOnSale == 3) {
            $fileUpload->putOnSale = $putOnSale;
            $fileUpload->price = $request->price;
        }
        $upload = $fileUpload->save();
        if ($upload) {
            return back()
                ->with('success', 'You have successfully upload file.')
                ->with('file', $fileName);
        } else {
            return back()
                ->with('error', 'Error in uploading file.');
        }
    }

    public function uploadNft($file){
        $fileName =  time() . $file->getClientOriginalName();
        $file_path = 'nft/';
        $file->move($file_path, $fileName);
        return $fileName;
    }
}
