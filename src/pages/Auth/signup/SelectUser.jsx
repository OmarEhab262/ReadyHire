import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../../assets/images/freepik__upload__36608.png";
import owner from "../../../assets/images/owner.svg";
import seeker from "../../../assets/images/seeker.svg";
import DefaultNav from "../../../components/nav/DefaultNav";
import SelectCard from "../../../components/signup/SelectCard";
import CustomAlertMessage from "../../../components/ui/CustomAlertMassage";
import CustomButton from "../../../components/ui/CustomButton";
import apiRequest from "../../../utils/apiRequest";
const SelectUser = () => {
  const [selected, setSelected] = useState("");
  const [alertMassage, setAlertMessage] = useState({
    message: "",
    type: "",
  });
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const userId = user?.userId;

      if (!userId) {
        throw new Error("No user ID found in localStorage.");
      }

      const payload = {
        userId: userId,
        role: selected === "company" ? "Admin" : "User",
      };

      if (selected === "company") {
        const response = await apiRequest(
          "Authentication/AddRole",
          "POST",
          payload
        );

        console.log("response", response);
      } else {
        navigate("/user-profiles");
      }

      setAlertMessage({ message: "Add role successfully", type: "success" });

      setTimeout(() => {
        if (selected === "company") {
          navigate("/company-profile-first");
        } else {
          navigate("/user-profiles");
        }
      }, 2000);
    } catch (error) {
      setAlertMessage({
        message:
          error?.response?.data?.message ||
          error.message ||
          "Add role failed. Try again.",
        type: "error",
      });
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
              type="company"
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
              type="button"
              onClick={onSubmit}
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
      <CustomAlertMessage
        message={alertMassage.message}
        type={alertMassage.type}
      />
    </div>
  );
};

export default SelectUser;
