import React from "react";
import { Checkbox } from "./Checkbox";
import { render, fireEvent } from "@testing-library/react";
import { exportAllDeclaration } from "@babel/types";

const mockOnClick = jest.fn();
const props = {
    id: 2,
    name: "gluten-free",
    value: "glutenFree",
    display: "Gluten Free",
    onChange: mockOnClick,
}
const renderer = () => render(<Checkbox {...props} />);

describe("Checkbox", () => {
    it ("Loads without crashing", () => {
        const component = renderer();
        expect(component.queryByTestId("checkbox-2")).not.toBeNull();
    });

    it ("Can be checked and unchecked", () => {
        const component = renderer();
        fireEvent.click(component.queryByTestId("checkbox-2"));
        expect(mockOnClick).toHaveBeenCalled();
    });
})