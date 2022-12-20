import React from "react";

const Triangle = ({ color, size }) => {
  return (
    <svg
      style={{
        display: "block",
        height: 0,
        width: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid ${color}`,
      }}
    ></svg>
  );
};

export default Triangle;
