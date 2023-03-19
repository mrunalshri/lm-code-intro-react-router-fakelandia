import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Confession from "./components/Confession";
import Home from "./components/Home";
import Misdemeanour from "./components/Misdemeanour";
import NotFound from "./components/NotFound";

const Router: React.FC = () => {
  const mainRoutes = {
    path: "/",
    element: <Home />,
    children: [
      { path: "*", element: <Navigate to="404" /> },
      { path: "misdemenour", element: <Misdemeanour /> },
      { path: "confession", element: <Confession /> },
      { path: "404", element: <NotFound /> },
    ],
  };
  const routing = useRoutes([mainRoutes]);

  return <>{routing}</>;
};

export default Router;
