import "./App.css";
import Profile from "./components/Profile";
import Product from "./components/product/Product";
import Form from "./components/Login";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
