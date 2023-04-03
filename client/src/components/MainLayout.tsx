import React from "react";
import { Outlet } from "react-router-dom";
import { MisdemeanourContextProvider } from "../misdemeanour_context";
import Navigation from "./Navigation";

const MainLayout: React.FC = () => {
  return (
    <>
      <Navigation />
      <MisdemeanourContextProvider>
        <div className="relative top-20">
          <Outlet />
        </div>
      </MisdemeanourContextProvider>
    </>
  );
};

export default MainLayout;
