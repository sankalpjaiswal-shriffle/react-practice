import Loader from "../Loader";
import useFetch from "../../hooks/useFetch";
import { productApi } from "../../utils/productAPI";
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "../common/SearchBar";

export default function ProductList() {
  const limit = 9;
  const { data, isLoading, error } = useFetch(productApi + `?limit=${limit}`);
  const [search, setSearch] = useState(null);

  let filteredList = data?.products;

  let regex = useMemo(() => {
    return new RegExp(search?.trim().toLowerCase().replace(/\s+/g, " "));
  }, [search]);

  filteredList = data?.products?.filter((item) =>
    item.title.toLowerCase().match(regex)
  );

  if (error)
    return <div className="flex items-center justify-center">{error}</div>;

  if (isLoading) return <Loader />;

  return (
    <div className="p-2 m-2">
      <SearchBar setSearch={setSearch} />
      <ProductCard productList={filteredList} />
    </div>
  );
}
