import React from "react";
import { Slider } from "./Slider";
import { Checkbox } from "./Checkbox";
import "../Styles/Control.css";

function Control({ onChange, vegetarian, vegan, glutenFree, nutFree }) {
  return (
    <div className="o-container">
      <form>
        <div className="o-container">
          <Slider
            id={0}
            name="sweetness"
            leftLabel="Sweet"
            rightLabel="Savoury"
            onChange={onChange("slider")}
          />
          <br />
          <Slider
            id={1}
            name="healthiness"
            leftLabel="Junk"
            rightLabel="Healthy"
            onChange={onChange("slider")}
          />
        </div>
        <br />
        <div>
          <Checkbox
            id={0}
            name="vegetarian"
            display="Vegetarian"
            value={vegetarian}
            onChange={onChange("checkbox")}
          />
          <Checkbox
            id={1}
            name="vegan"
            value={vegan}
            display="Vegan"
            onChange={onChange("checkbox")}
          />
          <Checkbox
            id={2}
            name="gluten-free"
            value={glutenFree}
            display="Gluten Free"
            onChange={onChange("checkbox")}
          />
          <Checkbox
            id={3}
            name="nut-free"
            value={nutFree}
            display="Nut Free"
            onChange={onChange("checkbox")}
          />
        </div>
      </form>
    </div>
  );
}
export default Control;
