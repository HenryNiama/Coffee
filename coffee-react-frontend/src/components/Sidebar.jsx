import React from 'react';
import useCoffee from "../hooks/useCoffee.js";
import Category from "./Category.jsx";
import {useAuth} from "../hooks/useAuth.js";

function Sidebar() {

    const {categories} = useCoffee();
    const {logout, user} = useAuth({middleware: 'auth'});

    return (
        <aside className={"md:w-72"}>
            <div className={"p-4 flex items-center justify-center"}>
                <img src="../../public/img/logo.svg" alt="Image Logo" className={"w-40"}/>
            </div>

            <p className={"my-1 text-xl text-center"}>Hola, {user?.name}</p>

            <div className={"mt-10"}>
                {categories.map(category => (
                    <Category
                        key={category.id}
                        category={category}
                    />
                )) }
            </div>

            <div className={"mt-10 px-5"}>
                <button type={"button"} className={"text-center bg-red-500 w-full p-3 font-bold text-white hover:bg-red-700"} onClick={logout}>
                    Cancel Order
                </button>
                <p className={"text-center"}>Developed by <span className={"font-bold"}>Henry Niama </span> <br/> {new Date().getFullYear() }</p>
            </div>
        </aside>
    );
}

export default Sidebar;