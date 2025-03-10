import { useState } from "react";
import CustomButton from "../ui/CustomButton";

const TalentFilter = () => {
  const [experience, setExperience] = useState({
    entry: false,
    intermediate: false,
    expert: false,
  });

  const [location, setLocation] = useState({
    nearMe: false,
    remote: false,
    exact: false,
    within15: false,
    within30: false,
    within50: false,
  });

  // Handle checkbox change for experience
  const handleExperienceChange = (level) => {
    setExperience((prev) => ({
      ...prev,
      [level]: !prev[level],
    }));
  };

  // Handle checkbox change for location
  const handleLocationChange = (option) => {
    setLocation((prev) => ({
      ...prev,
      [option]: !prev[option],
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
              link="/talent"
              width="100px"
            />{" "}
            <CustomButton
              height="30px"
              width="100px"
              text="Job"
              type="button"
              className="!text-[var(--secondary-color)] !bg-white border_secondary !h-[30px]"
              link="/job"
            />
          </div>
        )}
        <h2 className="text-xl font-semibold mb-3">Filter Talent</h2>

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

        {/* Location Filter */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Location</label>
          <div className="flex flex-col flex-wrap  gap-2">
            {[
              { key: "nearMe", label: "Near Me" },
              { key: "remote", label: "Remote Job" },
              { key: "exact", label: "Exact Location" },
              { key: "within15", label: "Within 15 km" },
              { key: "within30", label: "Within 30 km" },
              { key: "within50", label: "Within 50 km" },
            ].map(({ key, label }) => (
              <label
                key={key}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={location[key]}
                  onChange={() => handleLocationChange(key)}
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

export default TalentFilter;
