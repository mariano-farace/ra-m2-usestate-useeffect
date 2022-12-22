import PropTypes from "prop-types";

const Circle = ({ color, size }) => {
  return (
    <svg height={size} width={size}>
      <circle cx="50%" cy="50%" r={`${size / 2}px`} fill={color} />
    </svg>
  );
};

Circle.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Circle;
