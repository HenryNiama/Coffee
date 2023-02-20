import React from 'react';
import useCoffee from "../hooks/useCoffee.js";
import SummaryProduct from "./SummaryProduct.jsx";
import {formatMoney} from "../helpers";

function Summary() {

    const {order, total} = useCoffee();

    const verifyOrder = () => order.length === 0;



    return (
        <aside className="w-72 h-screen  overflow-y-scroll p-5">
            <h1 className={"text-4xl font-black text-center"}>My order</h1>
            <p className={"text-lg my-5 text-center"}>Summary of your products.</p>
            <div className={"py-10"}>
                {order.length === 0 ? (
                    <p className={"text-lg text-center"}>No products found.</p>
                ) : (
                    order.map((product) => (
                        <SummaryProduct key={product.id} product={product} />
                    ))
                )}
            </div>

            <div className={"flex justify-between"}>
                <p className={"text-lg font-bold"}>Total</p>
                <p className={"text-lg font-bold"}>{formatMoney(total)}</p>
            </div>

            {/*<form action="">*/}
            {/*    <input type="text" placeholder="Name" className={"w-full py-3 mt-5 rounded-md border border-gray-300"}/>*/}
            {/*    <input type="text" placeholder="Phone" className={"w-full py-3 mt-5 rounded-md border border-gray-300"}/>*/}
            {/*    <input type="text" placeholder="Address" className={"w-full py-3 mt-5 rounded-md border border-gray-300"}/>*/}
            {/*</form>*/}

            <div className={"mt-5"}>
                <form action="">
                    <button type={"submit"} className={`${verifyOrder() ? 'bg-gray-400' : 'bg-gray-800'} text-white w-full py-3 mt-5 rounded-md font-bold`} disabled={verifyOrder()}>
                        Order
                    </button>
                </form>
            </div>



        </aside>
    );
}

export default Summary;