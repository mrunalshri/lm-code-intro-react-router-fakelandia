import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders Home page correctly", () => {
  render(<Home />);
  const errorMessageComponent = screen.getByText(/Home!/i);
  expect(errorMessageComponent).toBeInTheDocument();
});
