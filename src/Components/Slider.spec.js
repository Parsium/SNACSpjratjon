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
  it("renders the slider-wrapper component", () => {
    const component = renderer();
    expect(component.queryByTestId("slider-wrapper")).not.toBeNull();
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

  it("displayes the correct value when slid", () => {
    const component = renderer();

    expect(component.queryByTestId("slider-input").value).toEqual("5");
  });
});
