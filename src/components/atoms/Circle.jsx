import React from "react";

const Circle = ({ color, size }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: `${size}px`,
        width: `${size}px`,
        borderRadius: "50%",
      }}
    ></div>
  );
};

export default Circle;
