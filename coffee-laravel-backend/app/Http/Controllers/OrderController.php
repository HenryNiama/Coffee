<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): array
    {
        $order = new Order();

        $order->user_id = Auth::id();
        $order->total = $request->total;

        $order->save();

//        //save the created_at and updated_at timestamp in the pivot table
        $order->products()->attach($request->products, ['created_at' => now(), 'updated_at' => now()]);

        return [
            'message' => 'Order created successfully',
        ];
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order): Response
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order): Response
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order): Response
    {
        //
    }
}
