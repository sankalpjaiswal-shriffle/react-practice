import { useDispatch, useSelector } from "react-redux";
import Button from "../common/Button";
import { increment, decrement, removeItem } from "../../reducers/cartSlice";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

export default function ProductCart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  if (cart.length === 0)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <Typography variant="h6" color="text.primary">
          Add products to cart
        </Typography>
      </Box>
    );

  return (
    <Container maxWidth="md">
      <Box sx={{ px: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          fontWeight="bold"
          sx={{ mb: 4 }}
        >
          Product Cart
        </Typography>
        <Stack spacing={2}>
          {cart?.map((item) => (
            <Card
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
              }}
            >
              <CardMedia
                component="img"
                image={item.images[0]}
                title={item.title}
                alt={item.title}
                sx={{ width: 100, height: 100, objectFit: "contain", mr: 2 }}
              />
              <CardContent sx={{ flex: 1, p: 0 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Price: <strong>${item.price}</strong>
                </Typography>
              </CardContent>
              <Box display="flex" alignItems="center" gap={1} sx={{ mr: 2 }}>
                <IconButton
                  onClick={() => dispatch(decrement(item.id))}
                  color="primary"
                  size="small"
                >
                  <Remove />
                </IconButton>
                <Typography variant="h6" fontWeight="bold" sx={{ mx: 1 }}>
                  {item.quantity}
                </Typography>
                <IconButton
                  onClick={() => dispatch(increment(item.id))}
                  color="primary"
                  size="small"
                >
                  <Add />
                </IconButton>
              </Box>
              <Button onClick={() => dispatch(removeItem(item.id))}>
                Remove
              </Button>
            </Card>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
