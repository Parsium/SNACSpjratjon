import React, {Component} from 'react';
import PBSandwich from '../assets/PBSandwich.jpeg'

class SnackTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sancks: []
         }
    }


    render() {
        return (
          <div>
            <div className="o-layout o-layout--center">
              <div className="o-layout__item u-width-1/2@large">
                <article className="c-tile c-tile--square is-selected">
                  <a className="c-tile__link c-shine-context" href="#">
                    <div className="c-tile__content">
                      <div className="c-tile__media">
                        <img alt="Peanut Butter Sandwich" className="c-tile__poster" src={PBSandwich} />
                      </div>
                      <div className="c-tile__body c-tile__caption">
                        <p className="c-tile__title c-heading-delta">Tile Title</p>
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
            <article className="c-panel is-open">
              <div className="c-panel__content">
                <a className="c-panel__toggle" href="#1">Close</a>
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
}

export default SnackTile;
