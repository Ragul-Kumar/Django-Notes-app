import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";
import api from "../api";

function ProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(null);
  // console.log(isAuth);

  useEffect(() => {
    auth().catch(() => setIsAuth(false));
  }, []);

  const refreshToken = async () => {
    const refresh_token = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post("api/token/refresh/", {
        refresh: refresh_token,
      });

      console.log(res.status);
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        // localStorage.setItem(REFRESH_TOKEN,res.data.refresh)
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    } catch (error) {
      setIsAuth(false);
      console.error(error);
    }
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    // console.log(token);

    if (token) {
      setIsAuth(true);
      return;
    }

    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;

    if (tokenExpiration < now) {
      await refreshToken();
    } else {
      isAuth(true);
    }
  };

  if (isAuth === null) {
    return <div>Loading...</div>;
  }
  return isAuth ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
