import image from "../../../assets/images/freepik__upload__36608.png";
import seeker from "../../../assets/images/seeker.svg";
import owner from "../../../assets/images/owner.svg";
import SelectCard from "../../../components/signup/SelectCard";
import { useState } from "react";
import CustomButton from "../../../components/ui/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import DefaultNav from "../../../components/nav/DefaultNav";
const SelectUser = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (selected === "owner") {
      navigate("/owner-stage-tow");
    } else if (selected === "seeker") {
      navigate("/signup");
    }
  };
  return (
    <div className="">
      <DefaultNav />
      <div className="flex items-center justify-around h-[90vh] ">
        <div className="md:w-[40%] w-[90%]">
          <p className=" text-2xl text-center text-gray-500">
            Welcome to READY HIRE! Please Select Whether You Are a Job Owner
            Looking to Hire or a Job Seeker Searching for Opportunities.
          </p>

          <div className="flex gap-5 mt-10">
            <SelectCard
              icon={owner}
              title={"I am a Job Owner"}
              check={false}
              setSelected={setSelected}
              selected={selected}
              type="owner"
            />
            <SelectCard
              icon={seeker}
              title={"I am a Job Seeker"}
              check={true}
              setSelected={setSelected}
              selected={selected}
              type="seeker"
            />
          </div>
          <div className="m-4  mt-10 flex flex-col items-center justify-center">
            <CustomButton
              height="40px"
              text="Next"
              type="submit"
              onClick={handleClick}
              disabled={!selected}
            />
            <p>
              Already have an account?
              <Link className="text-blue-600" to="/login">
                Log In
              </Link>
            </p>
          </div>
        </div>
        <div className="md:w-[40%] md:flex hidden  flex-col items-center justify-center">
          <img className="w-fit h-[90%]" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SelectUser;
