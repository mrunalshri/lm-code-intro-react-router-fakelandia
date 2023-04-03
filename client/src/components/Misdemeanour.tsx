import React from "react";
import { useMisdemeanourContext } from "../misdemeanour_context";
import FilteredMisdemeanours from "./FilteredMisdemeanours";

const Misdemeanours: React.FC = () => {
  const { misdemeanours, onChangeHandler, loader } = useMisdemeanourContext();

  return (
    <>
      {loader ? (
        <div className="flex items-center justify-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center mx-44 my-8 gap-10 border rounded-md border-neutral-400">
          <FilteredMisdemeanours
            misdemeanours={misdemeanours}
            onChangeHandler={onChangeHandler}
          />
        </div>
      )}
    </>
  );
};

export default Misdemeanours;
