import React from 'react';
import {Link} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.js";


function AdminSidebar(props) {

    const {logout} = useAuth({middleware: 'auth'});

    return (
        <aside className={"md:w-72 h-screen"}>

            <div className={"p-4 flex items-center justify-center"}>
                <img src="../../public/img/logo.svg" alt="Image Logo" className={"w-40"}/>
            </div>


            <div className={"bg-gray-800 h-20 flex items-center justify-center"}>
                <h1 className={"text-white text-2xl"}>Admin</h1>
            </div>
            <nav className={"mt-10"}>
                <ul>
                    <li>
                        <a href="#" className={"flex items-center text-gray-600 py-2 px-6 hover:bg-gray-200"}>
                            <i className={"fas fa-tachometer-alt mr-3"}></i>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <Link to={"/admin"} href="#" className={"flex items-center text-gray-600 py-2 px-6 hover:bg-gray-200"}>
                            <i className={"fas fa-tachometer-alt mr-3"}></i>
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link to={"/admin/products"} href="#" className={"flex items-center text-gray-600 py-2 px-6 hover:bg-gray-200"}>
                            <i className={"fas fa-tachometer-alt mr-3"}></i>
                            Products
                        </Link>
                    </li>
                    <li>
                        <a href="#" className={"flex items-center text-gray-600 py-2 px-6 hover:bg-gray-200"}>
                            <i className={"fas fa-tachometer-alt mr-3"}></i>
                            Categories
                        </a>
                    </li>
                </ul>
            </nav>

            <div className={"mt-10 px-5"}>
                <button type={"button"} className={"text-center bg-red-500 w-full p-3 font-bold text-white hover:bg-red-700"} onClick={logout}>
                    Close Session
                </button>
            </div>


        </aside>
    );
}

export default AdminSidebar;