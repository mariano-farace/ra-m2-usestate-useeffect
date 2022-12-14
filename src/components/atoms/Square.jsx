import React from "react";

const Square = ({ color, size }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: `${size}px`,
        width: `${size}px`,
      }}
    ></div>
  );
};

export default Square;
