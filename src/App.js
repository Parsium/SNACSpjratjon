import React, { useState } from "react";
import { Header } from "./Components/Header";
import { SnackList } from "./Components/SnackList";
import Footer from "./Components/Footer";
import Control from "./Components/Control";
import FeelingLucky from "./Components/FeelingLucky";

function App(props) {
  let [checkboxes, setCheckboxes] = useState(Array(4).fill(false)); // checkboxes is an array where the elements are the state values for each checkbox
  let [results, setResults] = useState(props.data.data.snacks);
  const [sliders, setSliders] = useState(Array(2).fill(5));

  console.log("results: ", results);

  const handleCheck = (event, id) => {
    let newCheckboxes = checkboxes;
    newCheckboxes[id] = !checkboxes[id];
    setCheckboxes(newCheckboxes);
    filterSnacks();
  };

  // Get entire list of snacks and update state to display a random one.
  const randomiseSnack = event => {
    let snacks = props.data.snacks;
    const randomSnack = snacks[Math.floor(Math.random() * snacks.length)];

    setResults([randomSnack]);
  };

  // Based from selected controls, update state to display relevant snacks.
  const filterSnacks = event => {
    var newResults = props.data.data.snacks;
    const dietary = [
      "vegetarian",
      "vegan",
      "nutFree",
      "glutenFree"
    ]
    
    checkboxes.map((checkboxValue, index) => {
      if (checkboxValue) {
        newResults = newResults.filter(
          item => item[dietary[index]] === checkboxes[index]
        );
      }
    });
    if (prioritiseSweetness()) {
      sortSnacksBySweetness(newResults);
    } else {
      sortSnacksByThinness(newResults);
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
      return a.sugar - b.sugar;
    });
    if (sliders[0] <= 5) {
      newResults.reverse();
    }
    setResults(newResults);
  };

  const sortSnacksByThinness = newResults => {
    newResults.sort((a, b) => {
      return a.cal - b.cal;
    });
    if (sliders[1] <= 5) {
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
      sortSnacksByThinness(newResults);
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
      <header>
        <Header />
      </header>
      <main>
        <Control
          vegetarian={checkboxes[0]}
          vegan={checkboxes[1]}
          glutenFree={checkboxes[2]}
          nutFree={checkboxes[3]}
          onChange={handleChange}
        />
        <FeelingLucky onClick={() => randomiseSnack()} />
        <SnackList key={results[0].name} snacks={results} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
