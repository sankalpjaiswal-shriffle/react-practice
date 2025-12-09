import ProductCard from "./ProductCard";
import { productDetails } from "../../utils/product";
import ProductList from "./ProductList";
import { Outlet, useParams } from "react-router-dom";

export default function Product() {
  const { productID } = useParams();

  return (
    <div className="m-2 p-2">
      <h1 className="text-3xl text-center font-bold p-3">Product page</h1>
      {productID ? (
        <Outlet />
      ) : (
        <>
          <ProductCard productDetails={productDetails} />
          <ProductList />
        </>
      )}
    </div>
  );
}
