import React from "react";

const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontWeight: "bold",
    fontSize: "18px",
    margin: "16px"
  };
  return <p style={contentStyle}>props.message</p>;
};

export default ColorfulMessage;
