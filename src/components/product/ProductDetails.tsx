import { useEffect, useState } from "react";
import { data, useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader";
import useFetch from "../../hooks/useFetch";
import { productApiById } from "../../utils/productAPI";
import Button from "../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../reducers/cartSlice";
import type { Product } from "../../types/Product";

type State = {
  cart: Product[];
};

export default function ProductDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: State) => state.cart);
  const { productID } = useParams<{ productID: string }>();
  const {
    data: product,
    isLoading,
    error,
  } = useFetch(productApiById + `/${productID}`);

  const isItemAdded = cart?.find((item) => item.id === product?.id) || null;

  function handleCart() {
    const { id, title, images, price } = product;
    dispatch(
      addItemToCart({
        id,
        title,
        images,
        price,
      })
    );
  }

  if (isLoading) return <Loader />;

  if (error)
    return <div className="flex items-center justify-center">{error}</div>;

  return (
    <div className="flex  items-center justify-center min-h-screen dark:text-white">
      <div className="flex flex-col p-2 m-2 text-wrap border-2 rounded-2xl gap-2 h-[50%] w-[50%]">
        <img
          className="w-2/4 h-2/4"
          src={product?.images[0]}
          title={product?.title}
        />
        <h2 className="text-2xl font-bold">{product?.title}</h2>
        <span className="text">Brand: {product?.brand}</span>
        <p className="text-gray-800 dark:text-gray-200">
          {product?.description}
        </p>
        <p className="text-blue-700">Price:{product?.price}</p>
        {!isItemAdded ? (
          <Button onClick={handleCart}>Add to cart</Button>
        ) : (
          <Button onClick={() => navigate("/home/cart")}>Go to Cart</Button>
        )}
      </div>
    </div>
  );
}
