import React from "react";

const Square = ({ color, size }) => {
  return (
    <svg
      style={{
        display: "block",
        backgroundColor: color,
        height: `${size}px`,
        width: `${size}px`,
      }}
    ></svg>
  );
};

export default Square;
