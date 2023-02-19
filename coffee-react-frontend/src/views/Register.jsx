import React from 'react';

function Register() {
    return (
        <>
            <h1 className="text-4xl font-black">Create your Account</h1>
            <p className="text-lg text-gray-600"> Fill the form.</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form action="">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name: </label>
                        <input type="text" name="name" id="name" placeholder="Your Name"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
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
                    <div className="mb-4">
                        <label htmlFor="password_confirmation" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password: </label>
                        <input type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirm Password"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <input type="submit" value="Create Account" className={"bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 cursor-pointer"} />
                </form>
            </div>
        </>

    );
}

export default Register;