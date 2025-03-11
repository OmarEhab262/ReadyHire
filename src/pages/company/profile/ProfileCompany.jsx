import Layout from "../../../components/layout/Layout";
import image from "../../../assets/images/team-01.png";
import CustomButton from "../../../components/ui/CustomButton";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfileCompany = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("type user");
    navigate("/");
  };

  return (
    <Layout>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6 md:p-10 p-5 justify-between md:items-center bg-white shadow-md rounded-lg">
        {/* Left Section - Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          {/* Company Logo */}
          <div className="w-32 h-32 p-[2px] rounded-full border_secondary !border-4 overflow-hidden shadow-lg">
            <img
              src={image}
              alt="Company Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h2 className="text-3xl font-bold text-primary">
            Tech Innovators Inc.
          </h2>
          <p className="text-xl text-gray-600">San Francisco, USA</p>
          <p className="text-xl text-gray-600">Industry: IT & Tech</p>
          <p className="text-xl text-gray-600">Year Established: 4/1/2004</p>
          <p className="text-xl text-gray-600">Remote Work: Available</p>

          {/* Buttons */}
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <div className="flex gap-4 my-4">
            <CustomButton
              height="45px"
              width="160px"
              text="Edit Profile"
              type="button"
            />
            <CustomButton
              height="45px"
              width="160px"
              className="!text-[var(--secondary-color)] !bg-white border_secondary shadow-md"
              text="Settings"
              type="button"
              link="/account-settings"
            />
          </div>
          <CustomButton
            height="45px"
            width="330px"
            className="!bg-green-500 !text-white font-semibold shadow-md"
            text="Post a Job"
            type="button"
            link="/post-job"
          />
          <CustomButton
            height="45px"
            width="330px"
            className="!bg-red-500 !text-white font-semibold shadow-md flex items-center justify-center gap-2"
            text="Logout"
            type="button"
            onClick={logOut}
          >
            <LogOut size={20} /> Logout
          </CustomButton>
        </div>
      </div>

      {/* About Section */}
      <div className="md:p-10 p-5">
        <div className="bg-gray-100 rounded-xl p-7 shadow-xl">
          <h2 className="text-2xl font-bold text-primary">About Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed mt-2">
            Tech Innovators Inc. is a leading IT & Tech company specializing in
            cutting-edge software solutions and innovative digital products.
            Established in 2004, we have consistently pushed the boundaries of
            technology to deliver impactful solutions worldwide.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileCompany;
