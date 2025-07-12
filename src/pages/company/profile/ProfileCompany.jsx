import Layout from "../../../components/layout/Layout";
import image from "../../../assets/images/team-01.png";
import CustomButton from "../../../components/ui/CustomButton";
import { Edit, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import apiRequest from "../../../utils/apiRequest";
import { replaceImageUrl } from "../../../utils/helpers";
import { getExperienceDuration } from "../../../utils/getExperienceDuration";
import FormEdit from "../../../components/profile/FormEdit";

const ProfileCompany = () => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [editType, setEditType] = useState("");
  const [editEndpoint, setEditEndpoint] = useState("");
  const [openEditForm, setOpenEditForm] = useState(false);
  const logOut = () => {
    localStorage.clear(); // Removes ALL keys in localStorage
    navigate("/"); // Redirect to home page (or login)
  };

  const userType = localStorage.getItem("type user");

  const localUser = JSON.parse(localStorage.getItem("company data"));
  const localUserId = localUser?.id;
  const localUserrrr = JSON.parse(localStorage.getItem("user"));
  const localUserrrrId = localUserrrr?.companyProfileId;

  const userId = localUserId || localUserrrrId;

  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (!userId) {
      console.error("No user ID found in URL or localStorage.");
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const userData = await apiRequest(`CompanyProfiles/${userId}`, "GET");
        console.log("User fetched successfully:", userData);
        setUserProfile(userData);
        localStorage.setItem("userProfile", userData.companyImageUrl);
        localStorage.setItem(
          "userProfile",
          replaceImageUrl(userProfile.companyImageUrl)
        );
        localStorage.setItem("userProfile", userData.companyImageUrl);
        console.log("User fetched successfully:", userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return (
    <Layout>
      <FormEdit
        label={editType}
        open={openEditForm}
        onClose={() => setOpenEditForm(false)}
      />
      <div
        className={`flex flex-col md:flex-row gap-6 md:p-10 p-5 ${
          userType
            ? "md:items-start  justify-between"
            : "md:items-center  justify-center"
        }`}
      >
        <div
          className={`flex flex-col items-center ${
            userType
              ? "md:items-start  justify-between"
              : "md:items-center  justify-center"
          } text-center md:text-left gap-4`}
        >
          <div className="relative">
            <div className="w-28 h-28 p-[2px] rounded-full border_secondary !border-2 overflow-hidden">
              {edit && (
                <div
                  className="absolute right-0 cursor-pointer"
                  onClick={() => {
                    setEditType("image");
                    setOpenEditForm(!openEditForm);
                  }}
                >
                  <Edit className="text-2xl text-blue-600  " />
                </div>
              )}
              <img
                src={
                  userProfile?.companyImageUrl
                    ? replaceImageUrl(userProfile.companyImageUrl)
                    : image
                }
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="relative ">
            {" "}
            {edit && (
              <div
                className="absolute -right-10 cursor-pointer"
                onClick={() => {
                  setEditType("Company Name");
                  setEditEndpoint("CompanyProfiles");
                  setOpenEditForm(!openEditForm);
                }}
              >
                <Edit className="text-2xl text-blue-600  " />
              </div>
            )}
            <h2 className="text-3xl font-bold text-primary">
              {userProfile ? userProfile.companyName : "Tech Innovators Inc."}
            </h2>
          </div>
          <div className="relative ">
            {" "}
            {edit && (
              <div
                className="absolute -right-10 cursor-pointer"
                onClick={() => {
                  setEditType("Location");
                  setOpenEditForm(!openEditForm);
                }}
              >
                <Edit className="text-2xl text-blue-600  " />
              </div>
            )}
            <p className="text-xl text-gray-600">
              Location:{" "}
              {userProfile ? userProfile.location : "San Francisco, USA"}
            </p>
          </div>
          <div className="relative ">
            {" "}
            {edit && (
              <div
                className="absolute -right-10 cursor-pointer"
                onClick={() => {
                  setEditType("Industry");
                  setOpenEditForm(!openEditForm);
                }}
              >
                <Edit className="text-2xl text-blue-600  " />
              </div>
            )}{" "}
            <p className="text-xl text-gray-600">
              Industry: {userProfile ? userProfile.industry : "IT & Tech"}
            </p>
          </div>
          <div className="relative ">
            {" "}
            {edit && (
              <div
                className="absolute -right-10 cursor-pointer"
                onClick={() => {
                  setEditType("Year Established");
                  setOpenEditForm(!openEditForm);
                }}
              >
                <Edit className="text-2xl text-blue-600  " />
              </div>
            )}{" "}
            <p className="text-xl text-gray-600">
              Year Established:{" "}
              {userProfile && userProfile.yearEstablished
                ? getExperienceDuration(userProfile.yearEstablished, new Date())
                : "N/A"}
            </p>
          </div>
        </div>

        {userType && (
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div className="flex gap-4 my-4">
              <CustomButton
                height="40px"
                width="150px"
                text="Edit Profile"
                type="button"
                onClick={() => {
                  setEdit(!edit);
                }}
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
        )}
      </div>

      {/* About Section */}
      <div className="md:p-10 p-5">
        <div className="bg-gray-100 rounded-xl p-7 shadow-xl relative">
          {edit && (
            <div
              className="absolute right-3 cursor-pointer"
              onClick={() => {
                setEditType("about");
                setOpenEditForm(!openEditForm);
              }}
            >
              <Edit className="text-2xl text-blue-600  " />
            </div>
          )}
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
