import {
  Briefcase,
  CheckCircle,
  ClipboardList,
  Edit,
  Filter,
  RefreshCcw,
  Search,
  X,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import Layout from "../../components/layout/Layout";
import CustomButton from "../../components/ui/CustomButton";
import { Link } from "react-router-dom";

const MyJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ response: [], delivery: [] });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const data = [
    {
      title: "Frontend Developer",
      type: "Freelance",
      delivery: "Delivered",
      response: "Accepted",
    },
    {
      title: "UX Designer",
      type: "Freelance",
      delivery: "In Progress",
      response: "Accepted",
    },
    {
      title: "Backend Engineer",
      type: "Freelance",
      delivery: "Not Delivered",
      response: "Needs Modification",
    },
    {
      title: "Data Analyst",
      type: "Freelance",
      delivery: "Delivered",
      response: "Accepted",
    },
    {
      title: "Marketing Specialist",
      type: "Freelance",
      delivery: "In Progress",
      response: "Needs Modification",
    },
    {
      title: "Software Tester",
      type: "Freelance",
      delivery: "Not Delivered",
      response: "Accepted",
    },
    {
      title: "Project Manager",
      type: "Freelance",
      delivery: "Delivered",
      response: "Needs Modification",
    },
    {
      title: "DevOps Engineer",
      type: "Freelance",
      delivery: "In Progress",
      response: "Accepted",
    },
    {
      title: "Mobile Developer",
      type: "Freelance",
      delivery: "Not Delivered",
      response: "Needs Modification",
    },
    {
      title: "Frontend Developer",
      type: "Freelance",
      delivery: "Delivered",
      response: "Accepted",
    },
    {
      title: "UX Designer",
      type: "Freelance",
      delivery: "In Progress",
      response: "Accepted",
    },
  ];

  const toggleFilter = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const filteredData = data.filter((item) => {
    return (
      (filters.response.length === 0 ||
        filters.response.includes(item.response)) &&
      (filters.delivery.length === 0 ||
        filters.delivery.includes(item.delivery)) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <div className="md:flex hidden items-center justify-center p-4 mt-3">
          <h2 className="text-2xl font-bold mb-4 text_secondary">My Jobs</h2>
        </div>
        <div className="flex flex-grow flex-col md:flex-row gap-6 p-4">
          <div className="flex md:hidden items-center justify-center p-4 mt-3">
            <h2 className="text-2xl font-bold mb-4 text_secondary">My Jobs</h2>
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

            {/* Filter by Employer Response */}
            <div className="mb-6">
              <h4 className="text-xl mb-3 flex items-center gap-2 text-blue-600">
                <Briefcase className="w-5 h-5" /> Employer Response
              </h4>
              <div className="space-y-3">
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleFilter("response", "Accepted")}
                    className="h-4 w-4"
                  />
                  <span>Accepted</span>
                </label>
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() =>
                      toggleFilter("response", "Needs Modification")
                    }
                    className="h-4 w-4"
                  />
                  <span>Needs Modification</span>
                </label>
              </div>
            </div>

            {/* Filter by Delivery Status */}
            <div>
              <h4 className="text-xl mb-3 flex items-center gap-2 text-green-600">
                <ClipboardList className="w-5 h-5" /> Delivery Status
              </h4>
              <div className="space-y-3">
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleFilter("delivery", "Delivered")}
                    className="h-4 w-4"
                  />
                  <span>Delivered</span>
                </label>
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleFilter("delivery", "In Progress")}
                    className="h-4 w-4"
                  />
                  <span>In Progress</span>
                </label>
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleFilter("delivery", "Not Delivered")}
                    className="h-4 w-4"
                  />
                  <span>Not Delivered</span>
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
                    <th className="border border-gray-200 p-3">Type</th>
                    <th className="border border-gray-200 p-3">
                      Delivery Status
                    </th>
                    <th className="border border-gray-200 p-3">
                      Employer Response
                    </th>
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
                      <td className="border border-gray-200 p-3 flex justify-center items-center gap-2">
                        {item.delivery === "Delivered" ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : item.delivery === "In Progress" ? (
                          <RefreshCcw className="w-5 h-5 text-yellow-500" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                        {item.delivery}
                      </td>
                      <td className="border border-gray-200 p-3">
                        {item.response === "Needs Modification" ? (
                          <div className="flex justify-center">
                            <Link
                              to={`/needs-modification`}
                              className="flex items-center gap-2 text-center"
                            >
                              {item.response}
                              <Edit className="w-5 h-5 text-blue-500" />
                            </Link>
                          </div>
                        ) : (
                          item.response
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyJobs;
