import { createContext, useState } from "react";
import { getCookie } from "../utils/cookie";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(getCookie() || null);
  const [isLoggedIn, setIsLoginIn] = useState(user?.email ? true : false);

  const login = (email) => {
    setIsLoginIn(true);
    setUser({ email: email });
  };

  const logout = () => {
    setIsLoginIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
