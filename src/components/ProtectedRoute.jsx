import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../utils/cookie";

export default function ProtectedRoute() {
  const user = getCookie();
  const auth = { email: user.email };

  return auth.email ? <Outlet /> : <Navigate to="/login" />;
}
