import PropTypes from "prop-types";

function PickerLabel({ shapeName, type }) {
  return (
    <label htmlFor={`${type.toLowerCase()}Picker-${type}`}>
      {shapeName} {type}:{" "}
    </label>
  );
}

PickerLabel.propTypes = {
  shapeName: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["Size", "Color"]).isRequired,
};

export default PickerLabel;
