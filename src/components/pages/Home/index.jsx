import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../contexts/ThemeProvider";
import { AuthContext } from "../../../contexts/AuthProvider";

export default function Home() {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  const { logout, isLoggedIn } = useContext(AuthContext);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  function handleAuth() {
    if (!isLoggedIn) navigate("/login");
    logout();
  }

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <div className="flex flex-row bg-black dark:bg-white text-white dark:text-black  justify-around p-2">
        <nav className="flex flex-row items-center justify-center gap-4 p-4">
          <Link to="/home">Home</Link>
          <Link to="product">Product</Link>
          <Link to="about">About</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        <div className="flex flex-row gap-2">
          <button
            className="p-4 border-2 rounded-2xl"
            onClick={() => toggleTheme()}
          >
            {theme === "light" ? "Light" : "Dark"}
          </button>
          <button className="p-4 border-2 rounded-2xl" onClick={handleAuth}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
          <button
            className="p-4 border-2 rounded-2xl"
            onClick={() => navigate("/home/cart")}
          >
            Cart
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
