import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CustomButton = ({
  text = "",
  type = "button",
  width = "100%",
  height = "50px",
  onClick,
  className = "",
  loader = false,
  link = "",
  icon,
  disabled = false,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e) => {
    if (loader || disabled) return; // Prevent clicking if the button is disabled
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 200); // Animation duration
    if (onClick) onClick(e);
  };

  const buttonContent = (
    <button
      type={type}
      onClick={handleClick}
      className={`text_primary bg_secondary rounded-md sm:pt-0 pt-1 flex items-center gap-3 justify-center 
        ${className} 
        ${loader || disabled ? "cursor-not-allowed opacity-50" : ""}
        ${isAnimating ? "animate-click" : ""}`}
      disabled={loader || disabled}
      style={{ width, height }}
    >
      {icon && <div>{icon}</div>}
      {!loader && text}
    </button>
  );

  return (
    <div style={{ width }} className="relative">
      {link && !disabled ? (
        <Link to={link}>{buttonContent}</Link>
      ) : (
        buttonContent
      )}
      {loader && (
        <div className="loader absolute top-3 left-1/2 transform -translate-x-1/2"></div>
      )}
    </div>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  loader: PropTypes.bool,
  icon: PropTypes.element,
  disabled: PropTypes.bool,
};

export default CustomButton;
