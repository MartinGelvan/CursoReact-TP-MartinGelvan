import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const ProductDetailContainer = () => {
  const [detail, setDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch("https://6900bc50ff8d792314bb38db.mockapi.io/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const productDetail = data.find((item) => item.id === id);
        setDetail(productDetail);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [id]);

  return (
    <section>
      {Object.keys(detail).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ItemDetail {...detail} />
      )}
    </section>
  );
};
