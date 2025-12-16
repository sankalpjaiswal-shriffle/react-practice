import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../api/product.api";

const useProductDetails = (productId) => {
  return useQuery({
    queryKey: ["productDetails"],
    queryFn: () => fetchProductById(productId),
    // gcTime: 0,
  });
};

export default useProductDetails;
