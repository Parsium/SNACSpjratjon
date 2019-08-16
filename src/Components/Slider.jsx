import React from "react";
import "../Styles/form.css";

export const Slider = props => {
  return (
    <div 
      data-testid={"slider-" + props.id}
      className="slidecontainer" 
      id={`sliderContainer${props.id}`}>
      <p data-testid="left-label" id={"leftLabel" + props.id} className="leftLabel">
        {props.leftLabel}
      </p>
      <input
        aria-labelledby={`leftLabel${props.id} rightLabel${props.id}`}
        className="slider"
        type="range"
        min="0"
        max="10"
        value={props.value}
        id={props.id}
        onChange={e => {
          props.onChange(e, props.id);
        }}
      />
      <p data-testid="right-label" id={"rightLabel" + props.id} className="rightLabel">
        {props.rightLabel}
      </p>
    </div>
  );
};
