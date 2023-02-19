import React from 'react';
import {categories} from "../data/categories.js";

function Sidebar() {
    return (
        <aside className={"md:w-72"}>
            <div className={"p-4"}>
                <img src="../../public/img/logo.svg" alt="" className={"w-40"}/>
            </div>
            <div className={"mt-10"}>
                {categories.map(category => (
                    <p>{category.nombre}</p>
                )) }
            </div>
        </aside>
    );
}

export default Sidebar;