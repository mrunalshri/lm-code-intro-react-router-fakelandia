import React from "react";
import { Outlet } from "react-router-dom";
import { MisdemeanourContextProvider } from "../misdemeanour_context";
import Navigation from "./Navigation";

const MainLayout: React.FC = () => {
  return (
    <>
      <Navigation />
      <MisdemeanourContextProvider>
        <Outlet />
      </MisdemeanourContextProvider>
    </>
  );
};

export default MainLayout;
