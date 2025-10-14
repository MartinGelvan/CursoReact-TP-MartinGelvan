import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const existeEnCarrito = (id) => {
    const exist = cart.some((item) => item.id === id);
    return exist;
  };

  const agregarAlCarrito = (item) => {
    if (existeEnCarrito(item.id)) {
      alert("El producto ya fue agregado al carrito");
      return;
    }
    setCart([...cart, item]);
    alert("Producto agregado al carrito");
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    if (cart.length) {
      return cart.length;
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, agregarAlCarrito, vaciarCarrito, getTotalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
