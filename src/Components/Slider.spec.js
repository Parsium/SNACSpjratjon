import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Slider } from "./Slider";

const mockedOnChange = jest.fn();

const defaultProps = {
  id: 0,
  name: "sweetness",
  leftLabel: "Sweet",
  rightLabel: "Savoury",
  onChange: mockedOnChange
};

const renderer = (props = defaultProps) => render(<Slider {...props} />);

describe("Slider", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("renders the slider-wrapper component", () => {
    const component = renderer();
    expect(component.queryByTestId("slider-wrapper")).not.toBeNull();
  });

  it("renders the slider-input component", () => {
    const component = renderer();
    expect(component.queryByTestId("slider-input")).not.toBeNull();
  });

  it("renders the correct left label from props", () => {
    const component = renderer();
    expect(component.queryByTestId("slider-left-label").textContent).toEqual(
      "Sweet"
    );
  });

  it("renders the correct right label from props", () => {
    const component = renderer();
    expect(component.queryByTestId("slider-right-label").textContent).toEqual(
      "Savoury"
    );
  });

  it("has the correct default value", () => {
    const component = renderer();
    expect(component.queryByTestId("slider-input").value).toEqual("5");
  });

  it("calls the onChange prop when changed", () => {
    const component = renderer();
    const testSlider = component.queryByTestId("slider-input");
    fireEvent.change(testSlider, { target: { value: "10" } });
    expect(mockedOnChange).toHaveBeenCalled();
  });

  it("does not call the onChange prop when not changed", () => {
    const component = renderer();
    expect(mockedOnChange).not.toHaveBeenCalled();
  });

  it("displays the correct value when slid", () => {
    const component = renderer();
    const testSlider = component.queryByTestId("slider-input");
    fireEvent.change(testSlider, { target: { value: "10" } });
    expect(component.queryByTestId("slider-input").value).toEqual("10");
  });
});
