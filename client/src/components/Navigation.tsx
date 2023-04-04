import React from "react";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <>
      <header className="border-b backdrop-blur pl-48 bg-gray-50 dark:bg-gray-900/70 dark:border-gray-700 xl:fixed xl:w-full xl:top-0 xl:left-0 xl:z-30">
        <div className="container px-1 py-2 mx-auto space-y-4 xl:space-y-0 xl:flex xl:items-center xl:justify-between xl:space-x-10">
          <div className="flex flex-col items-center max-w-xs flex-shrink-0 text-black-700 mr-6">
            <div className="font-semibold text-xl">Fakelandia Justice</div>
            <div className="font-semibold text-xl">Department</div>
          </div>

          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-md lg:flex-grow">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-black text-base font-semibold block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4"
                    : "block text-base mt-4 lg:inline-block lg:mt-0 text-slate-600 hover:text-slate-900 hover:font-medium mr-4"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/misdemenour"
                className={({ isActive }) =>
                  isActive
                    ? "text-black text-base font-semibold block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4"
                    : "block text-base mt-4 lg:inline-block lg:mt-0 text-slate-600 hover:text-slate-900 hover:font-medium mr-4"
                }
              >
                Misdemeanour
              </NavLink>
              <NavLink
                to="/confession"
                className={({ isActive }) =>
                  isActive
                    ? "text-black text-base font-semibold block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4"
                    : "block text-base mt-4 lg:inline-block lg:mt-0 text-slate-600 hover:text-slate-900 hover:font-medium mr-4"
                }
              >
                Confession
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
