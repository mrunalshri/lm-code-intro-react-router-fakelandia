import React from "react";
import { useMisdemeanourContext } from "../misdemeanour_context";
import {
  Misdemeanour,
  MISDEMEANOURS,
  MISDEMEANOURS_EMOJIS,
} from "../types/misdemeanours.types";
import Dropdown from "./Dropdown";

interface FilteredMisdemeanoursProps {
  misdemeanours: Misdemeanour[];
  onChangeHandler: (value: string) => void;
}

const FilteredMisdemeanours: React.FC<FilteredMisdemeanoursProps> = (props) => {
  const { selectedMisdemeanour, filteredMisdemeanours } =
    useMisdemeanourContext();

  const misdemeanoursData = selectedMisdemeanour
    ? filteredMisdemeanours
    : props.misdemeanours;

  return (
    <>
      <header className="flex flex-row justify-around flex-wrap p-4 bg-cyan-700">
        <div className="basis-1/4 text-white">Citizen ID</div>
        <div className="basis-1/4 text-white">Date</div>
        <div className="basis-1/4 text-white">
          <Dropdown
            selectText="Misdemeanours"
            value={selectedMisdemeanour}
            options={MISDEMEANOURS.map((misdemeanour) => ({
              key: misdemeanour,
              value: misdemeanour,
            }))}
            name="misdemeanour"
            onChangeHandler={props.onChangeHandler}
            addClass="bg-cyan-700"
          />
        </div>
        <div className="basis-1/4 text-white">Punishment Idea</div>
      </header>
      <div className="flex flex-row justify-around flex-wrap gap-y-2.5 mb-2.5">
        {misdemeanoursData.map((misdemeanour: Misdemeanour, index) => {
          const randomImagePath = `https://picsum.photos/200/75?random=${Math.random()}`;
          return (
            <React.Fragment key={`misdemeanour-${index}`}>
              <div className="basis-1/4">{misdemeanour.citizenId}</div>
              <div className="basis-1/4">{misdemeanour.date}</div>
              <div className="basis-1/4">
                {misdemeanour.misdemeanour}{" "}
                {MISDEMEANOURS_EMOJIS[misdemeanour.misdemeanour]}
              </div>
              <div className="basis-1/4 flex justify-center">
                <img src={randomImagePath} alt="random picsum" />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default FilteredMisdemeanours;
