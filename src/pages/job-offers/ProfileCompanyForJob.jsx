import image from "../../assets/images/team-01.png";
import CustomButton from "../../components/ui/CustomButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import apiRequest from "../../utils/apiRequest";
import { replaceImageUrl } from "../../utils/helpers";
import { getExperienceDuration } from "../../utils/getExperienceDuration";
import Layout from "../../components/layout/Layout";
import { toast } from "react-hot-toast";

const ProfileCompanyForJob = () => {
  const navigate = useNavigate();

  const localUser = JSON.parse(localStorage.getItem("company data"));
  const localUserId = localUser?.id;
  const localUserrrr = JSON.parse(localStorage.getItem("user"));
  const localUserrrrId = localUserrrr?.companyProfileId;

  const userId = localUserId || localUserrrrId;

  const [userProfile, setUserProfile] = useState(null);
  const [isWorkingNow, setIsWorkingNow] = useState(false);

  useEffect(() => {
    if (!userId) {
      console.error("No user ID found in URL or localStorage.");
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const userData = await apiRequest(`CompanyProfiles/${userId}`, "GET");
        setUserProfile(userData);

        localStorage.setItem(
          "userProfile",
          replaceImageUrl(userProfile?.companyImageUrl)
        );
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  const handleAccept = () => {
    toast.success("You are now working with us 🎉", {
      position: "top-center",
    });
    setIsWorkingNow(true);
  };

  const handleReject = () => {
    toast.success("Than you!", {
      position: "top-center",
    });
    navigate("/");
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-6 md:p-10 p-5 justify-center">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-28 h-28 p-[2px] rounded-full border_secondary !border-2 overflow-hidden">
            <img
              src={
                "https://7824ce5fbc6e.ngrok-free.app/user-profile-pics/8396cf50-6827-48e6-9a65-575e547c14c2_download.jpg"
              }
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <h2 className="text-3xl font-bold text-primary">
            NexaTech Solutions
          </h2>

          <p className="text-xl text-gray-600">Location: Al Mansoura</p>

          <p className="text-xl text-gray-600">
            Industry: Information Technology / Software Development
          </p>

          <p className="text-xl text-gray-600">Year Established: 8 years</p>
          {isWorkingNow && (
            <p className="text-green-600 font-semibold text-lg text-center">
              🎉 Congratulations! You have accepted our offer. <br />
              We will send you the remaining details to your email soon.
            </p>
          )}

          {!isWorkingNow && (
            <div className="flex flex-row flex-wrap gap-4 mt-6">
              <CustomButton
                text="Accept"
                height="45px"
                width="160px"
                className="!bg-green-500 !text-white"
                type="button"
                onClick={handleAccept}
              />
              <CustomButton
                text="Reject"
                height="45px"
                width="160px"
                className="!bg-red-500 !text-white"
                type="button"
                onClick={handleReject}
              />
            </div>
          )}
          {/* Accept & Reject Buttons */}
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

export default ProfileCompanyForJob;
