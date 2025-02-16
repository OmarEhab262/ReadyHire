import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("token"); // Using js-cookie to get the token

  // If the token does not exist, redirect to the login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If the token exists, render the protected content
  return children;
};

// Define prop types for ProtectedRoute
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
