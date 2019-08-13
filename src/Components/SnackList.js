import React from "react";
import SnackTile from "./SnackTile.js";
import "../Styles/SnackList.css";

export const SnackList = props => {
  return (
    <div className="snack-list">
      <h1 id="snackList-header" className="c-heading-alpha">
        Your recommended snacks!
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
          />
        ))}
      </div>
    </div>
  );
};
