import React from "react";
import PropTypes from "prop-types";

function InputColor({ shapeName, onChange, color }) {
  return (
    <input
      name="colorPicker"
      type="color"
      id={`colorPicker-${shapeName}`}
      value={color}
      onChange={onChange}
    ></input>
  );
}

InputColor.propTypes = {
  shapeName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default InputColor;
