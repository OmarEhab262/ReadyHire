import { Search, Filter, X } from "lucide-react";
import { useEffect, useState } from "react";
import JobFilter from "../../components/job/JobFilter";
import Layout from "../../components/layout/Layout";
import CardJob from "../../components/ui/CardJob";
import apiRequest from "../../utils/apiRequest";

const Job = () => {
  const [clicked, setClicked] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [experience, setExperience] = useState({
    entry: false,
    intermediate: false,
    expert: false,
  });

  const [jobType, setJobType] = useState({
    fullTime: false,
    partTime: false,
    freelance: false,
  });

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
    const fetchJobs = async () => {
      try {
        const jobsData = await apiRequest("Jobs", "GET");
        const updatedJobs = jobsData.map((job) => ({
          ...job,
          companyImageUrl: replaceImageUrl(job?.companyImageUrl),
        }));
        setJobs(updatedJobs);
        console.log("Jobs fetched successfully:", updatedJobs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const filteredJobs = jobs.filter((job) => {
    // فلترة الـ experience level
    const expOk =
      !Object.values(experience).includes(true) ||
      (experience.entry && job.experienceLevel.toLowerCase() === "beginner") ||
      (experience.intermediate &&
        job.experienceLevel.toLowerCase() === "intermediate") ||
      (experience.expert && job.experienceLevel.toLowerCase() === "advanced");

    // فلترة الـ job type
    const typeOk =
      !Object.values(jobType).includes(true) ||
      (jobType.fullTime && job.jobType.toLowerCase().includes("full")) ||
      (jobType.partTime && job.jobType.toLowerCase().includes("part")) ||
      (jobType.freelance && job.jobType.toLowerCase().includes("freelance"));

    return expOk && typeOk;
  });

  return (
    <Layout>
      <div className="flex flex-col items-center text-center p-6 md:p-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Find Your <span className="text_secondary">Dream Job</span> Today
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mt-3 max-w-2xl">
          Explore thousands of opportunities in tech, engineering, and more.
          Take the next step in your career—start your job search now!
        </p>
      </div>

      <div className="w-full px-4 md:px-10">
        <div className="relative max-w-lg mx-auto flex shadow-lg rounded-lg overflow-hidden">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Search size={23} color="#1971c2" />
          </div>
          <input
            type="text"
            placeholder="Search jobs..."
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

      <div className="flex lg:flex-row flex-col gap-8 my-12 px-4 md:px-10">
        <div className="lg:w-1/4 w-full lg:block hidden p-5 sticky top-0 bg-white shadow-md rounded-lg">
          <JobFilter
            experience={experience}
            setExperience={setExperience}
            jobType={jobType}
            setJobType={setJobType}
          />
        </div>

        <div
          className={`fixed top-0 left-0 lg:hidden block w-3/4 h-full bg-white shadow-lg p-5 transform transition-transform duration-300 ease-in-out z-50 ${
            filterOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-gray-600 text-lg"
            onClick={() => setFilterOpen(false)}
          >
            <X size={24} color="red" />
          </button>
          <JobFilter
            experience={experience}
            setExperience={setExperience}
            jobType={jobType}
            setJobType={setJobType}
          />
        </div>

        <div className="lg:w-3/4 w-full bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="lg:hidden flex justify-end px-4 my-4">
            <button
              className="flex items-center gap-2 bg_secondary text-white px-4 py-2 rounded-md shadow-md"
              onClick={() => setFilterOpen(true)}
            >
              <Filter size={20} />
              Filters
            </button>
          </div>
          <div className="grid grid-cols-1 justify-items-center gap-6 overflow-y-auto max-h-[calc(100vh-150px)]">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <CardJob
                  key={job.id}
                  id={job.id}
                  img={job.companyImageUrl}
                  title={job.jobTitle}
                  location={job.jobLocation}
                  companyName={job.companyName}
                  experience={job.experienceLevel}
                  link={`/view-details-job/${job.id}`}
                  budget={job.expectedSalary}
                  type={job.jobType}
                  time={job.createdAt}
                  jobType={job.jobType}
                  jobCategory={job.jobCategory}
                />
              ))
            ) : (
              <div className="text-gray-500 text-lg h-32 flex items-center justify-center">
                No jobs found. Please check back later.
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Job;
