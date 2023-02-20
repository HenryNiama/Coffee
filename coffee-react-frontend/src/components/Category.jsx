import React from 'react';
import useCoffee from "../hooks/useCoffee.js";

function Category({category}) {

    const {id, icono, nombre} = category;
    const {handleClickCategory, currentCategory} = useCoffee();

    return (
        <div onClick={() => handleClickCategory(id)} className={`${currentCategory.id === id ? "bg-amber-400" : "bg-white"} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer truncate`}>
            <img src={`/img/icono_${icono}.svg`} alt="Imagen Icono" className={"w-12"}/>
            <p className={"text-lg font-bold "} >
                {nombre}
            </p>
        </div>
    );
}

export default Category;