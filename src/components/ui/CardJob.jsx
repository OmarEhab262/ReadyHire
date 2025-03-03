// { img, title, location, experience, link }
import img from "../../assets/images/team-01.png";
import bag from "../../assets/images/Fddrame.png";
import location from "../../assets/images/Location.png";
import fac from "../../assets/images/fac.png";
import CustomButton from "./CustomButton";
import { BadgeDollarSign } from "lucide-react";

const CardJob = () => {
  return (
    <div className="sm:w-[700px] w-[90%]  shadow-md hover:shadow-lg duration-300 ease-in  p-5 rounded-lg m-5 cursor-pointer">
      <div className="top flex flex-wrap sm:flex-row flex-col gap-4 sm:items-start !items-center justify-center">
        {/* Profile Image */}
        <div className="w-12 h-12 rounded-full border-[3px] border-blue-500">
          <img
            className="w-full h-full rounded-full object-cover"
            src={img}
            alt="Profile"
          />
        </div>
        {/* Text Content */}
        <p className="w-[90%] text_secondary font-bold text-xl leading-tight">
          Web & Mobile App | Front End Developer | React | UI/UX Designer
        </p>
      </div>
      <div className="flex gap-2 items-center my-3">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md ">
          Full-time
        </span>
        <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md">
          Remote
        </span>
      </div>
      <div className="mid mx-2 my-3 flex flex-wrap sm:flex-row flex-col  gap-5">
        <div className="flex gap-2 items-center">
          <img src={fac} className="w-5 h-5" alt="" />
          <p className="text-gray-500 font-bold">Microsoft </p>
        </div>
        <div className="flex gap-2 items-center">
          <img src={location} className="w-5 h-5" alt="" />
          <p className="text-gray-500 font-bold">Cairo, Egypt</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src={bag} className="w-5 h-5" alt="" />
          <p className="text-gray-500 font-bold">Experience Level: 5 years</p>
        </div>
        <div className="flex gap-2 items-center">
          <BadgeDollarSign className="w-5 h-5" color="green" />
          <p className="text-gray-500 font-bold">Budget : $100.00</p>
        </div>
      </div>
      <div className="bot flex gap-2 flex-wrap items-end justify-between mt-2">
        <p className="text-[#0BBD0B] font-bold">2 hours ago.</p>
        <div className="flex gap-2 flex-wrap">
          <CustomButton
            text="View Details"
            type="button"
            className="!text-[var(--secondary-color)] !bg-white border_secondary !h-[30px]"
            width="120px"
          />
          <CustomButton
            text="Apply Now"
            type="button"
            className=" !h-[30px]"
            width="120px"
          />
        </div>
      </div>
    </div>
  );
};

export default CardJob;
