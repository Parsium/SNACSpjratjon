import React from "react";
import sandwichIcon from "../assets/sandwich-icon.png";
import "../Styles/FeelingLucky.css";

function FeelingLucky(props) {
  return (
    <div class="buttonWrapper">
      <button
        onClick={event => props.onClick(event)}
        className="c-btn c-btn--primary"
      >
        <img className="c-btn__icon" src={sandwichIcon} alt="" /> I'm feeling
        lucky (and hungry!)
      </button>
    </div>
  );
}
export default FeelingLucky;
