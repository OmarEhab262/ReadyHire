import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import CardViewProfile from "../../components/ui/CardViewProfile";
import CustomButton from "../../components/ui/CustomButton";
import apiRequest from "../../utils/apiRequest";
import { getExperienceDuration } from "../../utils/getExperienceDuration";
import { replaceImageUrl } from "../../utils/helpers";
import img from "../../assets/images/team-01.png";
const TalentPage = () => {
  const [clicked, setClicked] = useState(false);
  // const [filterOpen, setFilterOpen] = useState(false);
  const userType = localStorage.getItem("type user");

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const userData = await apiRequest("UserProfiles", "GET");

        const updatedUsers = userData.map((user) => ({
          ...user,
          companyImageUrl: user.userProfilePicture
            ? replaceImageUrl(user.userProfilePicture.url)
            : img,
        }));

        setUsers(updatedUsers);

        console.log("Users fetched successfully:", updatedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchJobs();
  }, []);
  const filteredUsers = users.filter((user) =>
    user.firstName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="flex flex-col items-center text-center p-6 md:p-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Find Top <span className="text_secondary">Talent</span> for Your
          Business
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mt-3 max-w-2xl">
          Find top talent in tech, engineering, and more. Build your team and
          grow your business. Start hiring today!
        </p>
      </div>

      <div className="w-full px-4 md:px-10">
        <div className="relative max-w-lg mx-auto flex shadow-lg rounded-lg overflow-hidden">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Search size={23} color="#1971c2" />
          </div>
          <input
            type="text"
            placeholder="Search Talents..."
            className="w-full pl-12 pr-4 py-3 border-none focus:border-none outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            className="bg_secondary text-white px-6 py-3 rounded-r-lg"
            onClick={() => setClicked(!clicked)}
          >
            <span
              className={`flex items-center gap-2 ${
                clicked ? "animate-click" : ""
              }`}
            >
              Search
            </span>
          </button>
        </div>
      </div>
      {userType === "company" && (
        <div className="w-[90%] flex justify-center m-5 p-5">
          <CustomButton text="Post a Job Now" width="300px" link="/post-job" />
        </div>
      )}
      {/* زر فتح الفلتر في الشاشات الصغيرة */}

      <div className="flex lg:flex-row flex-col gap-8 my-12 px-4 md:px-10">
        <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 justify-items-center gap-6 overflow-y-auto max-h-[calc(100vh-150px)]">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((talent) => {
                const firstExperience = talent.experiences?.[0];

                const experienceJobTitle =
                  firstExperience?.jobTitle || "No experience";
                const experienceDuration = firstExperience
                  ? getExperienceDuration(
                      firstExperience.startDate,
                      firstExperience.endDate
                    )
                  : "";

                return (
                  <CardViewProfile
                    key={talent.id}
                    img={talent.companyImageUrl}
                    name={`${talent.firstName} ${talent.lastName}`}
                    title={talent.jobTitle || "No title specified"}
                    location={talent.location || "N/A"}
                    experience={
                      firstExperience
                        ? `${experienceJobTitle} — ${experienceDuration}`
                        : "No experience"
                    }
                    link={`/profile/${talent.id}`}
                  />
                );
              })
            ) : (
              <div className="text-gray-500 text-lg h-32 flex items-center justify-center">
                No talents found. Please check back later.
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TalentPage;
