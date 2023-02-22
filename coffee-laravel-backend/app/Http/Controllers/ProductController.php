<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): ProductCollection
    {
        return new ProductCollection(Product::where('active', true)->orderBy('id', 'desc')->get());
    }

    /**
     * Store a newly created resource in storage.
     */
//    public function store(Request $request): Response
//    {
//        //
//    }

    /**
     * Display the specified resource.
     */
//    public function show(Product $product): Response
//    {
//
//    }

    /**
     * Update the specified resource in storage.
     */
//    public function update(Request $request, Product $product): Response
//    {
//        //
//    }

    /**
     * Remove the specified resource from storage.
     */
//    public function destroy(Product $product): Response
//    {
//        //
//    }
}
