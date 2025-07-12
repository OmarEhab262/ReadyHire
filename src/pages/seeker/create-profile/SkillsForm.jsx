import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/layout/Layout";
import CustomAlertMessage from "../../../components/ui/CustomAlertMassage";
import CustomButton from "../../../components/ui/CustomButton";
import apiRequest from "../../../utils/apiRequest";

const FullProfileMultiStep = () => {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState({ message: "", type: "" });
  const user = JSON.parse(localStorage.getItem("userProfiles"));
  const UserId = user?.id;
  // Experience Level
  const expForm = useForm({
    defaultValues: {
      jobTitle: "",
      organizationName: "",
      startDate: "",
      endDate: "",
    },
  });

  // Language
  const langForm = useForm({ defaultValues: { LanguageType: "" } });

  // Education
  const eduForm = useForm({
    defaultValues: {
      university: "",
      faculty: "",
      degree: "",
      startDate: "",
      endDate: "",
    },
  });

  // Skills
  const skillsForm = useForm({ defaultValues: { Name: "" } });

  // About Me
  const aboutForm = useForm({
    defaultValues: {
      title: "",
      Disciption: "",
    },
  });

  const handleSubmitSection = async (endpoint, data, nextPath) => {
    try {
      const payload = {
        ...data,
        userProfileId: UserId, // أو UserId فقط حسب اسم الحقل في الـ API
      };
      console.log("Submitting:", payload);
      await apiRequest(endpoint, "POST", payload);
      setAlertMessage({ message: "Saved successfully!", type: "success" });
      if (nextPath) navigate(nextPath);
    } catch (error) {
      setAlertMessage({
        message: error.response?.data?.message || "Saving failed. Try again.",
        type: "error",
      });
    }
  };

  return (
    <Layout>
      <div className="m-5 mx-auto">
        <h2 className="text-[40px] font-semibold mb-4">Create Profile</h2>
      </div>{" "}
      <div className="flex flex-col gap-4 py-10 px-4 w-[600px] mx-auto bg-white shadow-md rounded-md my-5">
        {/* Experience */}
        <form
          onSubmit={expForm.handleSubmit((data) =>
            handleSubmitSection("Experience", data)
          )}
          className="p-6 space-y-4"
        >
          <h3 className="text-xl font-semibold">Experience</h3>

          <Controller
            control={expForm.control}
            name="jobTitle"
            rules={{ required: "Job title is required" }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Job Title"
                className="border rounded-md w-full px-4 py-2 focus:ring focus:ring-blue-300"
              />
            )}
          />

          <Controller
            control={expForm.control}
            name="organizationName"
            rules={{ required: "Organization name is required" }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Organization Name"
                className="border rounded-md w-full px-4 py-2 focus:ring focus:ring-blue-300"
              />
            )}
          />

          <Controller
            control={expForm.control}
            name="startDate"
            rules={{ required: "Start date is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="date"
                className="border rounded-md w-full px-4 py-2 focus:ring focus:ring-blue-300"
              />
            )}
          />
          <Controller
            control={expForm.control}
            name="endDate"
            rules={{ required: "End date is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="date"
                className="border rounded-md w-full px-4 py-2 focus:ring focus:ring-blue-300"
              />
            )}
          />

          <CustomButton type="submit" text="Next" height="35px" width="100px" />
        </form>

        {/* Language */}
        <form
          onSubmit={langForm.handleSubmit((data) =>
            handleSubmitSection("UserLanguage", data)
          )}
          className=" p-6 space-y-4"
        >
          <h3 className="text-xl font-semibold">Language</h3>
          <div className=" flex gap-3 items-center justify-center">
            <Controller
              control={langForm.control}
              name="LanguageType"
              rules={{ required: "Required" }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Your main language"
                  className="border rounded-md w-full px-4 py-2 focus:ring focus:ring-blue-300"
                />
              )}
            />
            <CustomButton
              type="submit"
              text="Next"
              height="35px"
              width="100px"
            />
          </div>
        </form>

        {/* Education */}
        <form
          onSubmit={eduForm.handleSubmit((data) =>
            handleSubmitSection("Education", data)
          )}
          className="p-6 space-y-4"
        >
          <h3 className="text-xl font-semibold">Education</h3>

          <Controller
            control={eduForm.control}
            name="university"
            rules={{ required: "Required" }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="University"
                className="border rounded-md w-full px-4 py-2 focus:ring focus:ring-blue-300"
              />
            )}
          />

          <Controller
            control={eduForm.control}
            name="faculty"
            rules={{ required: "Required" }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Faculty"
                className="border rounded-md w-full px-4 py-2 focus:ring focus:ring-blue-300"
              />
            )}
          />

          <Controller
            control={eduForm.control}
            name="degree"
            rules={{ required: "Required" }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Degree"
                className="border rounded-md w-full px-4 py-2 focus:ring focus:ring-blue-300"
              />
            )}
          />

          <Controller
            control={eduForm.control}
            name="startDate"
            rules={{ required: "Required" }}
            render={({ field }) => (
              <input
                {...field}
                type="date"
                className="border rounded-md w-full px-4 py-2 focus:ring focus:ring-blue-300"
              />
            )}
          />

          <Controller
            control={eduForm.control}
            name="endDate"
            rules={{ required: "Required" }}
            render={({ field }) => (
              <input
                {...field}
                type="date"
                className="border rounded-md w-full px-4 py-2 focus:ring focus:ring-blue-300"
              />
            )}
          />

          <CustomButton type="submit" text="Next" height="35px" width="100px" />
        </form>

        {/* Skills */}
        <form
          onSubmit={skillsForm.handleSubmit((data) =>
            handleSubmitSection("Skills", data)
          )}
          className="p-6 space-y-4"
        >
          <h3 className="text-xl font-semibold">Skills</h3>

          <div className="flex gap-3 items-center justify-center">
            <Controller
              control={skillsForm.control}
              name="Name"
              rules={{ required: "Required" }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter your skill"
                  className="border rounded-md w-full px-4 py-2 focus:ring focus:ring-blue-300"
                />
              )}
            />

            <CustomButton
              type="submit"
              text="Next"
              height="35px"
              width="100px"
            />
          </div>
        </form>

        {/* About Me */}
        <form
          onSubmit={aboutForm.handleSubmit((data) =>
            handleSubmitSection("UserOverView", data)
          )}
          className="p-6 space-y-4"
        >
          <h3 className="text-xl font-semibold">About Me</h3>

          <Controller
            control={aboutForm.control}
            name="title"
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Title"
                className="border rounded-md w-full px-4 py-2 focus:ring focus:ring-blue-300"
              />
            )}
          />

          <Controller
            control={aboutForm.control}
            name="Disciption"
            rules={{ required: "Disciption is required" }}
            render={({ field }) => (
              <textarea
                {...field}
                rows={5}
                placeholder="Tell us about yourself..."
                className="border rounded-md w-full px-4 py-2 focus:ring focus:ring-blue-300"
              />
            )}
          />

          <CustomButton type="submit" text="Next" height="35px" width="100px" />
          <CustomButton
            className="mt-4"
            type="submit"
            text="Submit"
            height="45px"
            width="100%"
            link="/upload-resume"
          />
        </form>
        <CustomAlertMessage
          message={alertMessage.message}
          type={alertMessage.type}
        />
      </div>
    </Layout>
  );
};

export default FullProfileMultiStep;
