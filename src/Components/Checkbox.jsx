import React from "react";

export const Checkbox = props => {
  return (
    <div
      data-testid="checkbox-wrapper"
      className="o-layout__item u-width-1/4 checkbox"
    >
      <label data-testid="checkbox-label" htmlFor={"checkbox" + props.id}>
        {props.display}{" "}
      </label>
      <br />
      <input
        data-testid="checkbox-input"
        type="checkbox"
        name={props.id}
        id={"checkbox" + props.id}
        value={props.value}
        onChange={e => {
          props.onChange(e, props.id);
        }}
      />
    </div>
  );
};
