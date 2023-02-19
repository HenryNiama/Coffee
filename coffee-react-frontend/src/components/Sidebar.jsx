import React from 'react';
import useCoffee from "../hooks/useCoffee.js";
import Category from "./Category.jsx";


function Sidebar() {

    const {categories} = useCoffee();

    return (
        <aside className={"md:w-72"}>
            <div className={"p-4"}>
                <img src="../../public/img/logo.svg" alt="Image Logo" className={"w-40"}/>
            </div>
            <div className={"mt-10"}>
                {categories.map(category => (
                    <Category
                        key={category.id}
                        category={category}
                    />
                )) }
            </div>
            <div className={"my-5 px-5"}>
                <button type={"button"} className={"text-center bg-red-500 w-full p-3 font-bold text-white hover:bg-red-700"}>
                    Cancel Order
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;