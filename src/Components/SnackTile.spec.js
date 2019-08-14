import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SnackTile from "./SnackTile";

const mockOnClick = jest.fn();
const defaultProps = {
    "id": 0,
    onClick: mockOnClick, 
    "name": "Maltesers",
    "image": "maltesers.jpg",
    "nutrition": {
      "sugar": 52,
      "cal": 503
    },
    "dietary": {
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "nutFree": true
    }
}

const renderer = (props = defaultProps) => render(<SnackTile {...props} />);

describe ("Snack Tile", () => {
    it ("Correctly renders", () => {
        const component = renderer();
        expect(component.queryByTestId(defaultProps.name)).not.toBeNull();
    });

    it ("Correctly expands", () => {
        const component = renderer();
        fireEvent.click(component.queryByTestId(defaultProps.name + "-button"));
        expect(component.queryByTestId("contentArticle").className).toEqual("c-panel is-open");
    }); 
}) ;
