import { useEffect } from "react";
import SuccessMark from "../../assets/images/Successmark.svg";
import { useNavigate } from "react-router-dom";

const VerificationSuccess = () => {
  const navigate = useNavigate();
  // const userType = localStorage.getItem("type user");
  useEffect(() => {
    setTimeout(() => {
      navigate("/select-user");
    }, 5000);
  }, [navigate]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 m-5">
      <div className="bg-white p-6 rounded-2xl shadow-md text-center">
        <img src={SuccessMark} alt="Success" className="w-16 h-16 mx-auto" />
        <h1 className="text-2xl font-semibold text-green-600 mt-4">
          Congratulations! Your account is verified.
        </h1>
        <p className="text-gray-600 mt-2">
          Redirecting you to choose your role...
        </p>

        <div className="mt-4">
          <div className="w-6 h-6 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin mx-auto"></div>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          If you&apos;re not redirected automatically,{" "}
          <span
            onClick={() => window.location.reload()}
            className="cursor-pointer text-green-600 font-medium hover:underline"
          >
            Refresh
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default VerificationSuccess;
