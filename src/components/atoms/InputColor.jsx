import React from "react";

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

export default InputColor;
