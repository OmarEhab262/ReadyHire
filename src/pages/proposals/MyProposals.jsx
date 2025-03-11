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
import { useState } from "react";
import Layout from "../../components/layout/Layout";
import CustomButton from "../../components/ui/CustomButton";

const MyProposals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ type: [], status: [] });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const data = [
    {
      title: "Senior Frontend Developer",
      type: "Proposal",
      status: "Under Review",
      submitted: "March 5, 2025",
    },
    {
      title: "Lead UX Designer",
      type: "Assessments",
      status: "Was Accepted",
      submitted: "March 2, 2025",
    },
    {
      title: "Backend Engineer - API Specialist",
      type: "Proposal",
      status: "Was Rejected",
      submitted: "March 1, 2025",
    },
    {
      title: "Junior Frontend Developer",
      type: "Proposal",
      status: "Was Accepted",
      submitted: "March 5, 2025",
    },
    {
      title: "React Frontend Developer",
      type: "Proposal",
      status: "Was Accepted",
      submitted: "March 5, 2025",
    },
    {
      title: "Frontend Developer (UI Focus)",
      type: "Proposal",
      status: "Was Accepted",
      submitted: "March 5, 2025",
    },
    {
      title: "UX Researcher",
      type: "Assessments",
      status: "Was Accepted",
      submitted: "March 2, 2025",
    },
    {
      title: "Backend Engineer - Database Expert",
      type: "Proposal",
      status: "Was Rejected",
      submitted: "March 1, 2025",
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
      (filters.type.length === 0 || filters.type.includes(item.type)) &&
      (filters.status.length === 0 || filters.status.includes(item.status)) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-gray-100">
        {/* زر فتح الفلاتر في الهاتف */}
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
          {/* القائمة الجانبية للفلاتر - تظهر كـ Drawer في الهاتف */}
          <div
            className={`fixed md:relative z-20 transition-all duration-300 ease-in-out ${
              isFilterOpen ? "left-0" : "-left-full"
            } md:left-0 w-3/4 md:w-1/4 bg-white shadow-xl p-6 h-[100vh] md:h-[500px] overflow-y-auto rounded-lg`}
          >
            {/* زر الإغلاق في الهاتف */}
            <button
              className="md:hidden absolute top-4 right-4 text-gray-500"
              onClick={() => setIsFilterOpen(false)}
            >
              <X className="w-6 h-6" color="red" />
            </button>

            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Filters
            </h3>

            {/* تصفية حسب النوع */}
            <div className="mb-6">
              <h4 className="text-xl mb-3 flex items-center gap-2 text-blue-600">
                <Briefcase className="w-5 h-5 " /> Type
              </h4>
              <div className="space-y-3">
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleFilter("type", "Proposal")}
                    className="h-4 w-4"
                  />
                  <span>Proposal</span>
                </label>
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleFilter("type", "Assessments")}
                    className="h-4 w-4"
                  />
                  <span>Assessments</span>
                </label>
              </div>
            </div>

            {/* تصفية حسب الحالة */}
            <div>
              <h4 className="text-xl mb-3 flex items-center gap-2 text-green-600">
                <ClipboardList className="w-5 h-5" /> Status
              </h4>
              <div className="space-y-3">
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleFilter("status", "Was Accepted")}
                    className="h-4 w-4"
                  />
                  <span>Was Accepted</span>
                </label>
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleFilter("status", "Was Rejected")}
                    className="h-4 w-4"
                  />
                  <span>Was Rejected</span>
                </label>
                <label className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleFilter("status", "Under Review")}
                    className="h-4 w-4"
                  />
                  <span>Under Review</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex-grow flex flex-col">
            <div className=" flex flex-col">
              <div className="flex  items-center gap-4 mb-6">
                {/* مربع البحث */}
                <div className="relative w-full md:max-w-full lg:max-w-full flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by Job Title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 pl-12 pr-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition-all"
                  />
                </div>

                {/* زر الفلتر يظهر فقط في الشاشات الصغيرة */}
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

            {/* الجدول */}
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
                  {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                      <tr key={index} className="text-center">
                        <td className="border border-gray-200 p-3">
                          {item.title}
                        </td>
                        <td className="border border-gray-200 p-3">
                          {item.type}
                        </td>
                        <td className="border border-gray-200 p-3">
                          {item.status === "Was Accepted" && (
                            <CheckCircle className="w-5 h-5 text-green-500 inline mr-2" />
                          )}
                          {item.status === "Was Rejected" && (
                            <XCircle className="w-5 h-5 text-red-500 inline mr-2" />
                          )}
                          {item.status === "Under Review" && (
                            <RefreshCcw className="w-5 h-5 text-yellow-500 inline mr-2" />
                          )}
                          {item.status}
                        </td>
                        <td className="border border-gray-200 p-3">
                          {item.submitted}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={4}
                        className="text-center py-4 text-gray-500"
                      >
                        No matching results found.
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

export default MyProposals;
