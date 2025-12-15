import Loader from "../Loader";
import useFetch from "../../hooks/useFetch";
import { productApi } from "../../utils/productAPI";
import { useMemo, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "../common/SearchBar";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../reducers/paginationSlice";

export default function ProductList() {
  const limit = 16;
  const pageItem = 3;
  const { data, isLoading, error } = useFetch(productApi + `?limit=${limit}`);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const dispatch = useDispatch();
  const [search, setSearch] = useState(null);
  const page = Math.ceil(data?.products.length / pageItem);
  const lastIndex = currentPage * pageItem;
  const firstIndex = lastIndex - pageItem;

  const filteredList = useMemo(() => {
    let trimed = search?.trim().toLowerCase();
    if (!trimed) return data?.products;

    let regex = new RegExp(trimed.replace(/\s+/g, " "));

    return data?.products?.filter((item) =>
      item.title.toLowerCase().match(regex)
    );
  }, [data, search]);

  const pageData = search
    ? filteredList
    : data?.products.slice(firstIndex, lastIndex);

  function handlePageChange(page) {
    dispatch(changePage(page));
  }

  if (error)
    return <div className="flex items-center justify-center">{error}</div>;

  if (isLoading) return <Loader />;

  return (
    <div className="p-2 m-2 dark:bg-black">
      <SearchBar setSearch={setSearch} />
      <ProductCard productList={pageData} />
      {!search && (
        <Pagination
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          count={page}
          onChange={(_, page) => handlePageChange(page)}
        />
      )}
    </div>
  );
}
