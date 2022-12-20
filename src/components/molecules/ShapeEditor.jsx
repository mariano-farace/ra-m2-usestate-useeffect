import { PickerLabel, InputNumber, InputColor } from "../atoms";
import PropTypes from "prop-types";

const ShapeEditor = ({ color, setColor, shape: Shape, size, setSize }) => {
  const onChangeSize = (e) => setSize(e.target.value);
  const onChangeColor = (e) => setColor(e.target.value);

  return (
    <div>
      <div>
        <PickerLabel shapeName={Shape.name} type="Size" />
        <InputNumber
          shapeName={Shape.name}
          onChange={onChangeSize}
          size={size}
        />
      </div>
      <div>
        <PickerLabel shapeName={Shape.name} type="Color" />
        <InputColor
          shapeName={Shape.name}
          onChange={onChangeColor}
          color={color}
        />
        <Shape color={color} size={size} />
      </div>
    </div>
  );
};

ShapeEditor.propTypes = {
  setColor: PropTypes.func.isRequired,
  setSize: PropTypes.func.isRequired,
  shape: PropTypes.elementType.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default ShapeEditor;
