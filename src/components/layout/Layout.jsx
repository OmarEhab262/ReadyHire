import PropTypes from "prop-types";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
