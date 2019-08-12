import React from 'react';
import sandwichIcon from '../assets/sandwich-icon.png';
import '../Styles/FeelingLucky.css';

function FeelingLucky(props) {
    return (
        <button id="primary-button" onClick={(event) => props.onClick(event)} className="c-btn c-btn--primary">
            <img
                className="c-btn__icon"
                src={sandwichIcon}
                alt="Example Icon"
            /> I'm feeling lucky (and hungry!)
        </button>
    );
}
export default FeelingLucky;