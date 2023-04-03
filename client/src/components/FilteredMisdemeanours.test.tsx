import { render, screen } from "@testing-library/react";
import { Misdemeanour } from "../types/misdemeanours.types";
import FilteredMisdemeanours from "./FilteredMisdemeanours";

const mockHandler = jest.fn();
const misdemeanourData: Misdemeanour[] = [
  { citizenId: 122, date: "08/02/2023", misdemeanour: "lift" },
];
test("renders errorMessageComponent correctly", () => {
  render(
    <FilteredMisdemeanours
      onChangeHandler={mockHandler}
      misdemeanours={misdemeanourData}
    />
  );
  const errorMessageComponent = screen.getByText(/Citizen ID/i);
  expect(errorMessageComponent).toBeInTheDocument();
});
