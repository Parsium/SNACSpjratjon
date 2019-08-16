import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Control from "./Control";
import Slider from "./Slider";
import { exportAllDeclaration } from '@babel/types';

const mockChange = jest.fn();
const defaultProps = {
    onChange: mockChange,
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    nutFree: false,
} 

const renderer = (props = defaultProps) => render(<Control {...props}/>);

describe("Controls", () => {
    it ("Correctly renders", () => {
        const component = renderer();
        expect(component.queryByTestId("controls")).not.toBeNull();
    });

    it ("Correctly shows checkbox", () => {
        const component = renderer();
        const checkbox = component.queryByTestId("checkbox-0");
        expect(checkbox.name).toEqual("vegetarian");
    });

    it ("Correctly shows sliders", () => {
        const component = renderer();
        const slider = component.queryByTestId("slider-0");
        expect(slider).not.toBeNull();
    })
});