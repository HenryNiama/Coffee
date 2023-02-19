import React from 'react';

function Register() {
    return (
        <>
            <h1 className="text-4xl font-black">Create your Account</h1>
            <p>Fill the form</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form action="">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name: </label>
                        <input type="text" name="name" id="name" placeholder="Your Name"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </form>
            </div>
        </>

    );
}

export default Register;