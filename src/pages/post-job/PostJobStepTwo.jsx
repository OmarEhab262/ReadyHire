import { Controller } from "react-hook-form";
import CustomButton from "../../components/ui/CustomButton";
import PropTypes from "prop-types";

const PostJobStepTwo = ({ onNext, onPrev, formMethods }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const onSubmit = (data) => {
    console.log("Step 2 Data:", data);
    onNext();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white rounded-lg shadow-md space-y-6  md:w-[70%] mx-auto m-10"
    >
      {/* Job Description */}
      <div className="my-7">
        <label className="text-gray-600 font-medium">
          Job Description <span className="text-red-500">*</span>
        </label>
        <Controller
          control={control}
          name="jobDescription"
          rules={{ required: "Job description is required" }}
          render={({ field }) => (
            <textarea
              {...field}
              className="border rounded w-full px-3 py-2 h-32 resize-none"
              placeholder="Enter job description"
            />
          )}
        />
        {errors?.jobDescription && (
          <small className="text-red-500 mt-1">
            {errors.jobDescription.message}
          </small>
        )}
      </div>

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
        <CustomButton height="45px" text="Next" type="submit" width="180px" />
      </div>
    </form>
  );
};

PostJobStepTwo.propTypes = {
  formMethods: PropTypes.shape({
    control: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    formState: PropTypes.shape({
      errors: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired, // ✅ Fixed missing prop validation
};

export default PostJobStepTwo;
