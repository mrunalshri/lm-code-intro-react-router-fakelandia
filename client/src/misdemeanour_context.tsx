import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Misdemeanour } from "./types/misdemeanours.types";

export const MisdemeanourContext = React.createContext<{
  misdemeanours: Misdemeanour[];
  updateMisdemeanours: Dispatch<SetStateAction<Misdemeanour[]>>;
  onChangeHandler: (value: string) => void;
  selectedMisdemeanour: string;
  filteredMisdemeanours: Misdemeanour[];
}>({
  misdemeanours: [],
  updateMisdemeanours: () => null,
  onChangeHandler: () => null,
  selectedMisdemeanour: "",
  filteredMisdemeanours: [],
});

export const useMisdemeanourContext = () => {
  return useContext(MisdemeanourContext);
};

export const MisdemeanourContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
      } else {
        console.log("Something went wrong");
      }
    };
    getMisdemeanours();
  }, []);

  const handleMisdemeanourChange = (value: string) => {
    const filteredData = misdemeanours.filter(
      (misdemeanour) => misdemeanour.misdemeanour === value
    );
    setSelectedMisdemeanour(value);
    setFilteredMisdemeanours(filteredData);
  };

  return (
    <MisdemeanourContext.Provider
      value={{
        misdemeanours: misdemeanours,
        updateMisdemeanours: setMisdemeanours,
        selectedMisdemeanour: selectedMisdemeanour,
        filteredMisdemeanours: filteredMisdemeanours,
        onChangeHandler: handleMisdemeanourChange,
      }}
    >
      {children}
    </MisdemeanourContext.Provider>
  );
};
