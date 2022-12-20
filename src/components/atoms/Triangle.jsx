import React from "react";
import PropTypes from "prop-types";

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

Triangle.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Triangle;
