import React from 'react';
import {formatMoney} from "../helpers/index.js";
import useCoffee from "../hooks/useCoffee.js";

function Product({product, buttonAdd = false, buttonAvailable = false}) {

    const {name, price, image} = product;
    const {handleClickModal, handleSetProduct, handleClickProductSoldOut} = useCoffee();

    return (
        <div className={"border p-3 shadow bg-white"}>
            <img src={`/img/${image}.jpg`} alt={`imagen ${name}`} className={"w-full"}/>
            <div className={"p-5"}>
                <h3 className={"text-2xl font-bold text-center"}>{name}</h3>
                <p className={"mt-5 font-black text-4xl text-amber-500 text-center"}>{formatMoney(price)}</p>
                {buttonAdd && (
                    <button type={"button"} className={"bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"} onClick={() => {handleClickModal(); handleSetProduct(product)}}>
                        Add
                    </button>
                    )}
                {buttonAvailable && (
                    <button type={"button"} className={"bg-green-600 hover:bg-green-800 text-white w-full mt-5 p-3 uppercase font-bold"} onClick={() => handleClickProductSoldOut(product.id)}>
                        Sold out
                    </button>
                )}
            </div>
        </div>
    );
}

export default Product;