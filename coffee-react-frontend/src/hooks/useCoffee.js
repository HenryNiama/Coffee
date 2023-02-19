import {useContext} from "react";
import {CoffeeContext} from "../context/CoffeeProvider.jsx";

const useCoffee = () => {
  return useContext(CoffeeContext);
}

export default useCoffee;