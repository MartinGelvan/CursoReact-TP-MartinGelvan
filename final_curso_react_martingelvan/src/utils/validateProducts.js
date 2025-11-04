export const validateProduct = (product, fileRequired = true) => {
  const errors = {};

  if (!product.name.trim()) {
    errors.name = "El nombre es obligatorio";
  }

  if (!product.price || product.price <= 0) {
    errors.price = "El precio debe ser mayor a 0";
  }

  if (fileRequired && !product.file) {
    errors.file = "Debes seleccionar una imagen";
  }

  if (!product.category.trim()) {
    errors.category = "La categoría es obligatoria";
  }

  return errors;
};
