import React from "react";
import sandwichIcon from "../assets/sandwich-icon.png";
import "../Styles/FeelingLucky.css";

function FeelingLucky(props) {
  return (
    <div data-testid="feeling-lucky" id="feeling-lucky" className="buttonWrapper">
      <button
        data-testid="feeling-lucky-button"
        onClick={event => props.onClick(event)}
        className="c-btn c-btn--primary"
      >
        <i className="fas fa-hamburger"></i> I'm feeling
        lucky (and hungry!)
      </button>
    </div>
  );
}
export default FeelingLucky;
