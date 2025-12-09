import { Route, Routes } from "react-router-dom";
import Home from "./Home/index";
import About from "./About";
import Product from "../product/Product";

export default function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
      </Route>
    </Routes>
  );
}
