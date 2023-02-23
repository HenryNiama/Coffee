<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function register(RegisterRequest $request)
    {
        $request->validated();

        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $user->save();

        return response()->json([
            'message' => 'Successfully created user!',
            'token' => $user->createToken('my-app-token')->plainTextToken,
            'user' => $user
        ], 201);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        if (!Auth::attempt($credentials))
            return response()->json([
                'errors' => ['Email or password is incorrect']
            ], 422);

        $user = Auth::user();

        return response()->json([
            'message' => 'Successfully logged user!',
            'token' => $user->createToken('my-app-token')->plainTextToken,
            'user' => $user
        ], 201);


    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
}
