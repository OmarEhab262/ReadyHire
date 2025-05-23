import { Briefcase, Filter, Search, X } from "lucide-react";
import { useState } from "react";
import Layout from "../../components/layout/Layout";
import CustomButton from "../../components/ui/CustomButton";

const JobApplications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const data = [
    { title: "Frontend Developer", type: "Proposal", applicants: 25 },
    { title: "UX Designer", type: "Proposal", applicants: 18 },
    { title: "Backend Engineer", type: "Proposal", applicants: 30 },
    { title: "Data Analyst", type: "Proposal", applicants: 22 },
    { title: "Marketing Specialist", type: "Assessments", applicants: 15 },
  ];

  const filteredData = filter
    ? data.filter((item) => item.type === filter)
    : data;

  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-gray-100">
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

          {/* Sidebar Filters */}
          <div
            className={`fixed md:relative z-20 transition-all duration-300 ease-in-out ${
              isFilterOpen ? "left-0" : "-left-full"
            } md:left-0 w-3/4 md:w-1/4 bg-white shadow-xl p-6 h-[100vh] md:h-[500px] overflow-y-auto rounded-lg`}
          >
            <button
              className="md:hidden absolute top-4 right-4 text-gray-500"
              onClick={() => setIsFilterOpen(false)}
            >
              <X className="w-6 h-6" color="red" />
            </button>

            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Filters
            </h3>

            {/* Filter by Type */}
            <div className="mb-6">
              <h4 className="text-xl mb-3 flex items-center gap-2 text-blue-600">
                <Briefcase className="w-5 h-5" /> Type of Applicants
              </h4>
              <div className="space-y-3">
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="radio"
                    name="filter"
                    className="h-4 w-4"
                    checked={filter === "Proposal"}
                    onChange={() => setFilter("Proposal")}
                  />
                  <span>Proposal</span>
                </label>
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="radio"
                    name="filter"
                    className="h-4 w-4"
                    checked={filter === "Assessments"}
                    onChange={() => setFilter("Assessments")}
                  />
                  <span>Assessments</span>
                </label>
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="radio"
                    name="filter"
                    className="h-4 w-4"
                    checked={filter === ""}
                    onChange={() => setFilter("")}
                  />
                  <span>All</span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Table */}
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
              <div className="flex md:hidden items-center gap-4">
                <CustomButton
                  width="60px"
                  height="40px"
                  onClick={() => setIsFilterOpen(true)}
                  icon={<Filter className="w-5 h-5" />}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex-grow overflow-auto">
              <table className="w-full min-w-[600px] border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-200 p-3">Job Title</th>
                    <th className="border border-gray-200 p-3">
                      Type of Applicants
                    </th>
                    <th className="border border-gray-200 p-3">
                      Number of Applicants
                    </th>
                    <th className="border border-gray-200 p-3">View Details</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={index} className="text-center">
                      <td className="border border-gray-200 p-3">
                        {item.title}
                      </td>
                      <td className="border border-gray-200 p-3">
                        {item.type}
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
                          link={
                            item.type === "Proposal"
                              ? "/view-details-proposal"
                              : "/view-details-assessment"
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredData.length === 0 && (
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
