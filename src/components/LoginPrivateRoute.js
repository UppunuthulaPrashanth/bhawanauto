import React from "react";
import { Navigate } from "react-router-dom";

export default function LoginPrivateRoute({ children }) {
    const currentUser = localStorage.getItem("userToken");
  
    if (!currentUser) {
        return children;
    }
    return <Navigate to="/" />;
  }
