import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import data from "./snacks.json";

const renderer = () => render(<App data={data} />);

describe("App", () => {
  it("renders the header component", () => {
    const component = renderer();
    expect(component.queryByTestId("app-header")).not.toBeNull();
  });

  it("renders the control component", () => {
    const component = renderer();
    expect(component.queryByTestId("app-control")).not.toBeNull();
  });

  it("renders the feeling lucky component", () => {
    const component = renderer();
    expect(component.queryByTestId("app-feeling-lucky")).not.toBeNull();
  });
});
