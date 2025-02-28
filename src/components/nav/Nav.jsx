import { useState } from "react";
import { Bell, ChevronDown, Menu, Search } from "lucide-react";
import image from "../../assets/images/team-01.png";
import CustomButton from "../ui/CustomButton";
import { Link } from "react-router-dom";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const userType = localStorage.getItem("type user");
  const links = {
    default: [
      { name: "Hire Talent", path: "/signup" },
      { name: "Apply Job", path: "/signup" },
    ],
    seeker: [
      { name: "Profile", path: "/" },
      { name: "Notification", path: "/" },
      { name: "Evaluation", path: "/" },
      { name: "My Jobs", path: "/my-hires" },
    ],
    company: [
      { name: "Profile", path: "/" },
      { name: "Notification", path: "/" },
      { name: "Hire Talent", path: "/" },
      { name: "Job Applications", path: "/" },
      { name: "My Hires", path: "/" },
    ],
  };

  return (
    <nav
      className={` lg:pt-5 lg:px-5 lg:pb-5 shadow-md sticky top-0 !z-40 bg-white`}
    >
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center bg-primary">
        <div className="font-bold text-3xl font-young ">
          <span className="text_secondary">READY</span>{" "}
          <span className="text-black">HIRE</span>
        </div>
        <ul className="flex justify-around items-center text-lg gap-10">
          {!userType
            ? links.default.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))
            : userType === "seeker"
            ? links.seeker.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))
            : links.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
        </ul>
        <div className="flex gap-10 items-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute left-3">
              <Search size={23} color="#1971c2" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="pl-10 rounded-r-none rounded-l-md border_secondary xl:w-[300px] w-[200px] "
            />
            <button
              className="px-5 rounded-r-md bg_secondary text-white p-2 -ml-2 border_secondary pt-[8.5px]"
              onClick={() => setClicked(!clicked)}
            >
              <span
                className={`flex text-md items-center gap-4 ${
                  clicked ? "animate-click" : ""
                }`}
              >
                Talent{" "}
                <span
                  className={`transition-transform duration-300 ${
                    clicked ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown />
                </span>
              </span>
            </button>
          </div>
          {userType ? (
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 flex items-center justify-center">
                <Bell size={20} fill="#1971c2" color="#1971c2" />
              </div>
              <img src={image} className="rounded-full w-8 h-8" alt="" />
            </div>
          ) : (
            <>
              <CustomButton
                height="40px"
                text="Log-in"
                type="button"
                width="100px"
                link="/login"
              />
              <CustomButton
                height="40px"
                text="Sign-up"
                className="!text-[var(--secondary-color)] !bg-white border-[var(--secondary-color)] border"
                type="button"
                width="100px"
                link="/select-user"
              />
            </>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex items-center justify-between w-full z-40 relative pt-5 px-5 pb-3  bg-white">
        <div className="font-bold text-xl font-young flex items-center justify-center flex-wrap gap-2">
          <span className="text_secondary">READY</span>{" "}
          <span className="text-black">HIRE</span>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 flex items-center justify-center cursor-pointer"
        >
          <Menu size={30} color="#1971c2" strokeWidth={2} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 w-full bg-white shadow-md p-5 transition-transform duration-300 lg:hidden flex flex-col my-5 transform ${
          isOpen
            ? "-translate-y-5 z-30"
            : "-translate-y-[300px] -z-10 overflow-hidden"
        }`}
      >
        {/* {userType ? (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Bell size={20} fill="#1971c2" color="#1971c2" />
            </div>
            <img src={image} className="rounded-full w-8 h-8" alt="" />
          </div>
        ) : (
          ""
        )} */}
        <ul className="flex flex-col gap-5 text-lg font-semibold">
          {!userType
            ? links.default.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))
            : userType === "seeker"
            ? links.seeker.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))
            : links.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
        </ul>
        {!userType && (
          <div className="flex items-center gap-3 mt-3">
            <CustomButton
              height="40px"
              text="Get Started"
              type="button"
              width="100px"
              link="/select-user"
            />
          </div>
        )}
        <div className="relative w-full mt-5">
          <div className="absolute left-3 top-2">
            <Search size={23} color="#1971c2" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 rounded-r-none rounded-l-md border_secondary w-[80%]"
          />
          <button
            className="px-5   w-[12%] min-w-[80px] rounded-r-md bg_secondary text-white p-2 -ml-2 border_secondary pt-[8.5px]"
            onClick={() => setClicked(!clicked)}
          >
            <span
              className={`flex text-md items-center gap-4 ${
                clicked ? "animate-click" : ""
              }`}
            >
              Talent{" "}
              <span
                className={`transition-transform duration-300 ${
                  clicked ? "rotate-180" : ""
                }`}
              >
                <ChevronDown />
              </span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
