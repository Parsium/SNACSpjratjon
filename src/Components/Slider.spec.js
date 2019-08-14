import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Slider } from "./Slider";
import { exportAllDeclaration } from "@babel/types";

const mockClick = jest.fn();
const defaultProps = {
    id: 0,
    leftLabel: "Sweet",
    rightLabel: "Savoury",
    value: 5,
    onClick: mockClick,
}
const renderer = (props = defaultProps) => render(<Slider {...props}/>);

describe("Slider", () => {
    it ("Correctly renders", () => {
        const component = renderer();
        expect(component.queryByTestId("slider-0")).not.toBeNull();
    });

    it ("Correctly moves on click", () => {
        const component = renderer();
        const slider = component.queryByTestId("slider-0");
        fireEvent.click(slider);
        expect(slider.value).not.toBe(5);
    })

    it ("Displays correct left label", () => {
        const component = renderer();
        expect(component.queryByTestId("left-label").textContent).toBe("Sweet");
    });

    it ("Displays the correct right label", () => {
        const component = renderer();
        expect(component.queryByTestId("right-label").textContent).toBe("Savoury");
    });
});