import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DefaultNav from "../../../components/nav/DefaultNav";
import CustomButton from "../../../components/ui/CustomButton";
import { useNavigate } from "react-router-dom";

const BriefDescription = () => {
  const [progress, setProgress] = useState(25); // Start progress at 25%
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  // Using react-hook-form
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Description:", data.description);
    setLoader(true);

    // Retrieve the existing company data from localStorage
    const existingData = JSON.parse(localStorage.getItem("company data")) || {};

    // Add the description to the existing data
    const updatedData = {
      ...existingData,
      description: data.description,
    };

    // Save the updated data back to localStorage
    localStorage.setItem("company data", JSON.stringify(updatedData));

    // Simulate progress update on submit click
    let progressValue = 25; // Start from 25%
    const interval = setInterval(() => {
      progressValue += 10; // Increase progress by 5 each step
      setProgress(progressValue);

      if (progressValue >= 50) {
        clearInterval(interval); // Stop once we reach 50%
      }
    }, 500); // Adjust time for how fast the progress should update

    // Simulate navigation delay
    setTimeout(() => {
      setLoader(false);
      navigate("/company-commercial-registration");
    }, 3000); // Adjust delay time to simulate finalizing the registration
  };

  return (
    <div className="company-registration-container">
      <DefaultNav />
      <div className="flex items-center justify-center md:justify-around py-8 p-5">
        <div className="md:w-[40%] w-[90%]">
          <h2 className="text-4xl font-semibold mb-4">Brief Description</h2>
          <p className="text-gray-400 text-lg mb-6">
            Please provide a brief description of your company. This will help
            us better understand your business and provide tailored services.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Description Input with react-hook-form */}
            <div className="mb-4">
              <label
                className={`block text-sm mb-2 ${
                  errors.description ? "text-red-500" : "text-gray-500"
                }`}
              >
                Description
              </label>
              <Controller
                name="description"
                control={control}
                rules={{ required: "Description is required" }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Enter your description here"
                    className={`${
                      errors.description
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300"
                    } border rounded p-2 w-full h-24`}
                  />
                )}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Progress Bar */}
            <div className="w-full  rounded-full h-2.5 bg-gray-300">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Continue Button */}
            <div className=" w-[100%] flex justify-between mx-auto">
              <CustomButton
                className="border !bg-white border-gray-400 !text-black "
                type="button"
                height="40px"
                width="100px"
                link="/company-registration"
                text="Back"
              />
              <CustomButton
                height="40px"
                text="Continue"
                type="submit"
                width="100px"
                loader={loader}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BriefDescription;
