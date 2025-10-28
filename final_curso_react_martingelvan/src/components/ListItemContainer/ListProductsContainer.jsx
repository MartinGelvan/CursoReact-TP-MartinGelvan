import { useEffect, useState } from "react";
import { ItemList } from "../ListItem/ItemList";

export const ListProductsContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section>
      <ItemList products={products} />
    </section>
  );
};
