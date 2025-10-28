import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../components/ListItem/ItemList";

export const CategoryContainer = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => (res.ok ? res.json() : Promise.reject("Error")))
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      (product) => product.category.toLowerCase() === categoryName.toLowerCase()
    );
    setFilteredProducts(filtered);
  }, [products, categoryName]);

  return (
    <section>
      <h2>Productos en: {categoryName}</h2>
      <ItemList products={filteredProducts} />
    </section>
  );
};
