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
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + item.quantity };
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
      alert("Agregado al carrito");
      alert("El producto ya fue agregado al carrito");
      return;
    } else {
      setCart([...cart, item]);
      alert("Producto agregado al carrito");
    }
  };

  const deleteItem = (id) => {
    const filtered = cart.filter((p) => p.id !== id);
    setCart(filtered);
    alert("Producto eliminado");
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
    return totalItems;
    /*
    if (cart.length) {
      return cart.length;
    }*/
  };

  const total = () => {
    const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
    return Math.round((total * 100) / 100);
  };

  const checkout = () => {
    const ok = confirm("¿Seguro que quiere finalizar la compra?");

    if (ok) {
      alert("COmpra finalizada");
      vaciarCarrito();
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        vaciarCarrito,
        getTotalItems,
        deleteItem,
        total,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
