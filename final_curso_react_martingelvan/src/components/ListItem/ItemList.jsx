import { Button } from "../Button/Button";
import { Item } from "../Item/Item";
import "../../css/itemList.css";
import { Link } from "react-router-dom";

export const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.length ? (
        products.map((product) => (
          <div key={product.id} className="item">
            <Link to={`/producto/${product.id}`} key={products.id}>
              <Item {...product} />
            </Link>
          </div>
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};
