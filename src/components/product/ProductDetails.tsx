import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  CircularProgress,
  Alert,
  Container,
} from "@mui/material";
import { ShoppingCart, ArrowForward } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { productApiById } from "../../utils/productAPI";
import { addItemToCart } from "../reducers/cartSlice";
import type { Product } from "../../types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartSliceState {
  cart: CartItem[];
}
export default function ProductDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(
    (state: { cart: CartSliceState }) => state.cart.cart
  );
  const { productID } = useParams<{ productID: string }>();

  const {
    data: product,
    isLoading,
    error,
  } = useFetch<Product>(productApiById + `/${productID}`);

  const isItemAdded = cart?.find((item) => item.id === product?.id) || null;

  function handleCart() {
    if (!product) return;
    const { id, title, images, price } = product;
    dispatch(
      addItemToCart({
        id,
        title,
        images,
        price,
      })
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

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        py={4}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: 800,
          }}
        >
          <CardMedia
            component="img"
            image={product?.images[0]}
            alt={product?.title}
            sx={{
              height: 400,
              objectFit: "contain",
              p: 4,
            }}
          />
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              {product?.title}
            </Typography>

            <Chip
              label={`Brand: ${product?.brand}`}
              color="primary"
              variant="outlined"
              sx={{ mb: 2 }}
            />

            <Typography variant="body1" color="text.secondary" sx={{ my: 2 }}>
              {product?.description}
            </Typography>

            <Typography
              variant="h4"
              color="primary"
              fontWeight="bold"
              sx={{ mb: 3 }}
            >
              ${product?.price}
            </Typography>

            {!isItemAdded ? (
              <Button
                variant="contained"
                size="large"
                fullWidth
                startIcon={<ShoppingCart />}
                onClick={handleCart}
              >
                Add to cart
              </Button>
            ) : (
              <Button
                variant="contained"
                color="success"
                size="large"
                fullWidth
                endIcon={<ArrowForward />}
                onClick={() => navigate("/home/cart")}
              >
                Go to Cart
              </Button>
            )}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
