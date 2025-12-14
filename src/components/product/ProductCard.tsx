import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";

type ProductCardProps = {
  productList?: Product[];
};

export default function ProductCard({ productList }: ProductCardProps) {
  if (!productList?.length)
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="50vh"
      >
        <Typography variant="body1" color="text.primary">
          No Product Found!
        </Typography>
      </Box>
    );

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {productList?.map((productItem) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={productItem.id}>
          <Link
            to={`${productItem.id}`}
            style={{ textDecoration: "none", display: "block", height: "100%" }}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                border: "1px solid #000",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                image={productItem.images[0]}
                title={productItem.title}
                alt={productItem.title}
                sx={{
                  height: 200,
                  objectFit: "contain",
                  p: 2,
                }}
              />
              <CardContent sx={{ p: 2, flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  component="h2"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {productItem.title}
                </Typography>
                <Chip
                  label={`Brand : ${productItem.brand}`}
                  size="small"
                  sx={{
                    mb: 1,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    mb: 1,
                  }}
                >
                  {productItem.description}
                </Typography>
                <Typography variant="body2" color="primary" fontWeight="bold">
                  Price: ${productItem.price}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
