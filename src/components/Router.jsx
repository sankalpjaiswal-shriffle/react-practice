import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About";
import Product from "./product/Product";
import ProductDetails from "./product/ProductDetails";
import Login from "./Login";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";

export default function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />}>
          <Route path=":productID" element={<ProductDetails />} />
        </Route>
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
