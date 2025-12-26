import { Box, Container, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";

export default function Product() {
  return (
    <Box sx={{ p: 2, bgcolor: "background.default", minHeight: "100vh" }}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          fontWeight="bold"
        >
          Product page
        </Typography>
        {/* <ProductList /> */}
        <ProductPage />
      </Container>
    </Box>
  );
}
