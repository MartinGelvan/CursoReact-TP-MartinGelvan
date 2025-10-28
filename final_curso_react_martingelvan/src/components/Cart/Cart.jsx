import { useCartContext } from "../../context/CartContext/useCartContext";
import { Button } from "../Button/Button";
import { Item } from "../Item/Item";
import "./Cart.css";

export const Cart = () => {
  const { cart, vaciarCarrito, deleteItem, total, checkout } = useCartContext();

  return (
    <section className="item-list-container">
      <h2>Carrito de Compras</h2>

      {cart.length ? (
        cart.map((prod) => (
          <Item key={prod.id} {...prod}>
            <span>Cantidad : {prod.quantity}</span>
            <Button
              text={"Eliminar"}
              color="red"
              onClick={() => {
                deleteItem(prod.id);
              }}
            >
              Eliminar
            </Button>
          </Item>
        ))
      ) : (
        <p>Tu Carrito esta Vacio</p>
      )}

      {cart.length ? (
        <div className=" btn-container">
          <div>Total a pagar: ${total()}</div>
          <Button text="Finalizar Compra" color="blue" onClick={checkout}>
            Finalizar Compra
          </Button>
          <Button text="Vaciar Carrito" color="red" onClick={vaciarCarrito}>
            Vaciar Carrito
          </Button>
        </div>
      ) : (
        <p>No hay nada</p>
      )}
    </section>
  );
};
