import { Link } from "react-router-dom";

const DefaultNav = () => {
  return (
    <nav className="shadow-md top-0 !z-40 bg-white sticky font-bold md:text-3xl  text-xl  p-5 font-young">
      <Link to="/">
        <span className="text_secondary ">READY</span> <span>HIRE</span>
      </Link>
    </nav>
  );
};

export default DefaultNav;
