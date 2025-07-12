import Cookies from "js-cookie";
import { CircleGauge, Earth, Edit, GraduationCap, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import image from "../../../assets/images/team-01.png";
import Layout from "../../../components/layout/Layout";
import FormEdit from "../../../components/profile/FormEdit";
import CustomButton from "../../../components/ui/CustomButton";

import apiRequest from "../../../utils/apiRequest";
import { replaceImageUrl } from "../../../utils/helpers";
import { getExperienceDuration } from "../../../utils/getExperienceDuration";

const ProfileSeeker = () => {
  const { id: paramId } = useParams();
  const navigate = useNavigate();

  const localUser = JSON.parse(localStorage.getItem("userProfiles"));
  const localUserId = localUser?.id;
  const localUserrrr = JSON.parse(localStorage.getItem("user"));
  const localUserrrrId = localUserrrr?.userProfileId;

  const userId = paramId || localUserId || localUserrrrId;
  // const [editEndpoint, setEditEndpoint] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [userLanguages, setUserLanguages] = useState([]);
  const [userOverView, setUserOverView] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editType, setEditType] = useState("");
  const [openEditForm, setOpenEditForm] = useState(false);

  useEffect(() => {
    if (!userId) {
      console.error("No user ID found in URL or localStorage.");
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const userData = await apiRequest(`UserProfiles/${userId}`, "GET");
        const userLangs = await apiRequest(
          `UserLanguage/by-profile/${userId}`,
          "GET"
        );
        const userOver = await apiRequest(
          `UserOverView/by-profile/${userId}`,
          "GET"
        );

        const updatedUser = {
          ...userData,
          companyImageUrl: userData.userProfilePicture
            ? replaceImageUrl(userData.userProfilePicture.url)
            : `${import.meta.env.VITE_API_BASE_URL}/default-image.png`,
        };

        setUserProfile(updatedUser);
        setUserLanguages(Array.isArray(userLangs) ? userLangs : []);
        setUserOverView(userOver || null);
        localStorage.setItem("userProfile", updatedUser.companyImageUrl);

        console.log("User fetched successfully:", updatedUser);
        console.log("User Languages fetched successfully:", userLangs);
        console.log("User Overview fetched successfully:", userOver);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserProfile();
  }, [userId]); // depend only on userId

  console.log("editType", editType);

  const logOut = () => {
    localStorage.clear(); // Removes ALL keys in localStorage
    navigate("/"); // Redirect to home page (or login)
  };

  const rawSkills = userProfile?.skills || [];
  const skills = rawSkills.flatMap((skillObj) =>
    skillObj.name.split(" ").filter(Boolean)
  );

  const firstExperience = userProfile?.experiences?.[0];
  const experienceJobTitle = firstExperience?.jobTitle || "No experience";
  const experienceDuration = firstExperience
    ? getExperienceDuration(firstExperience.startDate, firstExperience.endDate)
    : "N/A";

  const info = [
    {
      icon: <CircleGauge className="text-2xl text-secondary" />,
      label: "Experience Level",
      value: `${experienceJobTitle} — ${experienceDuration}`,
      bg: "bg-white",
    },
    {
      icon: <Earth className="text-2xl text-secondary" />,
      label: "Languages",
      value:
        userLanguages.length > 0
          ? userLanguages.map((lang) => lang.languageType).join(", ")
          : "Not specified",
      bg: "bg-white",
    },
    {
      icon: <GraduationCap className="text-2xl text-secondary" />,
      label: "Education",
      value:
        userProfile?.educations?.length > 0 ? (
          <>
            {userProfile.educations.map((edu) => (
              <div key={edu.id} className="mb-2">
                <p className="font-semibold">
                  <span className="text-gray-500">University:</span>{" "}
                  {edu.university || "No university"}
                </p>
                <p className="font-semibold">
                  <span className="text-gray-500">Faculty:</span>{" "}
                  {edu.faculty || "No faculty"}
                </p>
                <p className="font-semibold">
                  <span className="text-gray-500">Degree:</span>{" "}
                  {edu.degree || "No degree"}
                </p>
              </div>
            ))}
          </>
        ) : (
          "No education info"
        ),
      bg: "bg-white",
    },
  ];

  const [isTakenTask, setIsTakenTask] = useState(
    Cookies.get("isTakenTask") === "true"
  );

  const userType = localStorage.getItem("type user");

  useEffect(() => {
    const checkTakenTask = Cookies.get("isTakenTask");
    setIsTakenTask(checkTakenTask === "true");
  }, []);
  return (
    <Layout>
      <FormEdit
        label={editType}
        open={openEditForm}
        onClose={() => setOpenEditForm(false)}
      />
      <div
        className={`flex flex-col md:flex-row gap-6 md:p-10 p-5 ${
          userType === "seeker"
            ? "md:items-start  justify-between"
            : "md:items-center  justify-center"
        }`}
      >
        <div
          className={`flex flex-col items-center ${
            userType === "seeker"
              ? "md:items-start  justify-between"
              : "md:items-center  justify-center"
          } text-center md:text-left gap-4 `}
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
          <div className="relative">
            {edit && (
              <div
                className="absolute right-0 cursor-pointer"
                onClick={() => {
                  setEditType("profile");
                  setOpenEditForm(!openEditForm);
                }}
              >
                <Edit className="text-2xl text-blue-600  " />
              </div>
            )}
            <h2 className="text-2xl font-bold">
              {userProfile?.firstName} {userProfile?.lastName}{" "}
            </h2>
            <p className="text-xl text-[#555555]">
              {userProfile?.jobTitle || "No job title specified"}
            </p>
            <p className="text-xl text-[#555555]">
              {userProfile?.location || "No location specified"}
            </p>
            {(userType === "company" || userType === "client") && (
              <CustomButton
                height="40px"
                width="150px"
                text="Hire Talent"
                type="button"
              />
            )}
          </div>
        </div>
        {userType === "seeker" && (
          <div className="flex flex-col items-center md:items-start ">
            <div className="mb-5 relative">
              {" "}
              <div className="flex gap-4 my-4 flex-col">
                {edit && (
                  <div
                    className="absolute right-3 top-6 cursor-pointer"
                    onClick={() => {
                      setEditType("jobTitle");
                      setOpenEditForm(!openEditForm);
                    }}
                  >
                    <Edit className="text-2xl text-blue-600  " />
                  </div>
                )}
                <div className="p-2 px-5 bg-gray-200 rounded-xl text-center">
                  {userProfile?.jobTitle || "No job title specified"}
                </div>
              </div>
              <div className="fccr gap-4">
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
                  height="40px"
                  width="150px"
                  className="!text-[var(--secondary-color)] !bg-white border_secondary"
                  text="Settings"
                  type="button"
                  link="/account-settings"
                />
              </div>
            </div>
            <CustomButton
              height="40px"
              width="320px"
              className="!bg-red-500 "
              text="Logout"
              type="button"
              onClick={logOut}
            />
          </div>
        )}
      </div>

      <div className="md:p-10 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-gray-100 p-6 rounded-lg shadow-lg">
          {info.map(({ icon, label, value, bg }, index) => (
            <div
              key={index}
              className={`${bg} p-5 rounded-lg shadow-md flex flex-col items-center sm:items-start relative `}
            >
              {edit && (
                <div
                  className="absolute right-3 cursor-pointer"
                  onClick={() => {
                    setEditType(label);
                    setOpenEditForm(!openEditForm);
                  }}
                >
                  <Edit className="text-2xl text-blue-600" />
                </div>
              )}
              <div className="flex items-center gap-3 text-xl text-[#555555]">
                {icon} <span className="text-center sm:text-left">{label}</span>
              </div>
              <div className="text_secondary text-lg font-bold mt-2 text-center sm:text-left break-words">
                {value}
              </div>
            </div>
          ))}

          <div className="bg-white col-span-1 sm:col-span-2 md:col-span-3 p-5 rounded-lg shadow-md flex flex-col gap-5 relative">
            {edit && (
              <div
                className="absolute right-3 cursor-pointer"
                onClick={() => {
                  setEditType("skills");
                  setOpenEditForm(!openEditForm);
                }}
              >
                <Edit className="text-2xl text-blue-600  " />
              </div>
            )}
            <div className="flex items-center gap-3 text-xl text-[#555555]">
              <Star /> <span>Skills</span>
            </div>
            <div className="flex flex-wrap gap-3 w-full">
              {skills.map((skill, index) => (
                <p
                  key={index}
                  className="p-2 px-5 bg-blue-100 rounded-xl text-center sm:text-left min-w-0 break-words"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>

          {!isTakenTask && userType == "seeker" && (
            <div className="col-span-1 sm:col-span-2 md:col-span-3 flex justify-center mt-4">
              <CustomButton
                height="40px"
                width="150px"
                text="Take Testing Now"
                type="button"
                link="/start-do-test"
              />
            </div>
          )}
        </div>
      </div>

      {/* About Me Section */}
      <div className="md:p-10 p-5 ">
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
          <h2 className="text-2xl font-bold text-primary">About Me</h2>
          <p className="text-lg text-gray-700 mt-3">
            {userOverView?.disciption?.trim()
              ? userOverView?.disciption
              : "No overview provided."}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileSeeker;
