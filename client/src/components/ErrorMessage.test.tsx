import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

test("renders errorMessageComponent correctly", () => {
  render(<ErrorMessage errorMessage="this is test" />);
  const errorMessageComponent = screen.getByText(/this is test/i);
  expect(errorMessageComponent).toBeInTheDocument();
});
