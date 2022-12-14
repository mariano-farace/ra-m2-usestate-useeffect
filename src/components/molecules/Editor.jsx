import React, { useState } from "react";

const Editor = ({ defaultColor, defaultSize, shape: Shape }) => {
  const [color, setColor] = useState(defaultColor);
  const [size, setSize] = useState(defaultSize);

  return (
    <div>
      <div>
        <label htmlFor="sizePicker">{`${Shape.name}`} Size:</label>
        <input
          type="number"
          id="sizePicker"
          min="0"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        ></input>
        <label htmlFor="colorPicker">{`${Shape.name}`} Color:</label>
        <input
          type="color"
          id="colorPicker"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        ></input>
        <Shape color={color} size={size} />
      </div>
    </div>
  );
};

export default Editor;
