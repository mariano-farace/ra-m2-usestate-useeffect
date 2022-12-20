import React from "react";

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

export default InputNumber;
