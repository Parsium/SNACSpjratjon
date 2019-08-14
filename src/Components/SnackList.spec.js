import React from "react";
import { render, fireEvent, within } from "@testing-library/react";
import { SnackList } from "./SnackList";
import { exportAllDeclaration } from "@babel/types";

const defaultProps = {
    "snacks": [
      {
        "id": 0,
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
      },
      {
        "id": 1,
        "name": "Digestive Biscuits",
        "image": "digestives.jpg",
        "nutrition": {
          "sugar": 16.6,
          "cal": 481
        },
        "dietary": {
          "vegetarian": true,
          "vegan": false,
          "glutenFree": false,
          "nutFree": true
        }
      },
      {
        "id": 2,
        "name": "Biscuit Moments",
        "image": "specialK.jpg",
        "nutrition": {
          "sugar": 27,
          "cal": 383
        },
        "dietary": {
          "vegetarian": true,
          "vegan": false,
          "glutenFree": false,
          "nutFree": true
        }
      },
      {
        "id": 3,
        "name": "Brazil Nuts",
        "image": "brazil.jpg",
        "nutrition": {
          "sugar": 2.3,
          "cal": 687.4
        },
        "dietary": {
          "vegetarian": true,
          "vegan": true,
          "glutenFree": true,
          "nutFree": false
        }
      },
      {
        "id": 4,
        "name": "Blueberry Muffin",
        "image": "muffin.png",
        "nutrition": {
          "sugar": 29,
          "cal": 277
        },
        "dietary": {
          "vegetarian": true,
          "vegan": false,
          "glutenFree": false,
          "nutFree": false
        }
      },
      {
        "id": 5,
        "name": "PB Sandwich",
        "image": "PBSandwich.jpeg",
        "nutrition": {
          "sugar": 6.9,
          "cal": 368
        },
        "dietary": {
          "vegetarian": true,
          "vegan": true,
          "glutenFree": false,
          "nutFree": false
        }
      },
      {
        "id": 6,
        "name": "Banana",
        "image": "banana.jpeg",
        "nutrition": {
          "sugar": 27.5,
          "cal": 105
        },
        "dietary": {
          "vegetarian": true,
          "vegan": true,
          "glutenFree": true,
          "nutFree": true
        }
      },
      {
        "id": 7,
        "name": "Sausage Roll",
        "image": "sausage.jpg",
        "nutrition": {
          "sugar": 0.18,
          "cal": 351
        },
        "dietary": {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": false,
          "nutFree": true
        }
      },
      {
        "id": 8,
        "name": "Cheese",
        "image": "cheese.jpg",
        "nutrition": {
          "sugar": 3.5,
          "cal": 350
        },
        "dietary": {
          "vegetarian": true,
          "vegan": false,
          "glutenFree": true,
          "nutFree": true
        }
      },
      {
        "id": 9,
        "name": "Beef Jerky",
        "image": "beef.jpg",
        "nutrition": {
          "sugar": 9,
          "cal": 410
        },
        "dietary": {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": true,
          "nutFree": true
        }
      }
    ]
  }
  
const renderer = (props = defaultProps) => render (<SnackList {...props} />);

describe("Snack List", () => {
    it ("Correctly renders with props", () => {
        const component = renderer();
        expect(component.queryByTestId("snack-list")).not.toBeNull();
    });

    it ("Correctly loads snack tiles", () => {
        const component = renderer();
        const snackList = component.queryByTestId("snack-list");
        const tilesInList = within(snackList).getAllByTestId("snack-tile");
        expect(tilesInList.length).toBe(10);
    });

    it ("Correctly displays the section header", () => {
        const component = renderer();
        expect(component.queryByTestId("snack-list-header").textContent).not.toBeNull();
    });
})