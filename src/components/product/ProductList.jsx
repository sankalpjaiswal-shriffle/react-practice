import Loader from "../Loader";
import useFetch from "../../hooks/useFetch";
import { productApi } from "../../utils/productAPI";
import { useMemo, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "../common/SearchBar";

export default function ProductList() {
  const limit = 15;
  const { data, isLoading, error } = useFetch(productApi + `?limit=${limit}`);
  const [search, setSearch] = useState(null);

  const filteredList = useMemo(() => {
    let trimed = search?.trim().toLowerCase();
    if (!trimed) return data?.products;

    let regex = new RegExp(trimed.replace(/\s+/g, " "));

    return data?.products?.filter((item) =>
      item.title.toLowerCase().match(regex)
    );
  }, [data, search]);

  if (error)
    return <div className="flex items-center justify-center">{error}</div>;

  if (isLoading) return <Loader />;

  return (
    <div className="p-2 m-2 dark:bg-black">
      <SearchBar setSearch={setSearch} />
      <ProductCard productList={filteredList} />
    </div>
  );
}
