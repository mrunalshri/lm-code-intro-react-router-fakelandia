import { render, screen } from "@testing-library/react";
import { MisdemeanourContext } from "../misdemeanour_context";
import Home from "./Home";

test("renders Home page correctly", () => {
  render(<Home />);
  const errorMessageComponent = screen.getByText(
    /Welcome to the home of the Justice Department of Fakelandia./i
  );
  expect(errorMessageComponent).toBeInTheDocument();
});

test("renders Home page correctly with Number of confessions today", () => {
  const currentDate = new Date().toLocaleString("en-US").split(",")[0];

  const mockMisdemeanours: any[] = [
    { citizenId: 26013, misdemeanour: "vegetables", date: currentDate },
    { citizenId: 11718, misdemeanour: "vegetables", date: currentDate },
    { citizenId: 724, misdemeanour: "vegetables", date: currentDate },
    { citizenId: 5895, misdemeanour: "vegetables", date: "4/2/2023" },
    { citizenId: 5400, misdemeanour: "united", date: "4/2/2023" },
    { citizenId: 16602, misdemeanour: "vegetables", date: currentDate },
    { citizenId: 79, misdemeanour: "lift", date: currentDate },
  ];
  render(
    <MisdemeanourContext.Provider
      value={{
        misdemeanours: mockMisdemeanours,
        updateMisdemeanours: jest.fn(),
        onChangeHandler: jest.fn(),
        selectedMisdemeanour: "",
        filteredMisdemeanours: [],
        loader: false,
      }}
    >
      <Home />
    </MisdemeanourContext.Provider>
  );
  const totalMisdemeanours = screen.getByLabelText("todays-misdemeanours");
  expect(totalMisdemeanours).toHaveTextContent("5");
});
