import { useState } from "react";
import ProductCard from "./ProductCard";
import { productDetails as product } from "../../utils/product";

export default function Product() {
  const [productDetails, setProductDetails] = useState(product);
  return (
    <div className="m-2 p-2">
      <h1 className="text-3xl text-center font-bold p-3">Product page</h1>
      <ProductCard productDetails={productDetails} />
    </div>
  );
}
