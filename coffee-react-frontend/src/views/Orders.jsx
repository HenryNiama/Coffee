import React from 'react';
import useSWR from "swr";
import clientAxios from "../config/axios.js";
import {formatMoney} from "../helpers/index.js";

function Orders(props) {

    const token = localStorage.getItem('AUTH_TOKEN');

    const fetcher = () => clientAxios('/api/orders', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const {data, error, isLoading} = useSWR('/api/orders', fetcher);

    console.log(data?.data);
    console.log(error);
    console.log(isLoading);

    if (isLoading) return (<p>Loading...</p>);

    return (

        <div>
            <div className={"w-3/5 px-1"}>
                <h1 className={"text-4xl font-black text-center"}>Orders</h1>
                <p className={"text-2xl my-5 text-center"}>Manage the orders right here.</p>
            </div>

            <div>
                 <table className={"w-full text-center"}>
                     <thead>
                 <tr>
                         <th className={"border px-4 py-2"}>ID</th>
                         <th className={"border px-4 py-2"}>Customer</th>
                         <th className={"border px-4 py-2"}>Total</th>
                         <th className={"border px-4 py-2"}>Status</th>
                         <th className={"border px-4 py-2"}>Date </th>
                         <th className={"border px-4 py-2"}>Actions</th>
                     </tr>
                   </thead>
                       <tbody>
                  {data?.data.data.map((order) => (
                        <tr key={order.id}>
                            <td className={"border px-4 py-2"}>{order.id}</td>
                            <td className={"border px-4 py-2"}>{order.user.name}</td>
                            <td className={"border px-4 py-2"}>{formatMoney(order.total)}</td>
                            <td className={"border px-4 py-2"}>{order.status}</td>
                            <td className={"border px-4 py-2"}>{order.created_at}</td>
                            <td className={"border px-4 py-2"}>
                                <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>View</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>






    );
}

export default Orders;
