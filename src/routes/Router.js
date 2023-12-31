import React, { lazy } from "react";
import Loadable from "../layouts/Loadable";
import { Navigate } from "react-router-dom";

/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout")),
);
const LoginLayout = Loadable(
  lazy(() => import("../layouts/loginLayout/MainLogin")),
);
/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/Error/404")));

/* ****Pages***** */
const HomePage = Loadable(lazy(() => import("../pages/Home/Home")));

const ClientesPage = Loadable(lazy(() => import("../pages/Clientes/Clientes")));

const ObrasArtista = Loadable(
  lazy(() => import("../pages/ObrasArtista/ObrasArtista")),
);

const ArtistasPage = Loadable(lazy(() => import("../pages/Artistas/Artistas")));

const LoginForm = Loadable(
  lazy(() => import("../pages/Home/components/LoginForm/LoginForm")),
);

const SubirObra = Loadable(lazy(() => import("../pages/SubirObra/SubirObra")));

const MisObras = Loadable(lazy(() => import("../pages/MisObras/MisObras")));


/* ****Routes***** */
const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "", exact: true, element: <HomePage /> },
      { path: "clientes", exact: true, element: <ClientesPage /> },
      { path: "artistas", exact: true, element: <ArtistasPage /> },
      { path: "obrasArtista", exact: true, element: <ObrasArtista /> },
      { path: "login", exact: true, element: <LoginForm /> }, // Ruta agregada
      { path: "subirObra", exact: true, element: <SubirObra /> }, // Ruta agregada
      { path: "misObras", exact: true, element: <MisObras /> }, // Ruta agregada
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      { path: "", exact: true, element: <LoginForm /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Navigate to="/404" /> },
    ],
  },
];

export default Router;
