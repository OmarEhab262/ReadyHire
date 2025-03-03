import PropTypes from "prop-types";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
