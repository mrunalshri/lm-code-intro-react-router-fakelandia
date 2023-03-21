import React from "react";

interface OptionProps {
  key: string;
  value: string;
}

interface DropdownProps {
  labelText?: string;
  options: OptionProps[];
  name: string;
  value: string;
  selectText?: string;
  onChangeHandler: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  return (
    <div>
      <label>{props.labelText} </label>
      <span>
        <select
          name={props.name}
          aria-label="select-options"
          value={props.value}
          className="select-Input"
          onChange={({ target }) => {
            props.onChangeHandler(target.value);
          }}
        >
          {props.selectText && <option value={""}>{props.selectText}</option>}
          {props.options.map((option, index) => {
            return (
              <React.Fragment key={`dropdown-${index}-${option}`}>
                <option value={option.value}>{option.key}</option>
              </React.Fragment>
            );
          })}
        </select>
      </span>
    </div>
  );
};

export default Dropdown;
