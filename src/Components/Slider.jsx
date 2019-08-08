import React, { useState } from "react";

function Slider(props) {
  const [value, setValue] = useState(5);

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <div id="sliderContainer">
      <label htmlFor="slider">{props.leftLabel}</label>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        id="slider"
        onChange={handleChange}
      />
      <label htmlFor="slider">{props.rightLabel}</label>
    </div>
  );
}

export default Slider;
