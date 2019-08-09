import React from "react";
import { Slider } from "./Slider";
import { Checkbox } from "./Checkbox";

function Control() {
  return (
    <div className="o-container">
      <form>
        <div className="o-container">
          <Slider id="sweetness" leftLabel="Sweet" rightLabel="Savoury" />
          <br />
          <Slider id="healthiness" leftLabel="Healthy" rightLabel="Junk" />
        </div>
        <br />
        <div>
          <Checkbox id="vegetarian" display="Vegetarian" />
          <Checkbox id="vegan" display="Vegan" />
          <Checkbox id="gluten-free" display="Gluten Free" />
          <Checkbox id="nut-free" display="Nut Free" />
        </div>
      </form>
    </div>
  );
}
export default Control;
