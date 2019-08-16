import React from "react";
import Footer from "./Footer";
import { render, fireEvent } from "@testing-library/react";
import { exportAllDeclaration } from "@babel/types";

const renderer = () => render(<Footer />);

describe("Footer", () => {
    it ("Correctly renders", () => {
        const component = renderer();
        expect(component.queryByTestId("footer")).not.toBeNull();
    });

    it ("Shows the disclaimer", () => {
        const component = renderer();
        expect(component.queryByTestId("footer").textContent).not.toBeNull();
    });
});
