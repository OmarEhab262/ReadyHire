import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import image from "../../assets/images/Verify.png";
import CustomButton from "../ui/CustomButton";

const VerifyEmail = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  console.log("user", user?.email);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/verification-success");
    }, 5000);

    return () => clearTimeout(timer); // Cleanup function to prevent memory leaks
  }, [navigate]); // ✅ Include `navigate` in the dependency array

  return (
    <div>
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="md:w-[35%] md:block hidden">
          <img src={image} alt="Verify Email" />
        </div>
        <h2>Verify your email address</h2>
        <p className="text-center text-gray-500 text-lg md:w-[700px] w-[90%]">
          We just sent an email to the address:
          <span className="text-[var(--secondary-color)]"> {user?.email} </span>
          Please check your email and click on the link provided to verify your
          address.
        </p>
        <div className="w-full flex justify-center my-5">
          <CustomButton
            height="40px"
            text="Resend Verification Email"
            type="submit"
            width="300px"
          />
        </div>
        <div className="flex justify-center items-center my-5">
          <p className="text-center text-gray-500 text-lg">
            Do you want to change your email address?{" "}
            <Link to="/signup" className="text-[var(--secondary-color)]">
              Change
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
