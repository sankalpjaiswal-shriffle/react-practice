import { Link } from "react-router-dom";
import { Product } from "../../types/Product";

type ProductCardProps = {
  productList?: Product[];
};

export default function ProductCard({ productList }: ProductCardProps) {
  if (!productList?.length)
    return (
      <p className="flex text-base items-center justify-center text-black dark:text-white min-h-screen">
        No Product Found!
      </p>
    );

  return (
    <ul className="grid grid-cols-3 p-2 m-2">
      {productList?.map((productItem) => (
        <Link to={`${productItem.id}`} key={productItem.id}>
          <li className="flex flex-col p-2 m-2 text-wrap border-2 rounded-2xl gap-2 dark:border-white">
            <img
              className="w-2/4 h-2/4"
              src={productItem.images[0]}
              title={productItem.title}
            />
            <h2 className="text-2xl font-bold text-black dark:text-white">
              {productItem.title}
            </h2>
            <span className="text text-black dark:text-white">
              Brand: {productItem.brand}
            </span>
            <p className="text-gray-800 truncate  dark:text-gray-200">
              {productItem.description}
            </p>
            <p className="text-blue-700 ">Price: ${productItem.price}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
