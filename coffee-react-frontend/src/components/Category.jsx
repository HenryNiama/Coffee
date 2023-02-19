import React from 'react';
import useCoffee from "../hooks/useCoffee.js";

function Category({category}) {

    const {id, icono, nombre} = category;
    const {handleClickCategory} = useCoffee();

    return (
        <div className={"flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer"}>
            <img src={`/img/icono_${icono}.svg`} alt="Imagen Icono" className={"w-12"}/>
            <button type={"button"} className={"text-lg font-bold cursor-pointer truncate"} onClick={() => handleClickCategory(id)}>
                {nombre}
            </button>
        </div>
    );
}

export default Category;