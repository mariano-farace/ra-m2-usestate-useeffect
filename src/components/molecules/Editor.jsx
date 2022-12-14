import React, { useState } from "react";

const Editor = ({ defaultColor, defaultSize, shape: Shape }) => {
  const [color, setColor] = useState(defaultColor);
  const [size, setSize] = useState(defaultSize);

  return (
    <div>
      <Shape color={color} size={size} />
      <div>
        <label htmlFor="colorPicker">Color Picker:</label>
        <input
          type="color"
          id="colorPicker"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        ></input>
        <label htmlFor="sizePicker">Size Picker:</label>
        <input
          type="number"
          id="sizePicker"
          min="0"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Editor;
