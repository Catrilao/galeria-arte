import React, { lazy } from "react";
import Loadable from "../layouts/Loadable";
import { Navigate } from "react-router-dom";

/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);
/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/Error/404")));

/* ****Pages***** */
const HomePage = Loadable(lazy(() => import("../pages/Home/Home")));

const ClientesPage = Loadable(lazy(() => import("../pages/Clientes/Clientes")));

const ObrasArtista = Loadable(lazy(() => import("../pages/ObrasArtista/ObrasArtista")));



/* ****Routes***** */
const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "", exact: true, element: <HomePage /> },
      { path: "clientes", exact: true, element: <ClientesPage /> },
      { path: "obrasArtista", exact: true, element: <ObrasArtista /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
    ],
  },
];

export default Router;