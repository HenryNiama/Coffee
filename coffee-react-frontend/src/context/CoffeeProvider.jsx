import React from 'react';
import {createContext} from 'react';



const CoffeeContext = createContext();

const CoffeeProvider = ({children}) => {

    const autenticado = true;

    return (
        <CoffeeContext.Provider
            value={{
                autenticado
            }}>
            {children}
        </CoffeeContext.Provider>
    );
};

export {CoffeeProvider};
export default CoffeeContext;
