import "./App.css";
import Profile from "./components/Profile";
import Product from "./components/product/Product";
import Form from "./components/Login";
function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Profile />
      <Product />
      <Form />
    </div>
  );
}

export default App;
