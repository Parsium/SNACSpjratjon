import React, { useState } from "react";
import SnackList from "./Components/SnackList";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import Control from "./Components/Control";

function App(props) {
  let [checkboxes, setCheckboxes] = useState(Array(4).fill(false)); // checkboxes is an array where the elements are the state values for each checkbox

  const handleCheck = (event, id) => {
    let newCheckboxes = checkboxes;
    newCheckboxes[id] = !checkboxes[id];
    setCheckboxes(newCheckboxes);

    filterSnacks();
  };

  // Returns set of snacks based on controls
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
    console.log(results);
    return results;
  };

  return (
    <div>
      <Header />
      <Control
        vegetarian={checkboxes[0]}
        vegan={checkboxes[1]}
        glutenFree={checkboxes[2]}
        nutFree={checkboxes[3]}
        onChange={(e, id) => handleCheck(e, id)}
      />
      <SnackList />
      <Footer />
    </div>
  );
}

export default App;
