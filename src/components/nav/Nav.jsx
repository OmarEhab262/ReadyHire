import { useState } from "react";
import { Bell, Menu, X } from "lucide-react";
import image from "../../assets/images/team-01.png";
import CustomButton from "../ui/CustomButton";
import { Link } from "react-router-dom";

const Nav = () => {
  // const [clicked, setClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const userType = localStorage.getItem("type user");
  const links = {
    default: [
      { name: "Hire Talent", path: "/hire-talent" },
      { name: "Apply Job", path: "/apply-job" },
    ],
    seeker: [
      { name: "Find work", path: "/job" },
      { name: "My Assessments & Proposal", path: "/my-proposals" },
      { name: "My Jobs", path: "/my-jobs" },
    ],
    company: [
      { name: "Hire Talent", path: "/talent" },
      { name: "Job Applications", path: "/job-applications" },
      { name: "My Hires", path: "/my-hires" },
      { name: "My Offers", path: "/my-offers" },
    ],
    client: [
      { name: "Hire Talent", path: "/talent" },
      { name: "Job Applications", path: "/job-applications" },
      { name: "My Hires", path: "/my-hires" },
      { name: "My Offers", path: "/my-offers" },
    ],
  };
  const linksMobile = {
    default: [
      { name: "Hire Talent", path: "/hire-talent" },
      { name: "Apply Job", path: "/apply-job" },
    ],
    seeker: [
      { name: "Profile", path: "/profile-seeker" },
      { name: "Find work", path: "/job" },
      { name: "My Assessments & Proposal", path: "/my-proposals" },
      { name: "My Jobs", path: "/my-jobs" },
    ],
    company: [
      { name: "Profile", path: "/profile-company" },
      { name: "Hire Talent", path: "/talent" },
      { name: "Job Applications", path: "/job-applications" },
      { name: "My Hires", path: "/my-hires" },
      { name: "My Offers", path: "/my-offers" },
    ],
    client: [
      { name: "Profile", path: "/profile-company" },
      { name: "Hire Talent", path: "/talent" },
      { name: "Job Applications", path: "/job-applications" },
      { name: "My Hires", path: "/my-hires" },
      { name: "My Offers", path: "/my-offers" },
    ],
  };
  const notifications = [
    {
      text: "We regret to inform you that you were not selected for the Graphic Designer position at Creative Designs.",
      color: "bg-red-500",
    },
    {
      text: "Congratulations! You have been accepted for the Software Developer position at Tech Innovators.",
      color: "bg-green-500",
    },
    {
      text: "Your work has been approved for the website development project for Web Solutions.",
      color: "bg-green-500",
    },
    {
      text: "The client has requested some modifications to the mobile app design project. Please review the details and make the necessary changes.",
      color: "bg-yellow-500",
      link: "View details",
    },
    {
      text: "Mohamed Ahmed has offered you a position as a Content Writer on his digital platform.",
      color: "bg-blue-500",
      link: "View details",
    },
    {
      text: "FutureTech has offered you a position as a Data Analyst in their team.",
      color: "bg-blue-500",
      link: "View details",
    },
  ];

  return (
    <nav
      className={` lg:pt-5 lg:px-5 lg:pb-5 shadow-md sticky top-0 !z-40 bg-white`}
    >
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center bg-primary">
        <Link to="/" className="font-bold text-3xl font-young ">
          <span className="text_secondary">READY</span>{" "}
          <span className="text-black">HIRE</span>
        </Link>
        <ul className="flex justify-around items-center text-lg gap-10">
          {(userType === "seeker"
            ? links.seeker
            : userType === "company"
            ? links.company
            : userType === "client"
            ? links.client
            : links.default
          ).map((link, index) => (
            <li key={index}>
              <Link
                className={`${
                  location.pathname === link.path
                    ? "text_secondary font-bold"
                    : "text-black"
                } transition-colors duration-300`}
                to={link.path}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-10 items-center">
          {userType ? (
            <div className="flex items-center gap-5">
              <div
                className="w-10 h-10 flex items-center justify-center cursor-pointer"
                onClick={() => setOpenNotifications(!openNotifications)}
              >
                <Bell size={20} fill="#1971c2" color="#1971c2" />
              </div>
              <Link
                to={
                  userType === "seeker" ? "/profile-seeker" : "/profile-company"
                }
              >
                <img src={image} className="rounded-full w-8 h-8" alt="" />{" "}
              </Link>
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
        <Link
          to={"/"}
          className="font-bold text-xl font-young flex items-center justify-center flex-wrap gap-2"
        >
          <span className="text_secondary">READY</span>{" "}
          <span className="text-black">HIRE</span>
        </Link>
        <div className="flex items-center gap-5">
          {userType && (
            <div
              className="flex items-center justify-center gap-5 cursor-pointer"
              onClick={() => setOpenNotifications(!openNotifications)}
            >
              <Bell size={20} fill="#1971c2" color="#1971c2" />
            </div>
          )}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center cursor-pointer"
          >
            <Menu size={30} color="#1971c2" strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 w-full bg-white shadow-md p-5 transition-transform duration-300 lg:hidden flex flex-col my-5 transform ${
          isOpen
            ? "-translate-y-5 z-30"
            : "-translate-y-[500px] -z-10 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 text-lg font-semibold">
          {(userType === "seeker"
            ? linksMobile.seeker
            : userType === "company"
            ? linksMobile.company
            : userType === "client"
            ? linksMobile.client
            : linksMobile.default
          ).map((link, index) => (
            <li key={index}>
              <Link
                className={`${
                  location.pathname === link.path
                    ? "text_secondary font-bold"
                    : "text-black"
                } transition-colors duration-300`}
                to={link.path}
              >
                {link.name}
              </Link>
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
      </div>
      {/* Notifications */}
      <div
        className={`backdrop-blur-md h-[90%] mt-[70px] w-screen fixed top-0 left-0 !z-50 flex justify-end
  transition-opacity duration-300 ${
    openNotifications ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
        onClick={() => setOpenNotifications(false)}
      >
        <div
          className={`m-5 h-[70%] md:w-[40%] w-[90%] bg-white shadow-lg rounded-md p-5 overflow-hidden overflow-y-auto 
    transform transition-all duration-300 ${
      openNotifications
        ? "translate-y-0 opacity-100 max-h-[500px]"
        : "-translate-y-10 opacity-0 max-h-0"
    }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-center gap-5">
            <Bell size={20} fill="#1971c2" color="#1971c2" />
            <p className="font-bold text_secondary">Notifications</p>
          </div>

          {notifications.map((notification, index) => (
            <div
              key={index}
              className={`flex flex-col mt-5 p-5 rounded-md text-white gap-3 ${notification.color}`}
            >
              <div className="flex justify-between">
                <p className="w-[90%]">{notification.text}</p>
                <div className="w-10 h-10 flex justify-end">
                  <X size={20} className="cursor-pointer" />
                </div>
              </div>

              {notification.link && (
                <div className="flex justify-end">
                  <CustomButton
                    text={notification.link}
                    width="150px"
                    height="40px"
                    className="!bg-white !text-black"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
