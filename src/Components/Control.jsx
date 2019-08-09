import React from "react";
import Slider from "./Slider";

function Control() {
  return (
    <div className="o-container">
      <form>
        <div className="o-container">
          <Slider leftLabel="Sweet" rightLabel="Savoury" />
          <br />
          <Slider leftLabel="Healthy" rightLabel="Junk" />
        </div>
        <br />
        <div>
          <div className="o-layout__item u-width-1/4 checkbox">
            <label htmlFor="vegetarian">Vegetarian </label>
            <br />
            <input
              type="checkbox"
              name="vegetarian"
              id="vegetarian"
              value="vegetarian"
            />
          </div>
          <div className="o-layout__item u-width-1/4 checkbox">
            <label htmlFor="vegan">Vegan </label>
            <br />
            <input type="checkbox" name="vegan" id="vegan" value="vegan" />
          </div>
          <div className="o-layout__item u-width-1/4 checkbox">
            <label htmlFor="nutFree">Nut Free </label>
            <br />
            <input
              type="checkbox"
              name="nutFree"
              id="nutFree"
              value="nutFree"
            />
          </div>
          <div className="o-layout__item u-width-1/4 checkbox">
            <label htmlFor="glutenFree">Gluten Free </label>
            <br />
            <input
              type="checkbox"
              name="glutenFree"
              id="glutenFree"
              value="glutenFree"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default Control;
