import React, { Component } from "react";
import SnackTile from "./SnackTile.js"

class SnackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            snacks: [
                {
                    name: "PBSandwich",
                    description: "A pbsandwich",
                    calories: "102",
                    sugar: 22
                },
                {
                    name: "Digestive",
                    description: "A lovely digestive biscuit",
                    calories: "50",
                    sugar: 18
                },
            ]
        }
    }

    render() {
        return (
            <div className="snack-list">
                {
                    this.state.snacks.map((snack) => 
                        <SnackTile 
                            snackName={snack.name}
                            snackDescription={snack.description}
                            calories={snack.calories}
                            sugar={snack.sugar}
                            />
                    ) 
                }
            </div>
        );
    }
}

export default SnackList;