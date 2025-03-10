import { useState } from "react";
import CustomButton from "../ui/CustomButton";

const JobFilter = () => {
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

  const [clientHistory, setClientHistory] = useState({
    hire1_9: false,
    hire10Plus: false,
    noHire: false,
  });

  // Handle checkbox change for experience
  const handleExperienceChange = (level) => {
    setExperience((prev) => ({
      ...prev,
      [level]: !prev[level],
    }));
  };

  // Handle checkbox change for job type
  const handleJobTypeChange = (type) => {
    setJobType((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  // Handle checkbox change for client history
  const handleClientHistoryChange = (history) => {
    setClientHistory((prev) => ({
      ...prev,
      [history]: !prev[history],
    }));
  };
  const userType = localStorage.getItem("type user");
  return (
    <div className="w-full ">
      {/* Sidebar Content (Hidden on Mobile unless Open) */}
      <div className={`p-4 z-50  rounded-xl `}>
        {!userType && (
          <div className="fccr gap-4 my-4">
            <CustomButton
              height="30px"
              text="Talent"
              type="button"
              width="100px"
              className="!text-[var(--secondary-color)] !bg-white border_secondary !h-[30px]"
              link="/talent"
            />{" "}
            <CustomButton
              width="100px"
              height="30px"
              text="Job"
              type="button"
              link="/job"
            />
          </div>
        )}
        <h2 className="text-xl font-semibold mb-3">Filter Jobs</h2>

        {/* Experience Level Filter */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Experience Level</label>
          <div className="flex flex-col flex-wrap  gap-2 ">
            {["entry", "intermediate", "expert"].map((level) => (
              <label
                key={level}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={experience[level]}
                  onChange={() => handleExperienceChange(level)}
                  className="w-4 h-4 cursor-pointer"
                />
                <span className="capitalize">{level.replace("-", " ")}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Job Type Filter */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Job Type</label>
          <div className="flex flex-col flex-wrap  gap-2">
            {[
              { key: "fullTime", label: "Full-Time" },
              { key: "partTime", label: "Part-Time" },
              { key: "freelance", label: "Freelance" },
            ].map(({ key, label }) => (
              <label
                key={key}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={jobType[key]}
                  onChange={() => handleJobTypeChange(key)}
                  className="w-4 h-4 cursor-pointer"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Client History Filter */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Client History</label>
          <div className="flex flex-col flex-wrap  gap-2">
            {[
              { key: "hire1_9", label: "1-9 Hires" },
              { key: "hire10Plus", label: "10+ Hires" },
              { key: "noHire", label: "No Hire" },
            ].map(({ key, label }) => (
              <label
                key={key}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={clientHistory[key]}
                  onChange={() => handleClientHistoryChange(key)}
                  className="w-4 h-4 cursor-pointer"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Apply Filters Button */}
        <div className="mt-4 fccc">
          <CustomButton
            height="30px"
            text="Apply Filters"
            type="button"
            width="150px"
          />
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
