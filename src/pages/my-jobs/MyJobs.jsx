import { CheckCircle, Search } from "lucide-react";
import { useState } from "react";
import Layout from "../../components/layout/Layout";
import CustomButton from "../../components/ui/CustomButton";

const MyJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ response: [], delivery: [] });

  const data = [
    {
      title: "Frontend Developer",
      delivery: "Delivered",
      response: "Accepted",
    },
  ];

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
      <div className="flex flex-col bg-gray-100">
        <div className="flex items-center justify-center p-4 mt-3">
          <h1 className="text-3xl md:text-5xl font-bold text_secondary text-center my-3">
            My Jobs
          </h1>
        </div>

        <div className="flex flex-grow flex-col md:flex-row gap-6 p-4">
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
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex-grow overflow-auto">
              <table className="w-full min-w-[600px] border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-200 p-3">Job Title</th>
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
                        {item.delivery === "Delivered" ? (
                          <div className="flex gap-2 items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>{item.delivery}</span>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <CustomButton
                              className="!w-[200px]"
                              text="Deliver Job"
                              link="/delivery-job-page"
                            />
                          </div>
                        )}
                      </td>

                      <td className="border border-gray-200 p-3">
                        {item.response === "Needs Modification" ? (
                          <div className="flex items-center justify-center">
                            <CustomButton
                              className="!w-[200px]"
                              text="Needs Modification"
                              link="/needs-modification"
                            />
                          </div>
                        ) : (
                          <span>{item.response}</span>
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
