import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../../api/product.api";
import { throttle } from "../../utils/throttle";

function ProductPage() {
  let limit = 6;
  const [product, setProduct] = useState<any[]>([]);
  const [skip, setSkip] = useState(0);

  const { data, isLoading } = useQuery({
    queryKey: ["product", limit, skip],
    queryFn: fetchProduct,
  });
  useEffect(() => {
    if (data) {
      setProduct((prev) => [...prev, ...data]);
    }
  }, [data, skip]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

      if (bottom) {
        setSkip((prev) => prev + limit);
      }
    }, 300);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [document, window]);

  return (
    <Box>
      <ProductCard productList={product} />
      {isLoading && (
        <Box>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}

export default ProductPage;
