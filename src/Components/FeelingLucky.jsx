import React from 'react';
import sandwichIcon from '../assets/sandwich-icon.png';

function FeelingLucky(props) {
    return (
        <button onClick={(event) => props.onClick(event)} className="c-btn c-btn--primary">
            <img
                className="c-btn__icon"
                src={sandwichIcon}
                alt="Example Icon"
            /> I'm feeling hungry
        </button>
    );
}
export default FeelingLucky;