import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FeelingLucky from "./FeelingLucky";
import { jsxEmptyExpression, exportAllDeclaration } from "@babel/types";

const mockClick = jest.fn();
const defaultProps = {
    onClick: mockClick,
}
const renderer = (props = defaultProps) => render(<FeelingLucky {...props}/>);

describe("Feeeling Lucky", () => {
    it ("Correctly renders", () => {
        const component = renderer();
        expect(component.queryByTestId("feeling-lucky")).not.toBeNull();  
    });

    it ("Generates a random snack", () => {
        const component = renderer();
        const button = component.queryByTestId("feeling-lucky-button");
        fireEvent.click(button);
        expect(mockClick).toHaveBeenCalled();
    })
});