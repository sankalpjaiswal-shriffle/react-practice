import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./Login";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";
import ProductCart from "./product/ProductCart";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Product = lazy(() => import("./product/Product"));
const ProductDetails = lazy(() => import("./product/ProductDetails"));

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />}>
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:productID" element={<ProductDetails />} />
        <Route path="cart" element={<ProductCart />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
