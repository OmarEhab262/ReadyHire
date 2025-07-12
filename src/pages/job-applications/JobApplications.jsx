import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import CustomButton from "../../components/ui/CustomButton";
import apiRequest from "../../utils/apiRequest";

const JobApplications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [titleJobs, setTitleJobs] = useState([]);
  const [applicantsCount, setApplicantsCount] = useState([]);

  const company = JSON.parse(localStorage.getItem("company data"));
  const companyProfileId = company?.id;
  const localUser = JSON.parse(localStorage.getItem("user"));
  const localUserId = localUser?.companyProfileId;
  const userId = companyProfileId || localUserId;

  // Merge jobs + counts
  const mergedData = titleJobs.map((job) => {
    const countObj = applicantsCount.find((c) => c.jobId === job.jobId);
    return {
      jobId: job.jobId,
      title: job.jobTitle || "Untitled",
      applicants: countObj?.count ?? 0,
    };
  });

  // Search filter
  const searchedData = mergedData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchJobsAndApplicants = async () => {
      try {
        const jobsData = await apiRequest(
          `Jobs/TitlesByCompany/${userId}`,
          "GET"
        );
        setTitleJobs(jobsData || []);

        const countList = await Promise.all(
          jobsData.map(async (job) => {
            const countData = await apiRequest(
              `JobApplications/CountByJob/${job.jobId}`,
              "GET"
            );
            return {
              jobId: job.jobId,
              count: countData?.numberOfApplicants ?? 0,
            };
          })
        );
        setApplicantsCount(countList);
      } catch (error) {
        console.error("Error fetching jobs or applicants:", error);
      }
    };

    if (userId) {
      fetchJobsAndApplicants();
    }
  }, [userId]);
  if (!userId) {
    return <p className="text-center p-10">User ID not found.</p>;
  }

  return (
    <Layout>
      <div className=" flex flex-col bg-gray-100">
        <div className="md:flex hidden items-center justify-center p-4 mt-3">
          <h1 className="text-3xl md:text-5xl font-bold text_secondary text-center my-3">
            Job Applications
          </h1>
        </div>
        <div className="flex flex-grow flex-col md:flex-row gap-6 p-4">
          <div className="flex md:hidden items-center justify-center p-4 mt-3">
            <h1 className="text-3xl md:text-5xl font-bold text_secondary text-center my-3">
              Job Applications
            </h1>
          </div>

          <div className="flex-grow flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-full flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by Job Title..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 pl-12 pr-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition-all"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex-grow overflow-auto">
              <table className="w-full min-w-[600px] border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-200 p-3">Job Title</th>
                    <th className="border border-gray-200 p-3">
                      Number of Applicants
                    </th>
                    <th className="border border-gray-200 p-3">View Details</th>
                  </tr>
                </thead>
                <tbody>
                  {searchedData.map((item) => (
                    <tr key={item.jobId} className="text-center">
                      <td className="border border-gray-200 p-3">
                        {item.title}
                      </td>
                      <td className="border border-gray-200 p-3">
                        {item.applicants}
                      </td>
                      <td className="border border-gray-200 p-3">
                        <CustomButton
                          text="View Details"
                          type="button"
                          height="35px"
                          width="100px"
                          className="mx-auto"
                          onClick={() =>
                            localStorage.setItem(
                              "jobId",
                              JSON.stringify(item.jobId)
                            )
                          }
                          link={"/view-details-proposal"}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {searchedData.length === 0 && (
                <p className="text-center text-gray-500 py-4">
                  No job applications found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobApplications;
