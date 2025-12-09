import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav className="flex flex-row items-center justify-center gap-4 p-4 bg-blue-700 text-white">
        <Link to="/home">Home</Link>
        <Link to="product">Product</Link>
        <Link to="about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}
