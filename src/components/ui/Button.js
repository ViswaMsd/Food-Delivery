import React from "react";
import "./Button.css"


function Button(props) {
    const classes = 'btn ' + props.className;
  return (
    <button type="props.type" className={classes}>
      {props.children}
    </button>
  );
}

export default Button;
