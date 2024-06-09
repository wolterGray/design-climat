import React from "react";
import {createContext} from "react";

export const MyContext = createContext();

export const MyContextProvider = ({children}) => {
  const [cartProduct, setCartProduct] = React.useState([]);
  const value = {cartProduct, setCartProduct};

  React.useEffect(() => {
    const storedCartProduct = localStorage.getItem("cartProduct");
    if (storedCartProduct) {
      try {
        setCartProduct(JSON.parse(storedCartProduct));
      } catch (e) {
        console.error("Failed to parse cartProduct from localStorage:", e);
        localStorage.removeItem("cartProduct");
      }
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
  }, [cartProduct]);

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
