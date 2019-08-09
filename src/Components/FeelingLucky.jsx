import React from 'react';
import { tsPropertySignature } from '@babel/types';

function FeelingLucky(props) {
    return (
        <button onClick={(event) => props.onClick(event)} className="c-btn c-btn--primary">
            <p>I'm feeling hungry</p>
            <img
                className="c-btn__icon"
                src="https://www.sky.com/assets/toolkit/docs/buttons/example.svg"
                alt="Example Icon"
            />
        </button>
    );
}
export default FeelingLucky;