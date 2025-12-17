import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../api/product.api";
const oneHour = 1000 * 60 * 60;

const useProduct = () => {
  return useQuery({
    queryKey: ["product"],
    queryFn: fetchProduct,
    gcTime: 10000,
    staleTime: oneHour,
    // retry: 3,
  });
};

export default useProduct;
