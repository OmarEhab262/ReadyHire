import {
  Briefcase,
  CheckCircle,
  ClipboardList,
  Filter,
  RefreshCcw,
  Search,
  X,
  XCircle,
} from "lucide-react";

import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import CustomButton from "../../components/ui/CustomButton";
import apiRequest from "../../utils/apiRequest";

const MyProposals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ type: [], status: [] });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [proposals, setProposals] = useState([]);

  const localUser = JSON.parse(localStorage.getItem("company data"));
  const localUserId = localUser?.id;
  const localUserrrr = JSON.parse(localStorage.getItem("user"));
  const localUserrrrId = localUserrrr?.userProfileId;

  const userId = localUserId || localUserrrrId;

  useEffect(() => {
    if (!userId) {
      console.error("No user ID found in URL or localStorage.");
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const JobApplications = await apiRequest(
          `JobApplications/ByUserProfile/${userId}`,
          "GET"
        );
        console.log("User fetched successfully:", JobApplications);
        setProposals(JobApplications);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  const toggleFilter = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const filteredData = proposals.filter((item) => {
    // احسب الحالة: لو فاضية تعتبر Pending
    const itemStatus = item.status ? item.status : "Pending";

    return (
      (filters.type.length === 0 || filters.type.includes(item.type)) &&
      (filters.status.length === 0 || filters.status.includes(itemStatus)) &&
      item.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Layout>
      <div className="flex flex-col bg-gray-100">
        <div className="md:flex hidden items-center justify-center p-4 mt-3">
          <h1 className="text-3xl md:text-5xl font-bold text_secondary text-center my-3">
            My proposals & Assessments
          </h1>
        </div>
        <div className="flex flex-grow flex-col md:flex-row gap-6 p-4">
          <div className="flex md:hidden items-center justify-center p-4 mt-3">
            <h1 className="text-3xl md:text-5xl font-bold text_secondary text-center my-3">
              My proposals & Assessments
            </h1>
          </div>

          {/* Filters Sidebar */}
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

            {/* Type Filter */}
            <div className="mb-6">
              <h4 className="text-xl mb-3 flex items-center gap-2 text-blue-600">
                <Briefcase className="w-5 h-5" /> Type
              </h4>
              <div className="space-y-3">
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleFilter("type", "Full Time")}
                    className="h-4 w-4"
                  />
                  <span>Full Time</span>
                </label>
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleFilter("type", "Part Time")}
                    className="h-4 w-4"
                  />
                  <span>Part Time</span>
                </label>
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleFilter("type", "Freelance")}
                    className="h-4 w-4"
                  />
                  <span>Freelance</span>
                </label>
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <h4 className="text-xl mb-3 flex items-center gap-2 text-green-600">
                <ClipboardList className="w-5 h-5" /> Status
              </h4>
              <div className="space-y-3">
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleFilter("status", "Accepted")}
                    className="h-4 w-4"
                  />
                  <span>Accepted</span>
                </label>
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleFilter("status", "Rejected")}
                    className="h-4 w-4"
                  />
                  <span>Rejected</span>
                </label>
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleFilter("status", "Pending")}
                    className="h-4 w-4"
                  />
                  <span>Pending</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex-grow flex flex-col">
            <div className="flex flex-col">
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
            </div>

            {/* Table */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex-grow overflow-auto">
              <table className="w-full min-w-[600px] border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-200 p-3">Job Title</th>
                    <th className="border border-gray-200 p-3">Type</th>
                    <th className="border border-gray-200 p-3">Status</th>
                    <th className="border border-gray-200 p-3">Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="border border-gray-200 p-3">
                      Frontend React Developer
                    </td>
                    <td className="border border-gray-200 p-3">Full Time</td>
                    <td className="border border-gray-200 p-3">
                      <div className="flex items-center justify-center text-green-600">
                        <CheckCircle className="w-5 h-5 mr-1" /> Accepted
                      </div>
                    </td>
                    <td className="border border-gray-200 p-3">7/10/2025</td>
                  </tr>
                  <tr className="text-center">
                    <td className="border border-gray-200 p-3">
                      Frontend React Developer
                    </td>
                    <td className="border border-gray-200 p-3">Freelance</td>
                    <td className="border border-gray-200 p-3">
                      <div className="flex items-center justify-center text-green-600">
                        <CheckCircle className="w-5 h-5 mr-1" /> Accepted
                      </div>
                    </td>
                    <td className="border border-gray-200 p-3">7/10/2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyProposals;
