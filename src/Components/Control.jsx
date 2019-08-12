import React from "react";
import { Slider } from "./Slider";
import { Checkbox } from "./Checkbox";

function Control(props) {
  return (
    <div className="o-container">
      <form>
        <div className="o-container">
          <Slider id="slider-0" name="sweetness" leftLabel="Sweet" rightLabel="Savoury" onChange={props.onChange}/>
          <br />
          <Slider id="slider-1" name="healthiness" leftLabel="Healthy" rightLabel="Junk" onChange={props.onChange}/>
        </div>
        <br />
        <div>
          <Checkbox
            id="checkbox-0"
            name="vegetarian"
            display="Vegetarian"
            value={props.vegetarian}
            onChange={props.onChange}
          />
          <Checkbox
            id="checkbox-1"
            name="vegan"
            value={props.vegan}
            display="Vegan"
            onChange={props.onChange}
          />
          <Checkbox
            id="checkbox-2"
            name="gluten-free"
            value={props.glutenFree}
            display="Gluten Free"
            onChange={props.onChange}
          />
          <Checkbox
            id="checkbox-3"
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
