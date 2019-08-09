import React from "react";
import "../Styles/Header.css";

export const Header = () => {
  return (
    <div
      class="c-hero"
      style={{
        "background-image":
          "url('https://i.pinimg.com/originals/06/9a/1a/069a1aab9b54d8021db78d023c5bdee5.jpg')",
        "background-position-y": "100%"
      }}
    >
      <div class="c-hero__caption">
        <div class="o-container">
          <a class="c-hero__link" href="#1">
            <p id="HeaderTitle" class="c-heading-alpha u-margin-bottom-none">
              SNACSpjratjon
            </p>
            <p id="HeaderSubtitle" class="c-heading-delta u-margin-bottom">
              Help Me Choose a Snack
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};
