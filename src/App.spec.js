import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import props from "./snacks.json";
import { render, fireEvent, getByText } from "@testing-library/react";

const renderer = () => render(<App data={props}/>);

describe("App", () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App data={props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it ("Loads the snack list", () => {
    const component = renderer();
    const snackList = component.queryByTestId("snack-list");
    expect(snackList).not.toBeNull();
  });

  it ("Filters vegetarian foods correctly when the relevant checkbox is selected", () => {
    const component = renderer();
    fireEvent.click(component.queryByTestId("checkbox-0"));
    expect(component.queryByTestId("snack-list").textContent).not.toContain("Vegetarian: false");
  });

  it ("Runs the correct function when the feeling lucky button is pressed", () => {
    const component = renderer();
    fireEvent.click(component.queryByTestId("feeling-lucky-button"));
    expect(component.queryAllByTestId("snack-tile").length).toBe(1);
  });

  it ("Filters nut-free foods correctly whe the relevant checbox is selected", () => {
    const component = renderer();
    fireEvent.click(component.queryByTestId("checkbox-3"));
    expect(component.queryByTestId("snack-list").textContent).not.toContain("Nut-Free: false");
  });
});