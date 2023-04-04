import React from "react";
import { Outlet } from "react-router-dom";
import { MisdemeanourContextProvider } from "../misdemeanour_context";
import Navigation from "./Navigation";

const MainLayout: React.FC = () => {
  return (
    <>
      <Navigation />
      <MisdemeanourContextProvider>
        <div className="min-h-screen bg-slate-100">
          <div className="relative pt-20">
            <Outlet />
          </div>
        </div>
      </MisdemeanourContextProvider>
    </>
  );
};

export default MainLayout;
