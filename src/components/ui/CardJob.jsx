import Cookies from "js-cookie";
import { BadgeDollarSign } from "lucide-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import bag from "../../assets/images/Fddrame.png";
import locationn from "../../assets/images/Location.png";
import fac from "../../assets/images/fac.png";
// import img from "../../assets/images/team-01.png";
import CustomButton from "./CustomButton";

const CardJob = ({
  img = img,
  title = "Web & Mobile App | Front End Developer | React | UI/UX Designer",
  location = "Cairo, Egypt",
  companyName = "Tech Company",
  experience = "3+ years",
  link = "/view-details-job/1",
  budget = "$1000 - $2000",
  type = "Full-time",
  jobCategory = "Development",
  time = "Just now",
  id = 1,
  jobType = "Full Time",
}) => {
  const userType = localStorage.getItem("type user");

  const onSubmit = async () => {
    setTimeout(() => {
      localStorage.setItem("jobId", id);
      window.location.href = "/start-apply-now";
    }, 1000);
  };

  const handleApplyNow = () => {
    if (!userType) {
      toast.error("You should register first to apply!", {
        duration: 3000,
        position: "top-center",
      });
    } else {
      onSubmit();
    }
  };

  const [isTakenTask, setIsTakenTask] = useState(
    Cookies.get("isTakenTask") === "true"
  );

  useEffect(() => {
    const checkTakenTask = Cookies.get("isTakenTask");
    setIsTakenTask(checkTakenTask === "true");
  }, []);

  function formatTimeAgo(timeString) {
    const date = new Date(timeString);
    const now = new Date();
    const diffMs = now - date;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return "Just now";
    }
  }
  return (
    <div className="sm:w-[700px] w-[90%] shadow-md hover:shadow-lg duration-300 ease-in p-5 rounded-lg m-5 bg-white">
      <div className="top flex flex-wrap sm:flex-row flex-col gap-4 sm:items-start !items-center justify-center">
        <div className="w-12 h-12 rounded-full border-[3px] border-blue-500">
          <img
            className="w-full h-full rounded-full object-cover"
            src={img}
            alt="Profile"
          />
        </div>
        <p className="w-[90%] text_secondary font-bold text-xl leading-tight">
          {title}
        </p>
      </div>
      <div className="flex gap-2 items-center my-3">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md">
          {type}
        </span>
        <span className="bg-pink-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md">
          {jobCategory}
        </span>
      </div>
      <div className="mid mx-2 my-3 flex flex-wrap sm:flex-row flex-col gap-5">
        <div className="flex gap-2 items-center">
          <img src={fac} className="w-5 h-5" alt="Company Logo" />
          <p className="text-gray-500 font-bold">{companyName}</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src={locationn} className="w-5 h-5" alt="Location" />
          <p className="text-gray-500 font-bold">{location}</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src={bag} className="w-5 h-5" alt="Experience" />
          <p className="text-gray-500 font-bold">
            Experience Level: {experience}
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <BadgeDollarSign className="w-5 h-5" color="green" />
          <p className="text-gray-500 font-bold">Salary :$ {budget}</p>
        </div>
      </div>
      <div className="bot flex gap-2 flex-wrap items-center justify-between mt-2">
        <p className="text-[#0BBD0B] font-bold">{formatTimeAgo(time)}</p>

        <div className="flex gap-2 flex-wrap justify-center my-2">
          <CustomButton
            text="View Details"
            type="button"
            className="!text-[var(--secondary-color)] !bg-white border_secondary !h-[30px]"
            width="120px"
            link={link}
          />

          {!isTakenTask ? (
            <CustomButton
              text="Take Task"
              type="button"
              className="!h-[30px]"
              width="120px"
              link={"/start-do-test"}
            />
          ) : (
            <CustomButton
              text={"Apply Now"}
              type="button"
              className="!h-[30px]"
              width="120px"
              // link={
              //   jobType === "Full Time" || jobType === "Part Time"
              //     ? undefined
              //     : "/send-proposal"
              // }
              onClick={handleApplyNow}
            />
          )}
        </div>
      </div>
    </div>
  );
};

CardJob.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  jobType: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  companyName: PropTypes.string,
  experience: PropTypes.string,
  link: PropTypes.string,
  budget: PropTypes.number,
  type: PropTypes.string,
  time: PropTypes.string,
  jobCategory: PropTypes.string,
};

export default CardJob;
