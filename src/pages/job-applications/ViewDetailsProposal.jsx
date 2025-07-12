import { ChevronDown, File } from "lucide-react";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import CustomButton from "../../components/ui/CustomButton";
import apiRequest from "../../utils/apiRequest";
import { replaceImageUrl } from "../../utils/helpers";

const ViewDetailsProposal = () => {
  const [sortOption, setSortOption] = useState("The highest match");
  const [isOpen, setIsOpen] = useState(false);
  const jobId = localStorage.getItem("jobId");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const applicants = await apiRequest(
          `JobApplications/PreviewApplicantsByJob/${jobId}`,
          "GET"
        );

        if (Array.isArray(applicants)) {
          // Transform API data to match sorting fields
          const transformedData = applicants.map((item) => ({
            userProfileId: item.userProfileId,
            applicants: item.fullName,
            match_ratio: item.matchRatio || 0,
            experience: Math.floor(Math.random() * 10), // 👈 Placeholder if you don’t have experience from API
            date: item.appliedAt,
            cvFilePath: item.cvFilePath,
            profilePictureUrl: item.profilePictureUrl,
          }));
          setData(transformedData);
        } else {
          setData([]);
        }

        console.log("Applicants fetched:", applicants);
      } catch (error) {
        console.error("Error fetching applicants:", error);
      }
    };

    if (jobId) {
      fetchApplicants();
    }
  }, [jobId]);

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
  const updateStatus = async (status, userProfileId) => {
    try {
      await apiRequest(
        `JobApplications/UpdateStatus/${jobId}`,
        "PATCH",
        status
      );

      setData((prevData) =>
        prevData.filter((item) => item.userProfileId !== userProfileId)
      );

      console.log(`Status updated to ${status} for user ${userProfileId}`);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col bg-gray-100">
        <div className="p-4 mt-3 text-center">
          <h1 className="text-4xl font-bold text_secondary">
            Developer Frontend Senior
          </h1>
          <h2 className="text-3xl font-bold ">Proposals</h2>
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
                <th className="border border-gray-200 p-3">Proposal</th>
                <th className="border border-gray-200 p-3">CV</th>
                <th className="border border-gray-200 p-3">View Profile</th>
                <th className="border border-gray-200 p-3">Accept</th>
                <th className="border border-gray-200 p-3">Reject</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-200 p-3">
                      <div className="flex items-center justify-center gap-2">
                        <img
                          src={
                            replaceImageUrl(item.profilePictureUrl) ||
                            "default-avatar.png"
                          }
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
                      <div className="flex items-center justify-center gap-2 cursor-pointer">
                        <div className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                          <File /> View
                        </div>
                      </div>
                    </td>
                    <td className="border border-gray-200 p-3">
                      <div className="flex items-center justify-center gap-2 cursor-pointer">
                        <div
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                          onClick={() => {
                            window.open(
                              replaceImageUrl(item.cvFilePath),
                              "_blank"
                            );
                          }}
                        >
                          <File /> View
                        </div>
                      </div>
                    </td>
                    <td className="border border-gray-200 p-3">
                      <div className="flex items-center justify-center gap-2">
                        <CustomButton
                          text="View Profile"
                          type="button"
                          height="35px"
                          width="100px"
                          className="mx-auto !bg-transparent border border-blue-600 !text-blue-600 hover:!bg-blue-600 hover:!text-white"
                          link={`/profile/${item?.userProfileId}`}
                        />
                      </div>
                    </td>
                    <td className="border border-gray-200 p-3">
                      <CustomButton
                        text="Accept"
                        type="button"
                        height="35px"
                        width="100px"
                        className="mx-auto !bg-transparent border border-green-600 !text-green-600 hover:!bg-green-600 hover:!text-white"
                        onClick={() =>
                          updateStatus("Accepted", item.userProfileId)
                        }
                      />
                    </td>
                    <td className="border border-gray-200 p-3">
                      <CustomButton
                        text="Reject"
                        type="button"
                        height="35px"
                        width="100px"
                        className="mx-auto !bg-transparent border border-red-600 !text-red-600 hover:!bg-red-600 hover:!text-white"
                        onClick={() =>
                          updateStatus("Rejected", item.userProfileId)
                        }
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    className="border border-gray-200 p-6 text-center text-gray-500"
                    colSpan={7} // عدّلها حسب عدد الأعمدة
                  >
                    No data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default ViewDetailsProposal;
