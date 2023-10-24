"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState(null);
  const valueBase = 125;

  return (
    <CartContext.Provider value={{ cart, setCart, count, setCount, valueBase }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
