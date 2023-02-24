import React from 'react';
import {createContext, useState, useEffect} from 'react';
// import {categories as categoriesDB} from "../data/categories.js";
import {toast} from "react-toastify";
import clientAxios from "../config/axios.js";

const CoffeeContext = createContext();

const CoffeeProvider = ({children}) => {

    const [categories, setCategories] = useState([]);
    let [currentCategory, setCurrentCategory] = useState({});

    const handleClickCategory = (id) => {
        const category = categories.filter(category => category.id === id)[0];
        setCurrentCategory(category);
        console.log(category);
    };

    const [modal, setModal] = useState(false);

    const handleClickModal = () => {
        setModal(!modal);
        console.log(modal);
    };

    const [product, setProduct] = useState({});

    const handleSetProduct = product => {setProduct(product)};

    const[order, setOrder] = useState([]);

    const handleAddOrder = ({category_id, ...product}) => {
        if(order.some(order => order.id === product.id)){
            const productUpdated = order.map(orderState => orderState.id === product.id ? product : orderState);
            setOrder(productUpdated);
            toast.success('Product updated');
        }else{
            setOrder([...order, product]);
            toast.success('Product added to cart');
        }
    }

    const handleEditQuantity = (id) => {
        const productUpdated = order.filter(product => product.id === id)[0];
        setProduct(productUpdated);
        setModal(!modal);
    }

    const handleDeleteProduct = (id) => {
        const productUpdated = order.filter(product => product.id !== id);
        setOrder(productUpdated);
        toast.success('Product deleted from cart');
    }

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = order.reduce((acc, product) => acc + product.price * product.quantity, 0);
        setTotal(newTotal);
    }, [order]);

    const getCategories = async () =>{
        const token = localStorage.getItem('AUTH_TOKEN');
        try {
            // const {data} = await axios.get(`${}/api/categories`);
            const {data} = await clientAxios.get('/api/categories', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
                }
            });
            setCategories(data.data);
            setCurrentCategory(data.data[0]);
            // console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCategories().then(r => console.log(r));
    }, []);

    const handleSubmitNewOrder = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');
        try {
            const {data} = await clientAxios.post('/api/orders', {
                total,
                products: order.map(product => { return {product_id: product.id, quantity: product.quantity } })

            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            toast.success(data.message);

            setTimeout(() => {
                setOrder([]);
            }, 1500);

        } catch (error) {
            console.log(error);
        }
    }


    const handleClickProductSoldOut = async id => {
        const token = localStorage.getItem('AUTH_TOKEN');
        try {
            await clientAxios.put(`/api/products/${id}`, null,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        }catch (error){
            console.log(error);
        }
    };


    return (
        <CoffeeContext.Provider
            value={{
                categories,
                currentCategory,
                handleClickCategory,
                modal,
                handleClickModal,
                product,
                handleSetProduct,
                order,
                handleAddOrder,
                handleEditQuantity,
                handleDeleteProduct,
                total,
                handleSubmitNewOrder,
                handleClickProductSoldOut
            }}>
            {children}
        </CoffeeContext.Provider>
    );
};

export {
    CoffeeProvider, CoffeeContext
};

