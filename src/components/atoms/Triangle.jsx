import React from "react";

const Triangle = ({ color, size }) => {
  return (
    // Cambiar el div por un svg, es más semántico y más fácil de manipular
    <div
      style={{
        height: 0,
        width: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid ${color}`,
      }}
    ></div>
  );
};

// Validar las props con propTypes
export default Triangle;
