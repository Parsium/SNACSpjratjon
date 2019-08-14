import React from "react";

export const Checkbox = props => {
  return (
    <div className="o-layout__item u-width-1/4 checkbox">
      <label htmlFor={"checkbox" + props.id}>{props.display} </label>
      <br />
      <input
        data-testid={"checkbox-" + props.id}
        type="checkbox"
        name={props.name}
        id={"checkbox" + props.id}
        value={props.value}
        onChange={e => {
          props.onChange(e, props.id);
        }}
      />
    </div>
  );
};
