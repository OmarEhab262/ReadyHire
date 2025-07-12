import bag from "../../assets/images/Fddrame.png";
import locationn from "../../assets/images/Location.png";
import CustomButton from "./CustomButton";
import PropTypes from "prop-types";

const CardViewProfile = ({
  img = bag,
  name = "John Doe",
  title = "Software Engineer",
  location = "Remote",
  experience = "5 years",
  link = "/profile/1",
}) => {
  return (
    <div className="sm:w-[700px] w-[90%] shadow-md hover:shadow-lg duration-300 ease-in p-5 rounded-lg m-5 bg-white">
      <div className="top flex flex-wrap sm:flex-row flex-col gap-4 items-center">
        <div className="w-12 h-12 rounded-full border-[3px] border-blue-500">
          <img
            className="w-full h-full rounded-full object-cover"
            src={img}
            alt="Profile"
          />
        </div>

        <p className="w-[80%] text_secondary font-bold text-xl leading-tight text-center sm:text-left">
          {name}
        </p>
      </div>

      <div className="mid mx-2 my-3">
        <p className="text-gray-500 font-bold text-lg">Title: {title}</p>
      </div>

      <div className="mid mx-2 my-3 flex flex-wrap sm:flex-row flex-col items-center md:items-start gap-5">
        <div className="flex gap-2 items-center justify-center">
          <img src={locationn} className="w-5 h-5" alt="" />
          <p className="text-gray-500 font-bold">{location}</p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <img src={bag} className="w-5 h-5" alt="" />
          <p className="text-gray-500 font-bold">
            Experience Level: {experience}
          </p>
        </div>
      </div>

      <div className="bot flex items-end justify-end mt-2">
        <CustomButton
          text="View Profile"
          type="button"
          className="!text-[var(--secondary-color)] !bg-white border_secondary !h-[30px]"
          width="120px"
          link={link} // ✅ استخدم الرابط الممرر هنا
        />
      </div>
    </div>
  );
};

CardViewProfile.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  experience: PropTypes.string,
  link: PropTypes.string, // ✅ أضفها هنا أيضًا
};

export default CardViewProfile;
