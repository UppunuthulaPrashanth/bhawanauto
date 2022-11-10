import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const currentUser = localStorage.getItem("userToken");

  if (!currentUser) {
    return <Navigate to="/auth" />;
  }
  return children;
}

