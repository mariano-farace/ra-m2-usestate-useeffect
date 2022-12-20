import ShapeLabel from "../atoms/ShapeLabel";

const Editor = ({ color, setColor, shape: Shape, size, setSize }) => {
  return (
    <div>
      <div>
        <ShapeLabel shapeName={Shape.name} />
        <input
          name="sizePicker"
          type="number"
          id="sizePicker"
          min="0"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="colorPicker">{`${Shape.name}`} Color: </label>
        <input
          name="colorPicker"
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
