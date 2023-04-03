import { fireEvent, render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";
const onchangeHandler = jest.fn();
const dropdownOptions = [
  {
    key: "first",
    value: "first",
  },
  {
    key: "second",
    value: "second",
  },
  {
    key: "third",
    value: "third",
  },
];

test("renders select element correctly with labelText", () => {
  render(
    <Dropdown
      name="select-name"
      value=""
      onChangeHandler={onchangeHandler}
      labelText="this is selectBox"
      options={[]}
    />
  );
  const DropdownComponentElement = screen.getByLabelText(/select-options/);
  const labelSelectElement = screen.getByText(/this is selectBox/i);
  expect(labelSelectElement).toBeInTheDocument();
  expect(DropdownComponentElement).toBeInTheDocument();
});

test("renders select default value correctly when pass as props", () => {
  render(
    <Dropdown
      value={"second"}
      options={dropdownOptions}
      onChangeHandler={onchangeHandler}
      name="select-name"
      labelText="this is textbox"
    />
  );
  const DropdownComponentElement = screen.getByLabelText(/select-options/);
  expect(DropdownComponentElement).toHaveValue("second");
});

test("renders select value correctly on onchange handler", () => {
  render(
    <Dropdown
      options={dropdownOptions}
      value={"first"}
      onChangeHandler={onchangeHandler}
      name="select-name"
      labelText=""
    />
  );
  const selectInputElement = screen.getByLabelText(/select-options/);
  fireEvent.change(selectInputElement, { target: { value: "third" } });
  expect(onchangeHandler).toBeCalledWith("third");
});
