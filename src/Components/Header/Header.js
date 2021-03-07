import React from "react";
import "./Header.css";

var fontWeightEstimater = (WeightStr) => {
  switch (WeightStr) {
    case "light":
      return 300;
    case "regular":
      return 400;
    case "semi-bold":
      return 500;
    case "bold":
      return 700;

    default:
      return 400;
  }
};
const Header = ({
  children,
  fontSize = 16,
  fontWeight = "bold",
  style = {},
  color = "black",
  ...resProps
}) => {
  var fontWeightValue = fontWeightEstimater(fontWeight);
  var fontSizeValue = fontSize / 10;
  return (
    <div
      {...resProps}
      className="Header"
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

export default Header;
