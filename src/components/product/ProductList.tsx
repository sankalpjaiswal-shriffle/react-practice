import { useMemo, useState } from "react";
import { Box, Container } from "@mui/material";
import ProductCard from "./ProductCard";
import SearchBar from "../common/SearchBar";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../reducers/paginationSlice";
import useProduct from "../../hooks/useProduct";
import Loader from "../Loader";
import Error from "../Error";

interface RootState {
  pagination: {
    currentPage: number;
  };
}

interface dataItem {
  title: string;
}

export default function ProductList() {
  const pageItem = 3;
  const { data, error, isLoading } = useProduct();
  console.log(data);
  const [search, setSearch] = useState<string | null>(null);
  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );
  const dispatch = useDispatch();
  const page = Math.ceil(data?.length / pageItem);
  const lastIndex = currentPage * pageItem;
  const firstIndex = lastIndex - pageItem;

  const filteredList = useMemo(() => {
    let trimed = search?.trim().toLowerCase();
    if (!trimed) return data;

    let regex = new RegExp(trimed.replace(/\s+/g, " "));

    return data?.filter((item: dataItem) =>
      item.title.toLowerCase().match(regex)
    );
  }, [data, search]);

  const pageData = search ? filteredList : data?.slice(firstIndex, lastIndex);

  function handlePageChange(page: number) {
    dispatch(changePage(page));
  }

  if (error) {
    return <Error error={error} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 3, px: { xs: 2, md: 4 } }}>
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
      </Box>
    </Container>
  );
}
