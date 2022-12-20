import React from "react";

function ShapeLabel({ shapeName }) {
  console.log("shapeName::", shapeName);
  return <label htmlFor="sizePicker">{shapeName} Size: </label>;
}

export default ShapeLabel;
