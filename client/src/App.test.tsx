import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app component", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Fakelandians/i);
  expect(linkElement).toBeInTheDocument();
});
