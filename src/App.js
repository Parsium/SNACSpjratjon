import React, { useState, useEffect } from "react";
import { SnackList } from "./Components/SnackList";
import Footer from "./Components/Footer";
import Control from "./Components/Control";

function App(props) {
  let [checkboxes, setCheckboxes] = useState(Array(4).fill(false)); // checkboxes is an array where the elements are the state values for each checkbox
  let [results, setResults] = useState(props.data.snacks);
  const [sliders, setSliders] = useState(Array(2).fill(5));

  const handleCheck = (event, id) => {
    let newCheckboxes = checkboxes;
    newCheckboxes[id] = !checkboxes[id];
    setCheckboxes(newCheckboxes);
    filterSnacks();
  };

  const filterSnacks = event => {
    var newResults = props.data.snacks;
    const dietary = Object.keys(results[0].dietary);
    checkboxes.map((checkboxValue, index) => {
      if (checkboxValue) {
        newResults = newResults.filter(
          item => item.dietary[dietary[index]] === checkboxes[index]
        );
      }
    });
    if (prioritiseSweetness()) {
      sortSnacksBySweetness(newResults);
    } else {
      sortSnacksByFatness(newResults);
    }
  };

  const prioritiseSweetness = () => {
    let sweetnessDifference = Math.abs(5 - sliders[0]);
    let fatnessDifference = Math.abs(5 - sliders[1]);
    if (sweetnessDifference >= fatnessDifference) {
      return true;
    }
  };

  const sortSnacksBySweetness = newResults => {
    newResults.sort((a, b) => {
      return a.nutrition.sugar - b.nutrition.sugar;
    });
    if (sliders[0] < 5) {
      newResults.reverse();
    }
    setResults(newResults);
  };

  const sortSnacksByFatness = newResults => {
    newResults.sort((a, b) => {
      return a.nutrition.cal - b.nutrition.cal;
    });
    if (sliders[1] > 5) {
      newResults.reverse();
    }
    setResults(newResults);
  };

  const handleSlide = (event, id) => {
    let newSliders = sliders;
    newSliders[id] = parseInt(event.target.value);
    setSliders(newSliders);
    let newResults = results.slice(0);
    if (id === 0) {
      sortSnacksBySweetness(newResults);
    } else if (id === 1) {
      sortSnacksByFatness(newResults);
    }
  };

  const handleChange = type => (e, id) => {
    if (type === "slider") {
      handleSlide(e, id);
    } else {
      handleCheck(e, id);
    }
  };

  return (
    <div>
      <Control
        vegetarian={checkboxes[0]}
        vegan={checkboxes[1]}
        glutenFree={checkboxes[2]}
        nutFree={checkboxes[3]}
        onChange={handleChange}
      />
      <SnackList key={results[0].name} snacks={results} />
      <Footer />
    </div>
  );
}

export default App;
