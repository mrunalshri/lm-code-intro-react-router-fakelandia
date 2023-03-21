import React, { useContext } from "react";
import {
  Misdemeanour,
  MISDEMEANOURS,
  MISDEMEANOURS_EMOJIS,
} from "../types/misdemeanours.types";
import Dropdown from "./Dropdown";
import {
  FilteredMisdemeanourContext,
  SelectedMisdemeanourContext,
} from "./Misdemeanour";

interface FilteredMisdemeanoursProps {
  misdemeanours: Misdemeanour[];
  onChangeHandler: (value: string) => void;
}

const FilteredMisdemeanours: React.FC<FilteredMisdemeanoursProps> = (props) => {
  const filteredMisdemeanours = useContext(FilteredMisdemeanourContext);
  const selectedMisdemeanour = useContext(SelectedMisdemeanourContext);

  const misdemeanoursData = selectedMisdemeanour
    ? filteredMisdemeanours
    : props.misdemeanours;

  return (
    <>
      <header className="flex flex-row justify-around flex-wrap">
        <div className="basis-1/4">Citizen ID</div>
        <div className="basis-1/4">Date</div>
        <div className="basis-1/4">
          <Dropdown
            selectText="Misdemeanours"
            value={selectedMisdemeanour}
            options={MISDEMEANOURS.map((misdemeanour) => ({
              key: misdemeanour,
              value: misdemeanour,
            }))}
            name="misdemeanour"
            onChangeHandler={props.onChangeHandler}
          />
        </div>
        <div className="basis-1/4">Punishment Idea</div>
      </header>
      <div className="flex flex-row justify-around flex-wrap">
        {misdemeanoursData.map((misdemeanour: Misdemeanour, index) => {
          return (
            <React.Fragment key={`misdemeanour-${index}`}>
              <div className="basis-1/4">{misdemeanour.citizenId}</div>
              <div className="basis-1/4">{misdemeanour.date}</div>
              <div className="basis-1/4">
                {misdemeanour.misdemeanour}{" "}
                {MISDEMEANOURS_EMOJIS[misdemeanour.misdemeanour]}
              </div>
              <div className="basis-1/4 text-center">
                <img src="https://picsum.photos/200/75" alt="random picsum" />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default FilteredMisdemeanours;
