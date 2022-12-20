import React from "react";
import PropTypes from "prop-types";

function InputNumber({ shapeName, onChange, size }) {
  return (
    <input
      name="sizePicker"
      type="number"
      id={`sizePicker-${shapeName}`}
      min="0"
      value={size}
      onChange={onChange}
    ></input>
  );
}

InputNumber.propTypes = {
  shapeName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
};

export default InputNumber;
