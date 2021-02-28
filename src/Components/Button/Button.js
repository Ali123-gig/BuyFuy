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
  ...restProps
}) => {
  return (
    <button
      {...restProps}
      style={{ background, color, fontSize, fontWeight, ...style }}
      className="button"
    >
      <Para color fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </Para>
    </button>
  );
};

export default Button;
