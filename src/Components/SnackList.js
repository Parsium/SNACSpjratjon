import React from "react";
import SnackTile from "./SnackTile.js";
import "../Styles/SnackList.css";

export const SnackList = props => {
  return (
    <div data-testid="snack-list" className="snack-list">
      <h1 id="snackList-header" data-testid="snack-list-header" className="c-heading-alpha">
        Your Recommended Snacks
      </h1>
      <div className="snack-list-container">
        {props.snacks.map(snack => (
          <SnackTile
            key={snack.id}
            snackName={snack.name}
            image={snack.image}
            snackDescription={snack.description}
            calories={snack.nutrition.cal}
            sugar={snack.nutrition.sugar}
            vegetarian={snack.dietary.vegetarian.toString()}
            nutFree={snack.dietary.nutFree.toString()}
          />
        ))}
      </div>
    </div>
  );
};
