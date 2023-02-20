import React from 'react';
import {createContext, useState} from 'react';
import {categories as categoriesDB} from "../data/categories.js";


const CoffeeContext = createContext();

const CoffeeProvider = ({children}) => {

    const [categories, setCategories] = useState(categoriesDB);
    let [currentCategory, setCurrentCategory] = useState(categories[0]);

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

    const handleAddOrder = ({categoria_id, imagen, ...product}) => {
        if(order.some(order => order.id === product.id)){
            const productUpdated = order.map(orderState => orderState.id === product.id ? product : orderState);
            setOrder(productUpdated);
        }else{
            setOrder([...order, product]);
        }
    }

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
                handleAddOrder
            }}>
            {children}
        </CoffeeContext.Provider>
    );
};

export {
    CoffeeProvider, CoffeeContext
};

