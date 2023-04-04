import React from "react";
import { Outlet } from "react-router-dom";
import { useMisdemeanourContext } from "../misdemeanour_context";
import "./Home.css";

const Home: React.FC = () => {
  const { misdemeanours } = useMisdemeanourContext();
  const currentDate = new Date().toLocaleString("en-US").split(",")[0];
  const todaysMisdemeanours = misdemeanours.filter(
    (misdemeanour) => misdemeanour.date === currentDate
  );
  return (
    <>
      <div className="">
        <div className="my-12 absolute flex flex-col justify-center font-sans">
          <p className="home__font">
            Welcome to the home of the Justice Department of Fakelandia.
          </p>
          <div className="h-4"></div>
          <p className="home__font">
            Here you can browse a list of recent misdemeanours committed by our
            citizens, or you can confess to your own misdemenour.
          </p>
        </div>
      </div>
      <div className="mt-40 left-1/3 flex flex-col justify-around w-full md:w-1/3 relative z-1 bg-cyan-800 rounded shadow-lg overflow-hidden">
        <div className="text-base font-medium text-white uppercase p-4 text-center border-b border-gray-200 tracking-wide">
          <div>Total Misdemeanours: {misdemeanours.length}</div>
        </div>
        <div className="text-base font-medium text-white uppercase p-4 text-center border-b border-gray-200 tracking-wide">
          Number of confessions today:{" "}
          <span aria-label="todays-misdemeanours">
            {todaysMisdemeanours.length}
          </span>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
