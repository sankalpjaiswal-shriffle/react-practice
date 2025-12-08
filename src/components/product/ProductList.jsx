import { useEffect, useState } from "react";
import Loader from "../Loader";
export default function ProductList() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const api = "https://dummyjson.com/products?limit=9";

  useEffect(() => {
    setIsLoading(true);
    const fetchData = () => {
      fetch(api)
        .then((response) => {
          if (!response.ok) throw new Error("Something went wrong");
          return response.json();
        })
        .then((data) => setProduct(data.products))
        .catch((err) => setError(err.message))
        .finally(setIsLoading(false));
    };
    fetchData();
  }, []);

  if (error)
    return <div className="flex items-center justify-center">{error}</div>;

  if (isLoading) return <Loader />;

  return (
    <div className="p-2 m-2">
      <ul className="grid grid-cols-3 p-2 m-2">
        {product?.map((productItem) => (
          <li
            className="flex flex-col p-2 m-2 text-wrap border-2 rounded-2xl gap-2"
            key={productItem.id}
          >
            <img
              className="w-2/4 h-2/4"
              src={productItem.images[0]}
              title={productItem.title}
            />
            <h2 className="text-2xl font-bold">{productItem.title}</h2>
            <span className="text">Brand: {productItem.brand}</span>
            <p className="text-gray-800 truncate">{productItem.description}</p>
            <p className="text-blue-700">Price:{productItem.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
