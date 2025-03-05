import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DefaultNav from "../../../components/nav/DefaultNav";
import CustomButton from "../../../components/ui/CustomButton";
import CustomInput from "../../../components/ui/CustomInput";

const CompanyRegistration = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(1);

  const [loader, setLoader] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyName: "",
      jobTitle: "",
      industry: "",
      officialContactMethods: "",
      location: "",
      yearEstablished: "",
      terms: false,
    },
  });

  const onSubmit = (data) => {
    setLoader(true);
    console.log("Submitted Data:", data);
    localStorage.setItem("company data", JSON.stringify(data));
    setProgress(0); // Reset progress on new submission

    // Simulate file upload progress
    let uploadProgress = 1;
    const interval = setInterval(() => {
      uploadProgress += 10;
      setProgress(uploadProgress);

      if (uploadProgress >= 26) {
        clearInterval(interval); // Stop the progress when it reaches 100%
      }
    }, 500); // Adjust time interval for the progress

    // Simulate successful registration and navigate after some delay
    setTimeout(() => {
      setLoader(false);
      navigate("/company-brief-description");
    }, 3000); // Adjust delay time to simulate finalizing the registration
  };
  return (
    <div className="company-registration-container">
      <DefaultNav />
      <div className="flex items-center justify-center md:justify-around py-8 p-5">
        <div className="md:w-[40%] w-[90%]">
          <h2 className="text-4xl font-semibold mb-4">
            Enter Your Company Information
          </h2>
          <p className="text-gray-400 text-lg mb-6">
            Please provide the necessary details about your business so we can
            better assist you. This will help us tailor our services to your
            needs and ensure a smooth experience.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Controller
              name="companyName"
              control={control}
              defaultValue=""
              rules={{ required: "Company name is required" }}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label="Company Name"
                  err={errors.companyName?.message}
                  width="100%"
                  placeholder="e.g. Google, Apple, etc."
                />
              )}
            />

            <Controller
              name="jobTitle"
              control={control}
              defaultValue=""
              rules={{ required: "Job title is required" }}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label="Job Title of the Responsible Person"
                  err={errors.jobTitle?.message}
                  width="100%"
                  placeholder="e.g. CEO, HR Manager, etc."
                />
              )}
            />

            <Controller
              name="industry"
              control={control}
              defaultValue=""
              rules={{ required: "Industry is required" }}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label="Industry"
                  err={errors.industry?.message}
                  width="100%"
                  placeholder="e.g. Technology, Finance, etc."
                />
              )}
            />

            <Controller
              name="officialContactMethods"
              control={control}
              defaultValue=""
              rules={{ required: "Official contact methods are required" }}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label="Official Contact Methods"
                  err={errors.officialContactMethods?.message}
                  width="100%"
                  placeholder="Email, Phone, etc."
                />
              )}
            />

            <Controller
              name="location"
              control={control}
              defaultValue=""
              rules={{ required: "Location is required" }}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label="Location"
                  err={errors.location?.message}
                  width="100%"
                  placeholder="e.g. San Francisco, New York, etc."
                />
              )}
            />

            <Controller
              name="yearEstablished"
              control={control}
              defaultValue=""
              rules={{ required: "Year Established is required" }}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label="Year Established"
                  err={errors.yearEstablished?.message}
                  width="100%"
                  type="date"
                />
              )}
            />
            <div className="w-full  rounded-full h-2.5 bg-gray-300">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className=" w-[100%] flex justify-between mx-auto">
              <CustomButton
                className="border !bg-white border-gray-400 !text-black "
                type="button"
                height="40px"
                width="100px"
                link="/company-profile-first"
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

export default CompanyRegistration;
