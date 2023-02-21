<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryCollection;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): CategoryCollection
    {
        //return response()->json(['categories' => Category::all()]);
        return new CategoryCollection(Category::all());
    }
}
