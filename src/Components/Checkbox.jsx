import React, { useState } from "react";

export const Checkbox = props => {
  const [checked, setChecked] = useState(false);

  const handleChange = event => {
    setChecked(!checked);
  };

  return (
    <div className="o-layout__item u-width-1/4 checkbox">
      <label htmlFor={props.id}>{props.display} </label>
      <br />
      <input
        type="checkbox"
        name={props.id}
        id={props.id}
        value={checked}
        onChange={handleChange}
      />
    </div>
  );
};
