import React from 'react';
// import {products as data} from "../data/products";
import Product from "../components/Product.jsx";
import useCoffee from "../hooks/useCoffee.js";
import useSWR from "swr";
import clientAxios from "../config/axios.js";

function Inicio() {

    const {currentCategory} = useCoffee();

    // Consulta SWR
    const fetcher = () => clientAxios('/api/products').then(data => data.data);
    const { data, error, isLoading } = useSWR('/api/products', fetcher, {
        refreshInterval: 1000
    });

    if (isLoading) return <p>Loading...</p>;

    const productos = data.data.filter(product => product.category_id === currentCategory.id);


    return (
        <>
            <div className={"fixed top-0 bg-white w-3/5 px-1"}>
                <h1 className={"text-4xl font-black text-center"}>{currentCategory.name}</h1>
                <p className={"text-2xl my-5 text-center"}>Choose and customize your order.</p>
            </div>


            <div className={"grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10"}>
                {productos.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}

export default Inicio;