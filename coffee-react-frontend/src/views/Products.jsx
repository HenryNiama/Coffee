import React from 'react';
import useSWR from "swr";
import clientAxios from "../config/axios.js";
import Product from "../components/Product.jsx";


function Products(props) {

    const token = localStorage.getItem('AUTH_TOKEN');

    const fetcher = () => clientAxios('/api/products', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(data => data.data);

    const {data, error, isLoading} = useSWR('/api/products', fetcher);

    if (isLoading) return (<p>Loading...</p>);

    console.log(data.data);

    return (
        <div>
            <div className={"w-3/5 px-1"}>
                <h1 className={"text-4xl font-black text-center"}>Products</h1>
                <p className={"text-2xl my-5 text-center"}>Available products</p>
            </div>
            <div className={"grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"}>
                {data.data.map((product) => (
                    <Product key={product.id} product={product} buttonAvailable={true}/>
                ))
                }
                )}
            </div>
        </div>

    );
}

export default Products;