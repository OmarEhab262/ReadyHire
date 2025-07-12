import PropTypes from "prop-types";

const JobFilter = ({ experience, setExperience, jobType, setJobType }) => {
  const handleExperienceChange = (level) => {
    setExperience((prev) => ({ ...prev, [level]: !prev[level] }));
  };

  const handleJobTypeChange = (type) => {
    setJobType((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="w-full p-4 rounded-xl">
      <h2 className="text-xl font-semibold mb-3">Filter Jobs</h2>

      <div className="mb-4">
        <label className="block font-medium mb-2">Experience Level</label>
        <div className="flex flex-col gap-2">
          {["entry", "intermediate", "expert"].map((level) => (
            <label key={level} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={experience[level]}
                onChange={() => handleExperienceChange(level)}
                className="w-4 h-4"
              />
              <span className="capitalize">{level}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2">Job Type</label>
        <div className="flex flex-col gap-2">
          {[
            { key: "fullTime", label: "Full-Time" },
            { key: "partTime", label: "Part-Time" },
            { key: "freelance", label: "Freelance" },
          ].map(({ key, label }) => (
            <label key={key} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={jobType[key]}
                onChange={() => handleJobTypeChange(key)}
                className="w-4 h-4"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

JobFilter.propTypes = {
  experience: PropTypes.object,
  setExperience: PropTypes.func,
  jobType: PropTypes.object,
  setJobType: PropTypes.func,
};

export default JobFilter;
