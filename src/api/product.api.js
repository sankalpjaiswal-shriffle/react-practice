const productApi = import.meta.env.VITE_PRODUCT_API;

export const fetchProduct = async ({ queryKey }) => {
  const [, limit, skip] = queryKey;
  const res = await fetch(productApi + `/products?limit=${limit}&skip=${skip}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data.products;
};

export const fetchProductById = async (productId) => {
  const res = await fetch(productApi + `/products/${productId}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data;
};
