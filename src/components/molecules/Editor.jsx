import React, { useState } from "react";

// Llamar al editor como nombre no es intuitivo, y a este nivel mezclas 3 tipos de componentes distintos que deberían de estar separados en atomos:
// 1. Label
// 2. InputNumber
// 3. InputColor
const Editor = ({ color, setColor, shape: Shape, size, setSize }) => {
  return (
    <div>
      <div>
        <label htmlFor="sizePicker">{`${Shape.name}`} Size:</label>
        {/* En los inputs falta el name */}
        <input
          type="number"
          id="sizePicker"
          min="0"
          value={size}
          // Para hacer un input más reutilizable es conveniente pasarle el onChange como prop y más arriba hacer lo que necesites con el valor, sino este input solo sirve para recuperar el value
          onChange={(e) => setSize(e.target.value)}
        ></input>
      </div>
      <div>
        {/* Al utilizar mismo id en los 3 se repiten, cada id debería de ser unico */}
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
