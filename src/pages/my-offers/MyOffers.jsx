import { Briefcase, Filter, Search, X } from "lucide-react";
import { useState } from "react";
import Layout from "../../components/layout/Layout";
import CustomButton from "../../components/ui/CustomButton";
import { Link } from "react-router-dom";

const MyOffers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [typeFilters, setTypeFilters] = useState([]);
  const [statusFilters, setStatusFilters] = useState([]);

  const data = [
    {
      Talent: "Omar Ehab",
      title: "Frontend Developer",
      type: "Freelance",
      Status: "Accept",
    },
    {
      Talent: "Omar Ehab",
      title: "Frontend Developer",
      type: "Full-Time",
      Status: "Under Review",
    },
    {
      Talent: "Omar Ehab",
      title: "Frontend Developer",
      type: "Part-Time",
      Status: "Negotiate",
    },
    {
      Talent: "Omar Ehab",
      title: "Frontend Developer",
      type: "Freelance",
      Status: "Reject",
    },
  ];
  const statusColors = {
    Accept: "bg-green-500",
    "Under Review": "bg-yellow-500",
    Negotiate: "bg-blue-500",
    Reject: "bg-red-500",
  };

  const toggleFilter = (filterType, value) => {
    if (filterType === "type") {
      setTypeFilters((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    } else if (filterType === "status") {
      setStatusFilters((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }
  };

  const filteredData = data.filter((item) => {
    const matchesSearch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      typeFilters.length === 0 || typeFilters.includes(item.type);
    const matchesStatus =
      statusFilters.length === 0 || statusFilters.includes(item.Status);
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <div className="md:flex hidden items-center justify-center p-4 mt-3">
          <h1 className="text-3xl md:text-5xl font-bold text_secondary text-center my-3">
            My Offers
          </h1>
        </div>

        <div className="flex flex-grow flex-col md:flex-row gap-6 p-4">
          <div className="flex md:hidden items-center justify-center p-4 mt-3">
            <h1 className="text-3xl md:text-5xl font-bold text_secondary text-center my-3">
              My Offers
            </h1>
          </div>

          {/* Sidebar Filters */}
          <div
            className={`fixed md:relative z-20 transition-all duration-300 ease-in-out ${
              isFilterOpen ? "left-0" : "-left-full"
            } md:left-0 w-3/4 md:w-1/4 bg-white shadow-xl p-6 h-[100vh] md:h-auto overflow-y-auto rounded-lg`}
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
                <Briefcase className="w-5 h-5" /> Type of Job
              </h4>
              {["Freelance", "Full-Time", "Part-Time"].map((type) => (
                <label
                  key={type}
                  className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={typeFilters.includes(type)}
                    onChange={() => toggleFilter("type", type)}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>

            {/* Filter by Status */}
            <div className="mb-6">
              <h4 className="text-xl mb-3 flex items-center gap-2 text-blue-600">
                <Filter className="w-5 h-5" /> Status
              </h4>
              {["Accept", "Under Review", "Negotiate", "Reject"].map(
                (status) => (
                  <label
                    key={status}
                    className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4"
                      checked={statusFilters.includes(status)}
                      onChange={() => toggleFilter("status", status)}
                    />
                    <span>{status}</span>
                  </label>
                )
              )}
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
                    <th className="border border-gray-200 p-3">Talent</th>
                    <th className="border border-gray-200 p-3">Job Title</th>
                    <th className="border border-gray-200 p-3">Type</th>
                    <th className="border border-gray-200 p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                      <tr key={index} className="text-center">
                        <td className="border border-gray-200 p-3">
                          {item.Talent}
                        </td>
                        <td className="border border-gray-200 p-3">
                          {item.title}
                        </td>
                        <td className="border border-gray-200 p-3">
                          {item.type}
                        </td>
                        <td className="border border-gray-200 p-3 rounded-lg text-white">
                          {item.Status === "Negotiate" ? (
                            <Link
                              to="/negotiate"
                              className=" w-full block rounded-md py-1 px-4 text-white bg-blue-400 hover:bg-blue-500 transition"
                            >
                              Negotiate
                            </Link>
                          ) : (
                            <div
                              className={`rounded-md py-2 px-4 text-white ${
                                statusColors[item.Status] || "bg-gray-500"
                              }`}
                            >
                              {item.Status}
                            </div>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center text-gray-500 py-4"
                      >
                        No job applications found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyOffers;
