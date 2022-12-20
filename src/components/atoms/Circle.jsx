import PropTypes from "prop-types";

const Circle = ({ color, size }) => {
  return (
    <svg
      style={{
        display: "block",
        backgroundColor: color,
        height: `${size}px`,
        width: `${size}px`,
        borderRadius: "50%",
      }}
    ></svg>
  );
};

Circle.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Circle;
