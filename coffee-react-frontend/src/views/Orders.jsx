import React from 'react';
import useSWR from "swr";
import clientAxios from "../config/axios.js";


function Orders(props) {

    const token = localStorage.getItem('AUTH_TOKEN');

    const fetcher = () => clientAxios('/api/orders', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const {data, error, isLoading} = useSWR('/api/orders', fetcher);

    console.log(data);
    console.log(error);
    console.log(isLoading);


    return (
        <div className={"w-3/5 px-1"}>
            <h1 className={"text-4xl font-black text-center"}>Orders</h1>
            <p className={"text-2xl my-5 text-center"}>Manage the orders right here.</p>
        </div>
    );
}

export default Orders;
