import { render, screen } from "@testing-library/react";
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
