import "./App.css";
import Profile from "./components/Profile";
import Product from "./components/product/Product";
function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Profile />
      <Product />
    </div>
  );
}

export default App;
