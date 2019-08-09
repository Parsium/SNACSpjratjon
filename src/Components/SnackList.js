import React, { Component } from "react";
import SnackTile from "./SnackTile.js";
import "../Styles/SnackList.css";

class SnackList extends Component {
  constructor(props) {
    super(props);
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
              image={snack.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SnackList;
