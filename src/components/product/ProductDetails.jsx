import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import useFetch from "../../hooks/useFetch";
import { productApi } from "../../utils/productAPI";

export default function ProductDetails() {
  const { productID } = useParams();
  const { data, isLoading, error } = useFetch(productApi + `/${productID}`);
  const product = data;

  if (isLoading) return <Loader />;

  if (error)
    return <div className="flex items-center justify-center">{error}</div>;

  return (
    <div className="h-[50%] w-[50%]">
      <div className="flex flex-col p-2 m-2 text-wrap border-2 rounded-2xl gap-2">
        <img
          className="w-2/4 h-2/4"
          src={product?.images}
          title={product?.title}
        />
        <h2 className="text-2xl font-bold">{product?.title}</h2>
        <span className="text">Brand: {product?.brand}</span>
        <p className="text-gray-800 truncate">{product?.description}</p>
        <p className="text-blue-700">Price:{product?.price}</p>
      </div>
    </div>
  );
}
