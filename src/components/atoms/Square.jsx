import React from "react";

const Square = ({ color, size }) => {
  console.log("size: ", size);
  return (
    <div style={{ backgroundColor: color, height: size, width: size }}></div>
  );
};

export default Square;
