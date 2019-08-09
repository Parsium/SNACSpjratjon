import React, { Component } from "react";
import SnackTile from "./SnackTile.js";
import "../Styles/SnackList.css";

class SnackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snacks: [
        {
          id: 0,
          name: "PBSandwich",
          description: "A pbsandwich",
          calories: "102",
          sugar: 22
        },
        {
          id: 1,
          name: "Digestive",
          description: "A lovely digestive biscuit",
          calories: "50",
          sugar: 18
        }
      ]
    };
  }

  render() {
    return (
      <div className="snack-list">
        <h2>Your recommended snacks!</h2>
        <div className="snack-list-container">
          {this.props.snacks.map(snack => (
            <SnackTile
              key={snack.id}
              snackName={snack.name}
              snackDescription={snack.description}
              calories={snack.nutrition.cal}
              sugar={snack.nutrition.sugar}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SnackList;
