import { Item } from "../Item/Item";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Button } from "../Button/Button";
import { Count } from "../Count/Count";
export const ItemDetail = (detail) => {
  const { agregarAlCarrito } = useCartContext();
  const handleAdd = (quantity) => {
    agregarAlCarrito({ ...detail, quantity });
  };

  return (
    <div>
      <Item {...detail}>
        <Count btnText={"Agregar al carrito"} onConfirm={handleAdd}></Count>
      </Item>
    </div>
  );
};
