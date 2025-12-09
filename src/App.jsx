import "./App.css";
import Profile from "./components/Profile";
import Product from "./components/product/Product";
import Form from "./components/Login";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/pages/Router";
function App() {
  return (
    <BrowserRouter>
      {/* <div className="flex flex-col items-center justify-center">
        <Profile />
        <Product />
        <Form />
      </div> */}
      <Router />
    </BrowserRouter>
  );
}

export default App;
