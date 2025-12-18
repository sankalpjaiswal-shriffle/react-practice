const productApi = import.meta.env.VITE_PRODUCT_API;

export const fetchProduct = async () => {
  const res = await fetch(productApi);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data.products;
};

export const fetchProductById = async (productId) => {
  const res = await fetch(productApi + `/${productId}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data;
};
