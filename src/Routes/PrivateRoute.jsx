import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  let isAuth = localStorage.getItem("access_token");

  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
