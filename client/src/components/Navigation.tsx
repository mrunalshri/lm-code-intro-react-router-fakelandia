import React from "react";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center max-w-xs flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight ">
            Fakelandia Justice Department
          </span>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-md lg:flex-grow">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-purple-600 mr-4"
                  : "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/misdemenour"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-purple-600 mr-4"
                  : "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              }
            >
              Misdemeanour
            </NavLink>
            <NavLink
              to="/confession"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-purple-600 mr-4"
                  : "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              }
            >
              Confession
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
