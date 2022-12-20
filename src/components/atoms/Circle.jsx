import React from "react";

const Circle = ({ color, size }) => {
  return (
    <svg
      style={{
        display: "block",
        backgroundColor: color,
        height: `${size}px`,
        width: `${size}px`,
        borderRadius: "50%",
      }}
    ></svg>
  );
};

export default Circle;
