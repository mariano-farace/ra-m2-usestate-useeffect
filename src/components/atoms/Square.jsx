import PropTypes from "prop-types";

const Square = ({ color, size }) => {
  return (
    <svg height={size} width={size}>
      <rect width={size} height={size} color={color} style={{ fill: color }} />
    </svg>
  );
};

Square.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Square;
