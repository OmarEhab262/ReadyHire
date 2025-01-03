import { useState } from "react";
import PropTypes from "prop-types";

const CustomButton = ({
  text = "",
  type = "button",
  width = "100%",
  height = "50px",
  onClick,
  className = "",
  loader = false,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e) => {
    if (loader) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 200); // Duration of the animation
    if (onClick) onClick(e);
  };

  return (
    <div style={{ width }} className=" relative">
      <button
        type={type}
        onClick={handleClick}
        className={`text_primary bg_secondary rounded-md  ${className} ${
          loader && "cursor-not-allowed"
        } ${isAnimating && "animate-click"}`}
        disabled={loader}
        style={{ width, height }}
      >
        {!loader && text}
      </button>
      {loader && <div className="loader absolute top-3 left-[50%] "></div>}
    </div>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  loader: PropTypes.bool,
};

export default CustomButton;
