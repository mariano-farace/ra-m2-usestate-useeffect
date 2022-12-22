import PropTypes from "prop-types";

const Triangle = ({ color, size }) => {
  return (
    <svg height={size} width={size}>
      <polygon
        points={`${size / 2} ${size / 7.464}, ${size} ${size}, 0 ${size}`}
        style={{ fill: color }}
      />
    </svg>
  );
};

Triangle.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Triangle;
