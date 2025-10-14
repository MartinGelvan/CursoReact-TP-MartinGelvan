import { Item } from "../Item/Item";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Button } from "../Button/Button";
export const ItemDetail = (detail) => {
  const { agregarAlCarrito } = useCartContext();
  return (
    <div>
      <Item {...detail} />
      <Button
        color="red"
        text={"Agregar al Carrito"}
        withBoton="200px"
        onClick={() => agregarAlCarrito(detail)}
      ></Button>
    </div>
  );
};
