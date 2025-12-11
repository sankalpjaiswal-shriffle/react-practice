import ProductCard from "./ProductCard";
import ProductList from "./ProductList";

export default function Product() {
  return (
    <div className="p-2 dark:bg-black">
      <h1 className="text-3xl text-center font-bold p-3 dark:text-white">
        Product page
      </h1>
      <ProductList />
    </div>
  );
}
