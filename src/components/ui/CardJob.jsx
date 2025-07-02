import PropTypes from "prop-types";
import img from "../../assets/images/team-01.png";
import bag from "../../assets/images/Fddrame.png";
import locationn from "../../assets/images/Location.png";
import fac from "../../assets/images/fac.png";
import CustomButton from "./CustomButton";
import { BadgeDollarSign } from "lucide-react";
import toast from "react-hot-toast";

const CardJob = ({
  img,
  title,
  location,
  companyName,
  experience,
  // link,
  budget,
  type,
  time,
}) => {
  const userType = localStorage.getItem("type user");
  const handleApplyNow = () => {
    if (!userType) {
      toast.error(" You should register first to apply!", {
        duration: 3000,
        position: "top-center",
      });
    } else {
      window.location.href = "/start-apply-now"; // Redirect if userType exists
    }
  };

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
          <p className="text-gray-500 font-bold">Budget: {budget}</p>
        </div>
      </div>
      <div className="bot flex gap-2 flex-wrap items-center justify-between mt-2">
        <p className="text-[#0BBD0B] font-bold">{time} ago.</p>
        <div className="flex gap-2 flex-wrap justify-center my-2">
          <CustomButton
            text="View Details"
            type="button"
            className="!text-[var(--secondary-color)] !bg-white border_secondary !h-[30px]"
            width="120px"
            // link={link}
            link="/view-details-job"
          />
          <CustomButton
            text="Apply Now"
            type="button"
            className="!h-[30px]"
            width="120px"
            onClick={handleApplyNow}
            // link={userType ? "/send-proposal" : "/select-user"}
          />
        </div>
      </div>
    </div>
  );
};

CardJob.defaultProps = {
  img: img,
  title: "Web & Mobile App | Front End Developer | React | UI/UX Designer",
  location: "Cairo, Egypt",
  companyName: "Microsoft",
  experience: "5 years",
  link: "/view-details-job",
  budget: "$100.00",
  type: "Full-time",
  time: "2 hours",
};

CardJob.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  companyName: PropTypes.string,
  experience: PropTypes.string,
  link: PropTypes.string,
  budget: PropTypes.string,
  type: PropTypes.string,
  time: PropTypes.string,
};

export default CardJob;
