import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import * as Utils from "../utils";

import Confession from "./Confession";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("renders Confession Component correctly", () => {
  render(<Confession />);
  const confessionComponent = screen.getByRole("button");
  expect(confessionComponent).toHaveTextContent("Confess");
});

test("submit button click should call to post", async () => {
  jest.spyOn(Utils, "postData").mockResolvedValueOnce({
    success: true,
    justTalked: false,
  });
  render(<Confession />);

  const subjectInput = screen.getByLabelText("subject");
  fireEvent.change(subjectInput, { target: { value: "testing" } });
  const reasonDropdown = screen.getByLabelText("select-options");
  fireEvent.change(reasonDropdown, { target: { value: "vegetables" } });
  const reasonInput = screen.getByLabelText("reason");
  fireEvent.change(reasonInput, {
    target: { value: "this is another testing" },
  });

  const confessButton = screen.getByRole("button");

  fireEvent.click(confessButton);
  await waitFor(() => {
    expect(mockedUsedNavigate).toBeCalledWith("/misdemenour");
  });
});
