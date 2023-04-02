import React from "react";
import { useMisdemeanourContext } from "../misdemeanour_context";
import FilteredMisdemeanours from "./FilteredMisdemeanours";

const Misdemeanours: React.FC = () => {
  const { misdemeanours, onChangeHandler } = useMisdemeanourContext();

  return (
    <>
      <div className="flex flex-col justify-center mx-44 my-8 gap-10 border rounded-md border-neutral-400">
        <FilteredMisdemeanours
          misdemeanours={misdemeanours}
          onChangeHandler={onChangeHandler}
        />
      </div>
    </>
  );
};

export default Misdemeanours;
