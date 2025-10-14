import { useCartContext } from "../../context/CartContext/useCartContext";
import "../../css/header.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const Header = () => {
  const { getTotalItems } = useCartContext();
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/category/juegos"}>Juegos</Link>
          </li>

          <li>
            <Link to={"/category/dlc"}>DLC</Link>
          </li>
          <li>
            <Link to={"/carrito"}>Carrito</Link>
            <span>{getTotalItems() > 0 && <span>{getTotalItems()}</span>}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
