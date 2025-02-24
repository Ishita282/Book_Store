import React from "react";
import { Navigate } from "react-router-dom";

const protectedRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default protectedRoute;
