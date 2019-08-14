import React from "react";
import "../Styles/form.css";

export const Slider = props => {
  // const [value, setValue] = useState(5);

  // const handleChange = event => {
  //   setValue(event.target.value);
  // };
  return (
    <div
      data-testid="slider-wrapper"
      className="slidecontainer "
      id={`sliderContainer${props.id}`}
    >
      <p
        data-testid="slider-left-label"
        id={"leftLabel" + props.id}
        className="leftLabel"
      >
        {props.leftLabel}
      </p>
      <input
        data-testid="slider-input"
        aria-labelledby={`leftLabel${props.id} rightLabel${props.id}`}
        className="slider"
        type="range"
        min="0"
        max="10"
        value={undefined}
        id={props.id}
        onChange={e => {
          props.onChange(e, props.id);
        }}
      />
      <p
        data-testid="slider-right-label"
        id={"rightLabel" + props.id}
        className="rightLabel"
      >
        {props.rightLabel}
      </p>
    </div>
  );
};

// export default Slider;
