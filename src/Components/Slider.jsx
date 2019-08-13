import React from "react";
import "./form.css";

export const Slider = props => {
  // const [value, setValue] = useState(5);

  // const handleChange = event => {
  //   setValue(event.target.value);
  // };
  return (
    <div className="slidecontainer " id="sliderContainer">
      <label htmlFor="slider" className="leftLabel">
        {props.leftLabel}
      </label>
      <input
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
      <label className="rightLabel" htmlFor="slider">
        {props.rightLabel}
      </label>
    </div>
  );
};

// export default Slider;
