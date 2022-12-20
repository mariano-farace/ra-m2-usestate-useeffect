import React from "react";

function ShapeLabel({ shapeName }) {
  return <label htmlFor="sizePicker">{shapeName} Size: </label>;
}

export default ShapeLabel;
