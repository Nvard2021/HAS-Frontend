import React from "react";
import Login from "../pages/Login";
import Home from "../pages/Home";

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Home /> : <Login />;
};
export default ProtectedRoutes;
