import React, {Component} from 'react';
import "../Styles/SnackTile.css";
import PBSandwich from '../assets/PBSandwich.jpeg';

class SnackTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
         }
    }

    render() {
        return (
          <div className="snack-tile-container">
            <div className="o-layout o-layout--center">
              <div className="o-layout__item u-width-1/2@large">
                <article className="c-tile c-tile--square is-selected">
                  <a className="c-tile__link c-shine-context" href="#">
                    <div className="c-tile__content">
                      <div className="c-tile__media">
                        <img alt="Peanut Butter Sandwich" className="c-tile__poster" src={PBSandwich} />
                      </div>
                      <div className="c-tile__body c-tile__caption">
                        <p className="c-tile__title c-heading-delta">{ this.props.snackName }</p>
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
                  <p>{ this.props.snackDescription }</p>
                  <ul className="snack-data">
                    <li>Calories: { this.props.calories }g per 100g</li>
                    <li>Sugar: { this.props.sugar }g per 100g</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          );
    }
}
export default SnackTile;
