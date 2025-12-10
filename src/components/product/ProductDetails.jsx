import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";

export default function ProductDetails() {
  const apiUrl = "https://dummyjson.com/products/";
  const { productID } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(apiUrl + productID)
      .then((res) => {
        if (!res.ok) throw new Error("something went wrong");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [productID]);

  if (isLoading) return <Loader />;

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
