import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <h1 className="text-4xl font-black">Sign In</h1>
            <p className="text-lg text-gray-600"> Write your credentials. </p>

            <div className="bg-white shadow-md rounded-md mt-6 px-5 py-6">
                <form action="">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email: </label>
                        <input type="email" name="email" id="email" placeholder="Your Email"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password: </label>
                        <input type="password" name="password" id="password" placeholder="Your Password"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <input type="submit" value="Log In" className={"bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 cursor-pointer"} />
                </form>
            </div>

            <div className="flex justify-center mt-5">
                <Link to="#" className="text-gray-700 hover:text-gray-900">Forgot your password?</Link>
                <Link to="/auth/register" className="text-gray-700 hover:text-gray-900 ml-5">Create an Account</Link>
            </div>

        </>
    );
}

export default Login;