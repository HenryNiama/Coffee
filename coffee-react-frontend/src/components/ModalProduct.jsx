import React from 'react';
import useCoffee from "../hooks/useCoffee.js";
import {formatMoney} from "../helpers/index.js";
import {useState} from "react";


function ModalProduct() {

    const {product, handleClickModal, handleAddOrder} = useCoffee();
    const [quantity, setQuantity] = useState(1);

    return (
        <div className={"md:flex  gap-10"}>
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

                <p className={"text-lg mt-5"}>Choose the quantity:</p>
                <div className={"flex gap-4 mt-5"}>
                    <div className={"flex gap-4"}>
                        <button type="button" className={"bg-amber-600 hover:bg-amber-800 px-5 py-2 text-white font-bold uppercase rounded"} onClick={() => {if(quantity <=1 ) return; setQuantity(quantity - 1)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <p className={"text-2xl"}>{quantity}</p>
                        <button type="button" className={"bg-amber-600 hover:bg-amber-800 px-5 py-2 text-white font-bold uppercase rounded"} onClick={() => setQuantity(quantity + 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                </div>


                <button type="button" className={"bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded "} onClick={() => handleAddOrder({...product, quantity})}>
                    Add to order
                </button>
            </div>
        </div>
    );
}

export default ModalProduct;