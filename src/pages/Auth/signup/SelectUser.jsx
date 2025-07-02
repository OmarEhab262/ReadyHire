import image from "../../../assets/images/freepik__upload__36608.png";
import seeker from "../../../assets/images/seeker.svg";
import owner from "../../../assets/images/owner.svg";
import SelectCard from "../../../components/signup/SelectCard";
import { useState } from "react";
import CustomButton from "../../../components/ui/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import DefaultNav from "../../../components/nav/DefaultNav";
// import apiRequest from "../../../utils/apiRequest";
import CustomAlertMessage from "../../../components/ui/CustomAlertMassage";
const SelectUser = () => {
  const [selected, setSelected] = useState("");
  // const [loader, setLoader] = useState(false);
  const [alertMassage, setAlertMessage] = useState({
    message: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleClick = () => {
    if (selected === "company") {
      navigate("/company-profile-first");
      setAlertMessage({
        message: "You have selected Job Owner",
        type: "success",
      });
    } else if (selected === "seeker") {
      navigate("/upload-resume");
      setAlertMessage({
        message: "You have selected Job Seeker",
        type: "success",
      });
    }
  };

  // const onSubmit = async (data) => {
  //   setLoader(true);
  //   try {
  //     // Destructure role to avoid sending it to the backend directly
  //     const { role, ...payload } = data;

  //     // Set role explicitly based on selected type
  //     if (selected === "company") {
  //       payload.role = "Admin";
  //     } else if (selected === "seeker") {
  //       payload.role = "User";
  //     } else {
  //       throw new Error("Invalid user type selected.");
  //     }

  //     // Make API request
  //     const response = await apiRequest(
  //       "Authentication/AddRole",
  //       "POST",
  //       payload
  //     );

  //     // Store user data safely
  //     if (response && response.user) {
  //       localStorage.setItem("user", JSON.stringify(response.user));
  //     }

  //     // Show success message
  //     setAlertMessage({ message: "Add role successfully", type: "success" });

  //     // Navigate based on selected type
  //     setTimeout(() => {
  //       if (selected === "company") {
  //         navigate("/company-profile-first");
  //       } else {
  //         navigate("/upload-resume");
  //       }
  //     }, 5000);
  //   } catch (error) {
  //     // Graceful error handling
  //     setAlertMessage({
  //       message:
  //         error?.response?.data?.message ||
  //         error.message ||
  //         "Add role is failed. Try again.",
  //       type: "error",
  //     });
  //   } finally {
  //     setLoader(false);
  //   }
  // };

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
      <CustomAlertMessage
        message={alertMassage.message}
        type={alertMassage.type}
      />
    </div>
  );
};

export default SelectUser;
