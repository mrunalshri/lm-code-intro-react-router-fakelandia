import React, { useEffect, useState } from "react";
import { Misdemeanour } from "../types/misdemeanours.types";
import FilteredMisdemeanours from "./FilteredMisdemeanours";

export const FilteredMisdemeanourContext = React.createContext<Misdemeanour[]>(
  []
);
export const SelectedMisdemeanourContext = React.createContext<string>("");

const Misdemeanours: React.FC = () => {
  const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);
  const [selectedMisdemeanour, setSelectedMisdemeanour] = useState<string>("");
  const [filteredMisdemeanours, setFilteredMisdemeanours] = useState<
    Array<Misdemeanour>
  >([]);

  useEffect(() => {
    const getMisdemeanours = async () => {
      const misdemeanoursAPI = await fetch(
        "http://localhost:8080/api/misdemeanours/5"
      );
      const statusCode = misdemeanoursAPI.status;
      if (statusCode === 200) {
        const response = await misdemeanoursAPI.json();
        setMisdemeanours(response.misdemeanours);
        console.log("md after Set", response.misdemeanours);
      } else {
        console.log("Something went wrong");
      }
    };
    getMisdemeanours();
  }, []);

  const handleDropdown = (value: string) => {
    const filteredData = misdemeanours.filter(
      (misdemeanour) => misdemeanour.misdemeanour === value
    );
    setSelectedMisdemeanour(value);
    setFilteredMisdemeanours(filteredData);
  };
  return (
    <>
      <FilteredMisdemeanourContext.Provider value={filteredMisdemeanours}>
        <SelectedMisdemeanourContext.Provider value={selectedMisdemeanour}>
          <div className="flex flex-col justify-center mx-44 my-8 gap-10 border rounded-md border-neutral-400">
            <FilteredMisdemeanours
              misdemeanours={misdemeanours}
              onChangeHandler={handleDropdown}
            />
          </div>
        </SelectedMisdemeanourContext.Provider>
      </FilteredMisdemeanourContext.Provider>
    </>
  );
};

export default Misdemeanours;
