import React from 'react';
import useCoffee from "../hooks/useCoffee.js";
import {formatMoney} from "../helpers/index.js";


function ModalProduct() {

    const {product, handleClickModal} = useCoffee();

    return (
        <div className={"md:flex gap-10"}>
            <div className={"md:w-1/3"}>
                <img src={`/img/${product.imagen}.jpg`} alt={`Imagen Producto ${product.nombre}`}/>
            </div>
            <div className={"md:w-2/3"}>
                <div className={"flex justify-end"}>
                    <button onClick={handleClickModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
                <h1 className={"text-3xl font-bold"}>{product.nombre}</h1>
                <p className={"text-5xl font-black text-amber-500 mt-5"}>{formatMoney(product.precio)}</p>
                <button type="button" className={"bg-amber-600 hover:bg-amber-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"}>
                    Add to order
                </button>
            </div>
        </div>
    );
}

export default ModalProduct;