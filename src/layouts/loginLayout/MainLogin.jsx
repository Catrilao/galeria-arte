import { Backdrop, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "../full-layout/Header";

function LoginLayout() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    // Verifica si el usuario está en la página de inicio de sesión o registro
    const onAuthPage =
      location.pathname === "/login" || location.pathname === "/register";

    if (!token || onAuthPage) {
      setLoading(false);
    } else {
      navigate("/", { replace: true });
    }
  }, [navigate, location.pathname]);

  return (
    <>
      {!loading ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}

export default LoginLayout;
