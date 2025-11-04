import { useState } from "react";
import { ProductFormUi } from "../ProductFormUi/ProductFormUi";
import { validateProduct } from "../../../utils/validateProducts";
import { createProduct } from "../../../services/products";

export const ProductFormContainer = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (file) => {
    setProduct((prev) => ({ ...prev, file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateProduct(product, false);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      const productToSend = { ...product };
      delete productToSend.file;

      const data = await createProduct(productToSend);
      console.log("Producto creado:", data);

      setProduct({
        name: "",
        price: "",
        category: "",
        description: "",
        file: null,
      });
      setErrors({});
    } catch (error) {
      console.error("Error al crear el producto:", error);
      setErrors({ general: "No se pudo crear el producto" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUi
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
};
