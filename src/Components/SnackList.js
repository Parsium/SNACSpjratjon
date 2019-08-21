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
            calories={snack.calories}
            sugar={snack.sugar}
            vegetarian={snack.vegetarian.toString()}
            nutFree={snack.nutFree.toString()}
          />
        ))}
      </div>
    </div>
  );
};
