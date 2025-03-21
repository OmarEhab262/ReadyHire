import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import CustomButton from "../../components/ui/CustomButton";

const jobLocationOptions = ["Remote", "On-Site", "Hybrid"];

const PostJobStepThree = ({ onNext, onPrev, formMethods }) => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = formMethods;

  const isByNegotiation = watch("byNegotiation");

  const onSubmit = (data) => {
    console.log("Step Three Data:", data);
    onNext();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white rounded-lg shadow-md space-y-6  md:w-[70%] mx-auto m-10"
    >
      {/* Deadline for Applications */}
      <label className="text-gray-600 font-medium">
        Deadline for Applications
      </label>
      <Controller
        control={control}
        name="applicationDeadline"
        rules={{ required: "Application deadline is required" }}
        render={({ field }) => (
          <input
            {...field}
            type="date"
            className="border rounded-md w-full px-4 py-2 mt-2 focus:ring focus:ring-blue-300"
          />
        )}
      />
      {errors.applicationDeadline && (
        <small className="text-red-500">
          {errors.applicationDeadline.message}
        </small>
      )}

      {/* Expected Salary & By Negotiation */}
      <div className="flex gap-5 flex-wrap ">
        <div className="md:w-[80%] w-full">
          <label className="text-gray-600 font-medium">Expected Salary</label>
          <Controller
            control={control}
            name="expectedSalary"
            rules={{
              required: isByNegotiation ? false : "Expected salary is required",
            }}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className="border rounded-md w-full px-4 py-2 mt-2 focus:ring focus:ring-blue-300"
                disabled={isByNegotiation}
              />
            )}
          />
          {errors.expectedSalary && !isByNegotiation && (
            <small className="text-red-500">
              {errors.expectedSalary.message}
            </small>
          )}
        </div>
        <div className="flex items-center gap-2 xl:mt-8 mt-1">
          <input
            type="checkbox"
            {...control.register("byNegotiation")}
            onChange={(e) => setValue("byNegotiation", e.target.checked)}
          />
          <label className="text-gray-600 font-medium">By Negotiation</label>
        </div>
      </div>

      {/* Working Hours */}
      <label className="text-gray-600 font-medium">Working Hours</label>
      <Controller
        control={control}
        name="workingHours"
        rules={{ required: "Working hours are required" }}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            className="border rounded-md w-full px-4 py-2 mt-2 focus:ring focus:ring-blue-300"
          />
        )}
      />
      {errors.workingHours && (
        <small className="text-red-500">{errors.workingHours.message}</small>
      )}

      {/* Job Location */}
      <label className="text-gray-600 font-medium">Job Location</label>
      <Controller
        control={control}
        name="jobLocation"
        rules={{ required: "Job location is required" }}
        render={({ field }) => (
          <select
            {...field}
            className="border rounded-md w-full px-4 py-2 mt-2 focus:ring focus:ring-blue-300"
          >
            <option value="">Select a location</option>
            {jobLocationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.jobLocation && (
        <small className="text-red-500">{errors.jobLocation.message}</small>
      )}

      {/* Navigation Buttons */}
      <div className="flex sm:justify-between justify-center flex-wrap gap-5">
        <CustomButton
          className="!text-[var(--secondary-color)] !bg-white border_secondary"
          height="45px"
          text="Previous"
          type="button"
          width="180px"
          onClick={onPrev}
        />
        <CustomButton
          height="45px"
          text="Finish"
          type="submit"
          width="180px"
          link="/post-job-success"
        />
      </div>
    </form>
  );
};

PostJobStepThree.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formMethods: PropTypes.shape({
    control: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    watch: PropTypes.func.isRequired,
    formState: PropTypes.shape({
      errors: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostJobStepThree;
