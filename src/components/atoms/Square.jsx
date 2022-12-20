import React from "react";
import PropTypes from "prop-types";

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

Square.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Square;
