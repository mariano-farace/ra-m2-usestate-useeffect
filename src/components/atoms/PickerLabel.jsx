import React from "react";

function PickerLabel({ shapeName, type }) {
  return (
    <label htmlFor={`${type.toLowerCase()}Picker-${type}`}>
      {shapeName} {type}:{" "}
    </label>
  );
}

export default PickerLabel;
