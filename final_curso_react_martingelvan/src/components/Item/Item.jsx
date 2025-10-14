import { Link } from "react-router-dom";
import "../../css/item.css";
import { Button } from "../Button/Button";

export const Item = ({
  id,
  name,
  price,
  category,
  img,
  stock,
  description,
}) => {
  return (
    <div className="item-card">
      <h2>{name}</h2>
      <p className="price">Price: ${price}</p>
      <p className="category">Category: {category}</p>
      <img src={img} alt={name} />
      <p className="stock">Stock: {stock}</p>
      <p className="description">{description}</p>
    </div>
  );
};
