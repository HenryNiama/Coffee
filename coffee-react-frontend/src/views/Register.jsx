import React from 'react';
import { Link } from 'react-router-dom';
import {createRef, useState} from "react";
import Alert from "../components/Alert.jsx";
import {useAuth} from "../hooks/useAuth.js";

function Register() {

    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const password_confirmationRef = createRef();

    const [errors, setErrors] = useState([]);

    const {register} = useAuth({middleware: 'guest', url: '/'});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: password_confirmationRef.current.value
        }
        console.log(data);

        await register(data, setErrors);
    }

    return (
        <>
            <h1 className="text-4xl font-black">Create your Account</h1>
            <p className="text-lg text-gray-600"> Fill the form.</p>

            <div className="bg-white shadow-md rounded-md mt-6 px-5 py-6">
                <form action="" onSubmit={handleSubmit} noValidate>

                    {errors ? errors.map((error, i) => <Alert key={i}>{error}</Alert>) : null}

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name: </label>
                        <input type="text" name="name" id="name" placeholder="Your Name"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               ref={nameRef}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email: </label>
                        <input type="email" name="email" id="email" placeholder="Your Email"
                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                 ref={emailRef}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password: </label>
                        <input type="password" name="password" id="password" placeholder="Your Password"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                ref={passwordRef}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password_confirmation" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password: </label>
                        <input type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirm Password"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               ref={password_confirmationRef}
                        />
                    </div>
                    <input type="submit" value="Create Account" className={"bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 cursor-pointer"} />
                </form>
            </div>

            <div className="flex justify-center mt-5">
                <Link to="/auth/login" className="text-gray-700 hover:text-gray-900">Already have an account?</Link>
            </div>
        </>

    );
}

export default Register;