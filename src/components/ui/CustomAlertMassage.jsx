import { Toaster, toast } from "react-hot-toast";
import PropTypes from "prop-types";
import { useEffect } from "react";

const CustomAlertMessage = ({ message, type, duration = 1500 }) => {
  useEffect(() => {
    if (message) {
      toast[type]?.(message) || toast(message); // Call toast by type or default
      const timeout = setTimeout(() => toast.dismiss(), duration); // Auto-dismiss after duration
      return () => clearTimeout(timeout); // Cleanup timer
    }
  }, [message, type, duration]);

  return <Toaster position="top-center" reverseOrder={false} />;
};

CustomAlertMessage.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  duration: PropTypes.number,
};

export default CustomAlertMessage;
