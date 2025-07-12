import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Layout from "../../components/layout/Layout";
import CustomButton from "../../components/ui/CustomButton";
import { Bookmark, MapPin, Share2 } from "lucide-react";
import img from "../../assets/images/team-01.png";
import { useParams } from "react-router-dom";
import apiRequest from "../../utils/apiRequest";

const ViewDetailsJobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  console.log("Job ID:", id);
  const userType = localStorage.getItem("type user");

  // استخدم useState بدلاً من جلب القيمة مباشرة
  const [isTakenTask, setIsTakenTask] = useState(
    Cookies.get("isTakenTask") === "true"
  );

  // تحديث `isTakenTask` عند تحميل الصفحة
  useEffect(() => {
    const checkTakenTask = Cookies.get("isTakenTask");
    setIsTakenTask(checkTakenTask === "true");
  }, []);

  const getBaseDomain = () => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    return baseUrl.endsWith("/api/") ? baseUrl.replace("/api/", "") : baseUrl;
  };

  const replaceImageUrl = (originalUrl) => {
    if (!originalUrl) return "";
    const oldDomainRegex = /^https:\/\/[^/]+/;
    const newBaseDomain = getBaseDomain();
    return originalUrl.replace(oldDomainRegex, newBaseDomain);
  };

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const jobsData = await apiRequest(`Jobs/${id}`, "GET");
        const updatedJob = {
          ...jobsData,
          companyImageUrl: replaceImageUrl(jobsData.companyImageUrl),
        };
        setJob(updatedJob);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJob();
  }, [id]);

  return (
    <Layout>
      <div className="head md:p-10 p-5 flex flex-wrap gap-5 justify-between  bg-gray-50 shadow-lg rounded-xl w-[95%] mx-auto">
        <div className="flex flex-col gap-4 ">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {job.jobTitle || "Job Title Not Available"}
          </h2>
          <div className="flex flex-wrap gap-5 items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg border-2 border-blue-400">
              <img
                className="w-full h-full object-cover"
                src={job.companyImageUrl || img}
                alt="Company Logo"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-gray-800">
                {job.companyName || "Company Name Not Available"}
              </h3>
              <div className="flex items-center text-gray-600 text-lg">
                <MapPin size={20} className="text-blue-500" />{" "}
                <span className="ml-2">
                  {job.companyLocation || "Location Not Available"}
                </span>
              </div>
              <div className="flex gap-3 text-sm font-medium">
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-lg shadow-sm">
                  {job.jobType || "Job Type Not Available"}
                </span>
                <span className="bg-green-200 text-green-900 px-3 py-1 rounded-lg shadow-sm">
                  {job.jobLocation || "Salary Not Available"}
                </span>
                <span className="bg-purple-200 text-purple-900 px-3 py-1 rounded-lg shadow-sm">
                  {job.experienceLevel || "Category Not Available"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          {!userType ? (
            <CustomButton
              height="45px"
              text="Get Started"
              type="button"
              width="180px"
              className="bg-blue-500 text-white font-bold"
              link="/select-user"
            />
          ) : (
            <>
              <CustomButton
                height="45px"
                text={isTakenTask ? "Apply Now" : "Take Test First"}
                type="button"
                width="180px"
                className="bg-blue-500 text-white font-bold"
                link={isTakenTask ? "/start-apply-now" : "/start-do-test"}
              />
              <div className="p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition-all">
                <Bookmark className="text-gray-600" />
              </div>
            </>
          )}
          <div className="p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition-all">
            <Share2 className="text-gray-600" />
          </div>
        </div>
      </div>
      <div className="body p-10 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="p-6 bg-gray-50 rounded-lg shadow-md col-span-2">
          <h3 className="text-2xl font-bold text-gray-900 border-b pb-3">
            About Us
          </h3>
          <p className="text-gray-700 mt-3 leading-relaxed">
            {job.jobDescription || "Job Description Not Available"}
          </p>
        </section>

        <section className="p-6 bg-gray-50 rounded-lg shadow-md  md:col-span-1 col-span-2">
          <h3 className="text-2xl font-bold text-gray-900 border-b pb-3">
            Responsibility
          </h3>
          <ul className="list-disc pl-6 text-gray-700 mt-3 leading-relaxed space-y-2">
            <li>
              Design user-friendly interfaces for web and mobile applications.
            </li>
            <li>
              Collaborate with developers, product managers, and stakeholders.
            </li>
            <li>
              Conduct user research, usability testing, and gather feedback.
            </li>
            <li>Maintain and enhance design consistency across platforms.</li>
          </ul>
        </section>
        <section className="p-6 bg-gray-50 rounded-lg shadow-md  md:col-span-1 col-span-2">
          <h3 className="text-2xl font-bold text-gray-900 border-b pb-3">
            Skills
          </h3>
          <ul className="list-disc pl-6 text-gray-700 mt-3 leading-relaxed space-y-2">
            {job.skills && job.skills.length > 0 ? (
              job.skills.map((skill, index) => <li key={index}>{skill}</li>)
            ) : (
              <li>No skills listed</li>
            )}
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default ViewDetailsJobPage;
