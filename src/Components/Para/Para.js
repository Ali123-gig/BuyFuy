import React from "react";
import "./Para.css";

var fontWeightEstimater = (WeightStr) => {
  switch (WeightStr) {
    case "light":
      return 300;
    case "regular":
      return 400;
    case "semi-bold":
      return 600;
    case "bold":
      return 700;

    default:
      return 400;
  }
};
const Para = ({
  children,
  fontSize = 16,
  fontWeight = "bold",
  style = {},
  color = "black",
  ...restProps
}) => {
  var fontWeightValue = fontWeightEstimater(fontWeight);
  var fontSizeValue = fontSize / 10;
  return (
    <div
    {...restProps}
      className="Para"
      style={{
        fontWeight: fontWeightValue,
        fontSize: `${fontSizeValue}em`,
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Para;
