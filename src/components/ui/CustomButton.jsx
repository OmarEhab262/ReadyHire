import PropTypes from "prop-types";

const CustomButton = ({
  text = "",
  type = "button",
  width = "200px",
  height = "50px",
  onClick,
  className = "text_primary bg_secondary border_radius",
  disabled = false,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
      style={{ width, height }}
      {...rest}
    >
      {text}
    </button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default CustomButton;
