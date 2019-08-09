import React, { useState } from "react";
import "./form.css";

function Slider(props) {
  const [value, setValue] = useState(5);

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <div className="slidecontainer " id="sliderContainer">
      <label htmlFor="slider" className="leftLabel">
        {props.leftLabel}
      </label>
      <input
        className="slider"
        type="range"
        min="1"
        max="10"
        value={value}
        id="slider"
        onChange={handleChange}
      />
      <label className="rightLabel" htmlFor="slider">
        {props.rightLabel}
      </label>
    </div>
  );
}

export default Slider;
