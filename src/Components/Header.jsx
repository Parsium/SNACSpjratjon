import React from "react";
import "../Styles/Header.css";

export const Header = () => {
  return (
    <div
      data-testid="header"
      className="c-hero"
      style={{
        "backgroundImage":
          "url('https://i.pinimg.com/originals/06/9a/1a/069a1aab9b54d8021db78d023c5bdee5.jpg')",
        "backgroundPositionY": "100%"
      }}
    >
      <div className="c-hero__caption">
        <div className="o-container">
          <a className="c-hero__link" href="#1">
            <h1 id="HeaderTitle" className="c-heading-alpha u-margin-bottom-none">
              SNACSpjratjon
            </h1>
            <h2 id="HeaderSubtitle" className="c-heading-delta u-margin-bottom">
              Help Me Choose a Snack
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
};
