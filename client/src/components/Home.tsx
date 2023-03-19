import React from "react";
import { Outlet } from "react-router-dom";

const Home: React.FC = () => (
  <>
    Home!
    <Outlet />
  </>
);

export default Home;
