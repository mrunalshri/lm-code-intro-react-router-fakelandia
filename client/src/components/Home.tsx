import React from "react";
import { Outlet } from "react-router-dom";
import { useMisdemeanourContext } from "../misdemeanour_context";

const Home: React.FC = () => {
  const { misdemeanours } = useMisdemeanourContext();
  const currentDate = new Date().toLocaleString("en-US").split(",")[0];
  const todaysMisdemeanours = misdemeanours.filter(
    (misdemeanour) => misdemeanour.date === currentDate
  );
  return (
    <>
      <div className="my-8">
        <p>Welcome to the home of the Justice Department of Fakelandia.</p>
        <p>
          Here you can browse a list of recent misdemeanours committed by our
          citizens, or you can confess to your own misdemenour.
        </p>
      </div>
      <div className="flex justify-around">
        <div>Total Misdemeanours: {misdemeanours.length}</div>
        <div>Number of confessions today: {todaysMisdemeanours.length}</div>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
