import React from "react";
import { Header } from "./Header";
import { render } from "@testing-library/react";
import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";

const renderer = () => render(<Header />);

describe("Footer", () => {
    it("Displays the correct title", () => {
        const component = renderer();
        expect(component.queryByTestId("header").textContent).not.toBeNull;
    }) 
})