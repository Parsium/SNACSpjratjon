import React, { useState } from "react";
import SnackList from "./Components/SnackList";
import Footer from "./Components/Footer";
import Control from "./Components/Control";
import FeelingLucky from "./Components/FeelingLucky";

function App(props) {
  let [checkboxes, setCheckboxes] = useState(Array(4).fill(false)); // checkboxes is an array where the elements are the state values for each checkbox
  let [results, setResults] = useState(props.data.snacks);

  const handleCheck = (event, id) => {
    let newCheckboxes = checkboxes;
    newCheckboxes[id] = !checkboxes[id];
    setCheckboxes(newCheckboxes);

    filterSnacks();
  };

  // Get entire list of snacks and update state to display a random one.
  const randomiseSnack = (event) => {
    let snacks = props.data.snacks;
    const randomSnack = snacks[Math.floor(Math.random()*snacks.length)];

    setResults([randomSnack]);
  };

  // Based from selected controls, update state to display relevant snacks.
  const filterSnacks = () => {
    let snacks = props.data.snacks;
    let results = snacks;
    const dietary = Object.keys(snacks[0].dietary);

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i]) {
        results = results.filter(
          item => item.dietary[dietary[i]] === checkboxes[i]
        );
      }
    }
    setResults(results);
  };

  return (
    <div>
      <Control
        vegetarian={checkboxes[0]}
        vegan={checkboxes[1]}
        glutenFree={checkboxes[2]}
        nutFree={checkboxes[3]}
        onChange={(e, id) => handleCheck(e, id)}
      />
      <FeelingLucky onClick={() => randomiseSnack()}/>
      <SnackList snacks={results} />
      <Footer />
    </div>
  );
}

export default App;
