import { Controller } from "react-hook-form";
import { X } from "lucide-react";
import PropTypes from "prop-types";
import CustomButton from "../../components/ui/CustomButton";

const jobCategories = [
  "Education & Coaching",
  "Marketing & Sales",
  "HR & Recruitment",
  "Data Entry & Administration",
  "IT & Tech",
];
const jobTypes = ["Full Time", "Part Time", "Freelance"];
const experienceLevels = ["Beginner", "Intermediate", "Advanced"];

const PostJobStepOne = ({ onNext, formMethods }) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = formMethods;

  const addSkill = () => {
    const currentSkills = getValues("skills") || [];
    const skillInput = getValues("skillInput");
    if (skillInput && !currentSkills.includes(skillInput)) {
      setValue("skills", [...currentSkills, skillInput]);
      setValue("skillInput", "");
    }
  };

  const removeSkill = (skill) => {
    setValue(
      "skills",
      getValues("skills").filter((s) => s !== skill)
    );
  };

  const onSubmit = (data) => {
    const cleanedData = { ...data };
    delete cleanedData.skillInput;

    console.log("Form Data After Cleanup:", cleanedData);
    onNext();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white rounded-lg shadow-md space-y-6 md:w-[70%] mx-auto mt-10"
    >
      <div>
        <label className="text-gray-600 font-medium">Job Title</label>
        <Controller
          control={control}
          name="jobTitle"
          rules={{ required: "Job title is required" }}
          render={({ field }) => (
            <input
              {...field}
              placeholder="Enter job title"
              type="text"
              className="border rounded-md w-full px-4 py-2 mt-2 focus:ring focus:ring-blue-300"
            />
          )}
        />
        {errors.jobTitle && (
          <p className="text-red-500 text-sm mt-1">{errors.jobTitle.message}</p>
        )}
      </div>

      {/* Job Category */}
      <div>
        <label className="text-gray-600 font-medium">Job Category</label>
        <Controller
          control={control}
          name="jobCategory"
          rules={{ required: "Job category is required" }}
          render={({ field }) => (
            <select
              {...field}
              className="border rounded-md w-full px-4 py-2 mt-2 focus:ring focus:ring-blue-300"
            >
              <option value="">Select a category</option>
              {jobCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          )}
        />
        {errors.jobCategory && (
          <p className="text-red-500 text-sm mt-1">
            {errors.jobCategory.message}
          </p>
        )}
      </div>

      {/* Job Type */}
      <div>
        <label className="text-gray-600 font-medium">Job Type</label>
        <Controller
          control={control}
          name="jobType"
          rules={{ required: "Job type is required" }}
          render={({ field }) => (
            <select
              {...field}
              className="border rounded-md w-full px-4 py-2 mt-2 focus:ring focus:ring-blue-300"
            >
              <option value="">Select a Type</option>
              {jobTypes.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          )}
        />
        {errors.jobType && (
          <p className="text-red-500 text-sm mt-1">{errors.jobType.message}</p>
        )}
      </div>

      {/* Experience Level */}
      <div>
        <label className="text-gray-600 font-medium">Experience Level</label>
        <Controller
          control={control}
          name="experienceLevel"
          rules={{ required: "Experience level is required" }}
          render={({ field }) => (
            <select
              {...field}
              className="border rounded-md w-full px-4 py-2 mt-2 focus:ring focus:ring-blue-300"
            >
              <option value="">Select an Experience Level</option>
              {experienceLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          )}
        />
        {errors.experienceLevel && (
          <p className="text-red-500 text-sm mt-1">
            {errors.experienceLevel.message}
          </p>
        )}
      </div>

      {/* Skills Input */}
      <div>
        <label className="text-gray-600 font-medium">
          Skills <span className="text-gray-400">(Add multiple)</span>
        </label>
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            {...register("skillInput")}
            placeholder="Enter a skill"
            className="border rounded-md px-4 py-2 w-full focus:ring focus:ring-blue-300"
          />
          <button
            type="button"
            onClick={addSkill}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap mt-2 gap-2">
          {watch("skills")?.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center"
            >
              {skill}
              <X
                color="red"
                width={20}
                onClick={() => removeSkill(skill)}
                className="cursor-pointer ml-2 hover:text-red-600"
              />
            </span>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex sm:justify-between justify-center flex-wrap gap-5">
        <CustomButton
          type="button"
          text="Cancel"
          height="45px"
          width="120px"
          className=" !bg-red-600"
          link="/profile-company"
        />
        <CustomButton type="submit" text="Next" height="45px" width="120px" />
      </div>
    </form>
  );
};

PostJobStepOne.propTypes = {
  onNext: PropTypes.func.isRequired,
  formMethods: PropTypes.shape({
    register: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    control: PropTypes.object.isRequired,
    setValue: PropTypes.func.isRequired,
    getValues: PropTypes.func.isRequired,
    watch: PropTypes.func.isRequired,
    formState: PropTypes.shape({
      errors: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostJobStepOne;
