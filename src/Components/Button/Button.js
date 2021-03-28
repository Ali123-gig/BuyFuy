import React from "react";
import Para from "../Para/Para";
import "./Button.css";

const Button = ({
  children,
  background = "purple",
  style = {},
  color = "white",
  fontSize,
  fontWeight,
  disabled=false,
  ...restProps
}) => {
  return (
    <button
      disabled={disabled}
      {...restProps}
      style={{ background:disabled ?"lightgray":background, color, fontSize, fontWeight, ...style }}
      className="button"
    >
      <Para style={{textDecoration:disabled?"line-through": ""}} color={disabled?"black":color} fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </Para>
    </button>
  );
};

export default Button;
