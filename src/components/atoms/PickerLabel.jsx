import React from "react";
import PropTypes from "prop-types";

function PickerLabel({ shapeName, type }) {
  return (
    <label htmlFor={`${type.toLowerCase()}Picker-${type}`}>
      {shapeName} {type}:{" "}
    </label>
  );
}

PickerLabel.propTypes = {
  shapeName: PropTypes.string,
  type: PropTypes.oneOf(["Size", "Color"]),
};

export default PickerLabel;
