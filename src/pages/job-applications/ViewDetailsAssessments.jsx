import { useState } from "react";
import { File, Search, ChevronDown } from "lucide-react";
import Layout from "../../components/layout/Layout";
import CustomButton from "../../components/ui/CustomButton";
import image from "../../assets/images/team-01.png";

const ViewDetailsAssessments = () => {
  const [sortOption, setSortOption] = useState("The highest match");
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([
    {
      applicants: "Amr gamal",
      match_ratio: 90,
      experience: 5,
      date: "2024-03-15",
    },
    {
      applicants: "Omar Ehab",
      match_ratio: 100,
      experience: 8,
      date: "2024-03-10",
    },
    {
      applicants: "Ali Ahmed",
      match_ratio: 60,
      experience: 3,
      date: "2024-03-18",
    },
  ]);

  const sortData = (option) => {
    let sortedData = [...data];
    switch (option) {
      case "The highest match":
        sortedData.sort((a, b) => b.match_ratio - a.match_ratio);
        break;
      case "The most experienced":
        sortedData.sort((a, b) => b.experience - a.experience);
        break;
      case "Older":
        sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "Latest":
        sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        break;
    }
    setData(sortedData);
    setSortOption(option);
    setIsOpen(false);
  };

  return (
    <Layout>
      <div className="flex flex-col bg-gray-100">
        <div className="p-4 mt-3">
          <h1 className="text-4xl font-bold text_secondary">
            Developer Frontend Senior
          </h1>
          <h2 className="text-3xl font-bold ">Assessments</h2>
        </div>

        {/* قائمة الفرز */}

        {/* الجدول */}
        <div className="bg-white p-6 m-5 rounded-lg shadow-lg flex-grow overflow-auto">
          <div className="mb-4 flex items-center gap-4 relative p-4 ">
            <span className="font-bold">Sorted by:</span>
            <div className="relative">
              <button
                className="border_secondary px-4 py-2 rounded-md flex items-center justify-between gap-2 bg-gray-100 w-56 !text-black"
                onClick={() => setIsOpen(!isOpen)}
              >
                {sortOption} <ChevronDown size={16} />
              </button>

              {isOpen && (
                <ul className="absolute bg-white shadow-md rounded-md mt-1 w-56 z-10">
                  {[
                    "The highest match",
                    "The most experienced",
                    "Older",
                    "Latest",
                  ].map((option) => (
                    <li
                      key={option}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"
                      onClick={() => sortData(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <table className="w-full min-w-[600px] border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 p-3">Applicants</th>
                <th className="border border-gray-200 p-3">Match ratio</th>
                <th className="border border-gray-200 p-3">Assessments</th>
                <th className="border border-gray-200 p-3">CV</th>
                <th className="border border-gray-200 p-3">View Profile</th>
                <th className="border border-gray-200 p-3">Accept</th>
                <th className="border border-gray-200 p-3">Reject</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-200 p-3">
                    <div className="flex items-center justify-center gap-2">
                      <img
                        src={image}
                        className="w-8 h-8 rounded-full"
                        alt=""
                      />
                      {item.applicants}
                    </div>
                  </td>
                  <td className="border border-gray-200 p-3">
                    {item.match_ratio}%
                  </td>
                  <td className="border border-gray-200 p-3">
                    <div className="flex items-center justify-center gap-2">
                      <File /> View
                    </div>
                  </td>
                  <td className="border border-gray-200 p-3">
                    <div className="flex items-center justify-center gap-2">
                      <File /> View
                    </div>
                  </td>
                  <td className="border border-gray-200 p-3">
                    <div className="flex items-center justify-center gap-2">
                      <Search /> Preview
                    </div>
                  </td>
                  <td className="border border-gray-200 p-3">
                    <CustomButton
                      text="Accept"
                      type="button"
                      height="35px"
                      width="100px"
                      className="mx-auto !bg-transparent border border-green-600 !text-green-600 hover:!bg-green-600 hover:!text-white"
                    />
                  </td>
                  <td className="border border-gray-200 p-3">
                    <CustomButton
                      text="Reject"
                      type="button"
                      height="35px"
                      width="100px"
                      className="mx-auto !bg-transparent border border-red-600 !text-red-600 hover:!bg-red-600 hover:!text-white"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default ViewDetailsAssessments;
