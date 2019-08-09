import React, {useState} from 'react';
import PBSandwich from '../assets/PBSandwich.jpeg'
import classnames from 'classnames';

function SnackTile() { 

    const [cPanelIsOpen, closePanel] = useState(false);

        return (
            <div>
            <div className="o-layout o-layout--center">
  <div className="o-layout__item u-width-1/2@large">
    <article className={classnames({'c-tile': true, 'c-tile--square': true, 'is-selected': cPanelIsOpen})}>
      <a className="c-tile__link c-shine-context" href="#">
        <div className="c-tile__content">
          <div className="c-tile__media">
            <img alt="Peanut Butter Sandwich" className="c-tile__poster" src={PBSandwich} />
          </div>
          <div className="c-tile__body c-tile__caption">
            <p className="c-tile__title c-heading-delta">Tile Title</p>
            <button className="c-btn c-btn--primary" onClick={() => closePanel(!cPanelIsOpen)}>
                <img className="c-btn__icon" src="https://www.sky.com/assets/toolkit/docs/buttons/example.svg" alt="Example Icon" />
                { cPanelIsOpen ? "Show Less" : "Show More" }
            </button>
          </div>
        </div>
        <div className="c-tile__shine c-tile__shine--top c-shine">
          <div className="c-shine__rail"></div>
        </div>
        <div className="c-tile__shine c-tile__shine--bottom c-shine c-shine--rev">
          <div className="c-shine__rail"></div>
        </div>
      </a>
    </article>
  </div>
</div>
<article className={classnames({'c-panel': true, 'is-open': cPanelIsOpen})}>
  <div className="c-panel__content">
    <div className="o-container">
      <p className="c-text-body  u-text-constrain">
       This is a peanut butter sandwich!!!x
      </p>
    </div>
  </div>
</article>
</div>
          );
    }
 
export default SnackTile;