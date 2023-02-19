import React from 'react';
import {products} from "../data/products";
import Product from "../components/Product.jsx";
import useCoffee from "../hooks/useCoffee.js";

function Inicio() {

    const {currentCategory} = useCoffee();

    return (
        <>
            <div className={"fixed top-0 bg-white w-3/5 px-1"}>
                <h1 className={"text-4xl font-black"}>{currentCategory.nombre}</h1>
                <p className={"text-2xl my-5"}>Choose and customize your order.</p>
            </div>


            <div className={"grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10"}>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}

export default Inicio;