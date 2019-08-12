import React, { useState } from "react";
import SnackList from "./Components/SnackList";
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


  // Returns set of snacks based on controls
  const filterSnacks = (event) => {

    let snacks = props.data.snacks;
    let results = snacks;
    const dietary = Object.keys(results[0].dietary);

    // for (let i = 0; i < checkboxes.length; i++) {
    //   if (checkboxes[i]) {
    //     results = results.filter(
    //       item => item.dietary[dietary[i]] === checkboxes[i]
    //     );
    //   }
    // }
    checkboxes.map((checkboxValue, index) => {
      if(checkboxValue) {
        results = results.filter(
          item => item.dietary[dietary[index]] === checkboxes[index]
        );
      }
    })

    setResults(results);
  
  };

  const sortSnacksBySweetness = () => {

    results.sort((a, b) => {
      return a.nutrition.sugar - b.nutrition.sugar;
     });
    if (sliders[0] < 5) {
      results.reverse();
      console.log("High sugar", results[0].nutrition.sugar)
    }
    setResults(results);
  }

  const handleSlide = (event, id) => {
    let newSliders = sliders;
    newSliders[id] = parseInt(event.target.value);
    setSliders(newSliders);
    console.log("Slider vals", sliders);
    sortSnacksBySweetness();
  };

  const handleChange = (type) => (e, id) => {
    if (type === 'slider') {
      handleSlide(e, id)
    } else {
      handleCheck(e, id)
    }
  }

  return (
    <div>
      <Control
        vegetarian={checkboxes[0]}
        vegan={checkboxes[1]}
        glutenFree={checkboxes[2]}
        nutFree={checkboxes[3]}
        onChange={handleChange}
      />
      <SnackList snacks={results} />
      <Footer />
    </div>
  );
}

export default App;
