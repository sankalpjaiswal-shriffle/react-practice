import { productApi, productApiById } from "../utils/productAPI";

export const fetchProduct = async () => {
  const res = await fetch(productApi);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();

  return data.products;
};

export const fetchProductById = async (productId) => {
  const res = await fetch(productApiById + `/${productId}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data;
};
