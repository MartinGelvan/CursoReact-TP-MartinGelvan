const BASE_URL = "https://6900bc50ff8d792314bb38db.mockapi.io/products";

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("No se pudo crear el producto");
  }

  const result = await res.json();
  return result;
};

export const getProducts = async () => {
  const res = await fetch(BASE_URL, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("No se pudo obtener los productos");
  }

  const result = await res.json();
  return result;
};
