import { useEffect, useState } from "react";
import { ItemList } from "../ListItem/ItemList";
import { useParams } from "react-router-dom";

export const ListProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    fetch("https://6900bc50ff8d792314bb38db.mockapi.io/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const filtered = categoryName
          ? data.filter(
              (product) =>
                product.category.toLowerCase() === categoryName.toLowerCase()
            )
          : data;
        setProducts(filtered);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [categoryName]);

  return (
    <section>
      <ItemList products={products} />
    </section>
  );
};
