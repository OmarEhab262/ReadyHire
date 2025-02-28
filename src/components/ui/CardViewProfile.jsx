// { img, title, location, experience, link }
import img from "../../assets/images/team-01.png";
import bag from "../../assets/images/Fddrame.png";
import location from "../../assets/images/Location.png";
import CustomButton from "./CustomButton";

const CardViewProfile = () => {
  return (
    <div className="sm:w-[500px] w-[90%]  shadow-md hover:shadow-lg duration-300 ease-in  p-5 rounded-lg m-5 cursor-pointer">
      <div className="top flex flex-wrap sm:flex-row flex-col gap-4 sm:items-start items-center">
        {/* Profile Image */}
        <div className="w-12 h-12 rounded-full border-[3px] border-blue-500">
          <img
            className="w-full h-full rounded-full object-cover"
            src={img}
            alt="Profile"
          />
        </div>

        {/* Text Content */}
        <p className="w-[80%] text_secondary font-bold text-xl leading-tight">
          Web & Mobile App | Front End Developer | React | UI/UX Designer
        </p>
      </div>

      <div className="mid mx-2 my-3 flex flex-wrap sm:flex-row flex-col  gap-5">
        <div className="flex gap-2 items-center">
          <img src={location} className="w-5 h-5" alt="" />
          <p className="text-gray-500 font-bold">Cairo, Egypt</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src={bag} className="w-5 h-5" alt="" />
          <p className="text-gray-500 font-bold">Experience Level: 5 years</p>
        </div>
      </div>
      <div className="bot flex items-end justify-end mt-2">
        {" "}
        <CustomButton
          text="View Profile"
          type="button"
          className="!text-[var(--secondary-color)] !bg-white border_secondary !h-[30px]"
          width="120px"
        />
      </div>
    </div>
  );
};

export default CardViewProfile;
