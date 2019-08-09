import React from "react";
import { Slider } from "./Slider";
import { Checkbox } from "./Checkbox";

function Control(props) {
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
          <Checkbox
            id={0}
            name="vegetarian"
            display="Vegetarian"
            value={props.vegetarian}
            onChange={props.onChange}
          />
          <Checkbox
            id={1}
            name="vegan"
            value={props.vegan}
            display="Vegan"
            onChange={props.onChange}
          />
          <Checkbox
            id={2}
            name="gluten-free"
            value={props.glutenFree}
            display="Gluten Free"
            onChange={props.onChange}
          />
          <Checkbox
            id={3}
            name="nut-free"
            value={props.nutFree}
            display="Nut Free"
            onChange={props.onChange}
          />
        </div>
      </form>
    </div>
  );
}
export default Control;
