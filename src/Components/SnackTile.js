import React, { useState } from "react";
import "../Styles/SnackTile.css";
import classnames from "classnames";

function SnackTile(props) {
  const [cPanelIsOpen, closePanel] = useState(false);

  return (
    <div data-testid="snack-tile" className="snack-tile">
      <div className="o-layout o-layout--center">
        <div className="o-layout__item u-width-1/2@large">
          <article
            className={classnames({
              "c-tile": true,
              "c-tile--square": true,
              "is-selected": cPanelIsOpen
            })}
          >
            <div className="c-tile__link c-shine-context" href="#">
              <div className="c-tile__content">
                <div className="c-tile__media">
                  <img data-testid="maltesers.jpg"
                    alt=""
                    className="c-tile__poster"
                    src={require("../assets/" + props.image)}
                  />
                </div>
                <div className="c-tile__body c-tile__caption">
                  <h2 data-testid="snack-header" className="c-tile__title c-heading-delta">
                    {props.snackName}
                  </h2>
                  <button
                    className="showmore c-btn c-btn--primary"
                    onClick={() => closePanel(!cPanelIsOpen)}
                  >
                    <img data-testid="snack-image"
                      className="c-btn__icon"
                      src="https://www.sky.com/assets/toolkit/docs/buttons/example.svg"
                      alt=""
                    />
                    {cPanelIsOpen ? "Show Less" : "Show More"}
                  </button>
                </div>
              </div>
              <div className="c-tile__shine c-tile__shine--top c-shine">
                <div className="c-shine__rail" />
              </div>
              <div className="c-tile__shine c-tile__shine--bottom c-shine c-shine--rev">
                <div className="c-shine__rail" />
              </div>
            </div>
          </article>
        </div>
      </div>
      <article
        className={classnames({ "c-panel": true, "is-open": cPanelIsOpen })}
      >
        <div data-testid="info-box" className="c-panel__content">
          <div className="o-container">
            <p>{props.snackDescription}</p>
            <ul className="snack-data">
              <li>Calories: {props.calories} per 100g</li>
              <li>Sugar: {props.sugar}g per 100g</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}

export default SnackTile;
