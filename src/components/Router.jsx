import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Product = lazy(() => import("./product/Product"));
const ProductDetails = lazy(() => import("./product/ProductDetails"));
const ProductCart = lazy(() => import("./product/ProductCart"));

import Login from "./Login";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";
import Loader from "./Loader";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route
        path="/home"
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
      >
        <Route
          path="about"
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="product"
          element={
            <Suspense fallback={<Loader />}>
              <Product />
            </Suspense>
          }
        />
        <Route
          path="product/:productID"
          element={
            <Suspense fallback={<Loader />}>
              <ProductDetails />
            </Suspense>
          }
        />
        <Route
          path="cart"
          element={
            <Suspense fallback={<Loader />}>
              <ProductCart />
            </Suspense>
          }
        />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
