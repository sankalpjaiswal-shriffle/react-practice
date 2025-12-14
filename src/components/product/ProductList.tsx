import { useMemo, useState } from "react";
import { Box, Container, CircularProgress, Alert } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import { productApi } from "../../utils/productAPI";
import ProductCard from "./ProductCard";
import SearchBar from "../common/SearchBar";
import type { ProductResponse } from "../../types/product";

export default function ProductList() {
  const limit = 16;
  const { data, isLoading, error } = useFetch<ProductResponse>(
    productApi + `?limit=${limit}`
  );
  const [search, setSearch] = useState<string | null>(null);

  const filteredList = useMemo(() => {
    let trimed = search?.trim().toLowerCase();
    if (!trimed) return data?.products;

    let regex = new RegExp(trimed.replace(/\s+/g, " "));

    return data?.products?.filter((item) =>
      item.title.toLowerCase().match(regex)
    );
  }, [data, search]);

  if (error) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="50vh"
      >
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 3, px: { xs: 2, md: 4 } }}>
        <SearchBar setSearch={setSearch} />
        <ProductCard productList={filteredList} />
      </Box>
    </Container>
  );
}
