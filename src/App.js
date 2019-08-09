import React, { useState } from "react";
import SnackList from "./Components/SnackList";
import Footer from "./Components/Footer";
import Control from "./Components/Control";

function App(props) {
  let [checkboxes, setCheckboxes] = useState(Array(4).fill(false)); // checkboxes is an array where the elements are the state values for each checkbox
  let [results, setResults] = useState(props.data.snacks);
  const [sliders, setSliders] = useState(Array(2).fill(5));

  const handleCheck = (event, id) => {
    if (event.type == "checkbox") {
    let newCheckboxes = checkboxes;
    newCheckboxes[id] = !checkboxes[id];
    setCheckboxes(newCheckboxes);
    filterSnacks();
    }
  };


  // Returns set of snacks based on controls
  const filterSnacks = (event) => {

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

  // const sortSnacksBySweetness = () => {
  //   if (sliders[0] >= 5) {
  //     results.sort((a, b) => parseFloat(a.nutrition.calories) - parseFloat(b.nutrition.calories));
  //   }
  // }

  const handleSlide = (event, id) => {
    console.log(event)
    if (event.type == "range") {
      let newSliders = sliders;
      newSliders[id] = parseInt(event.target.value)
      setCheckboxes(newSliders);
      console.log(sliders)
    }
  };

  return (
    <div>
      <Control
        vegetarian={checkboxes[0]}
        vegan={checkboxes[1]}
        glutenFree={checkboxes[2]}
        nutFree={checkboxes[3]}
        onChange={(e, id) => {
          handleCheck(e, id)
          handleSlide(e, id)
        }}
      />
      <SnackList snacks={results} />
      <Footer />
    </div>
  );
}

export default App;
