import image from "../../../components/images/freepik__upload__36608.png";
import seeker from "../../../components/images/seeker.svg";
import company from "../../../components/images/company.svg";
import SelectCard from "../../../components/ui/signup/SelectCard";
import { useState } from "react";
import CustomButton from "../../../components/ui/CustomButton";
import { Link, useNavigate } from "react-router-dom";
const OwnerStageTow = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (selected === "owner") {
      navigate("/owner-stage-tow");
    } else if (selected === "seeker") {
      navigate("/signup/seeker");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-around h-screen ">
        <div className="absolute top-10 left-10 font-bold text-3xl">
          READY <span className="text-[var(--secondary-color)]">HIRE</span>
        </div>
        <div className="md:w-[40%] w-[90%]">
          <p className=" text-3xl text-center">
            Great Choice! Now, Are You Representing a Company or Are You an
            Individual Client Looking to Hire?
          </p>

          <div className="flex gap-5 mt-10">
            <SelectCard
              icon={company}
              title={"Company"}
              check={false}
              setSelected={setSelected}
              selected={selected}
              type="company"
            />
            <SelectCard
              icon={seeker}
              title={"Client"}
              check={true}
              setSelected={setSelected}
              selected={selected}
              type="client"
            />
          </div>
          <div className="m-4  mt-10 flex flex-col items-center justify-center">
            <CustomButton
              height="40px"
              text="Next"
              type="submit"
              onClick={handleClick}
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

export default OwnerStageTow;
