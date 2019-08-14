import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";
import { exportAllDeclaration } from "@babel/types";

const mockedOnChange = jest.fn();

const defaultProps = {
  id: "0",
  name: "vegetarian",
  display: "Vegetarian",
  value: false,
  onChange: mockedOnChange
};

const renderer = (props = defaultProps) => render(<Checkbox {...props} />);

describe("Checkbox", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders a checkbox wrapper", () => {
    const component = renderer();
    expect(component.queryByTestId("checkbox-wrapper")).not.toBeNull();
  });

  it("renders the correct checkbox label from props", () => {
    const component = renderer();
    expect(component.queryByTestId("checkbox-label").textContent).toEqual(
      "Vegetarian "
    );
  });

  it("renders the checkbox-input component", () => {
    const component = renderer();
    expect(component.queryByTestId("checkbox-input")).not.toBeNull();
  });

  it("has the correct default value", () => {
    const component = renderer();
    expect(component.queryByTestId("checkbox-input").value).toEqual("false");
  });

  it("calls the onChange prop when changed", () => {
    const component = renderer();
    const testCheckbox = component.queryByTestId("checkbox-input");
    fireEvent.click(testCheckbox);
    expect(mockedOnChange).toHaveBeenCalled();
  });

  it("does not call the onChange prop when not changed", () => {
    const component = renderer();
    expect(mockedOnChange).not.toHaveBeenCalled();
  });

  it("value is correct, as passed by props", () => {
    const component = renderer();
    expect(component.queryByTestId("checkbox-input").value).toEqual("false");
  });
});
