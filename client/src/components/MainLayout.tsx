import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const MainLayout: React.FC = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default MainLayout;
