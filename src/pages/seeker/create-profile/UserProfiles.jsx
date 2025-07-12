import { Controller, useForm } from "react-hook-form";
import CustomButton from "../../../components/ui/CustomButton";
import Layout from "../../../components/layout/Layout";
import apiRequest from "../../../utils/apiRequest";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomAlertMessage from "../../../components/ui/CustomAlertMassage";
const UserProfiles = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const applicationUserId = user?.userId;

  const formMethods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      location: "",
      jobTitle: "",
      applicationUserId: applicationUserId || "", // Ensure applicationUserId is set
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const navigate = useNavigate();
  const [alertMassage, setAlertMessage] = useState({
    message: "",
    type: "",
  });
  const onSubmit = async (data) => {
    try {
      const response = await apiRequest("UserProfiles", "POST", data);
      localStorage.setItem("userProfiles", JSON.stringify(response));
      setAlertMessage({ message: "UserProfiles successful", type: "success" });
      navigate("/skills-form");
    } catch (error) {
      setAlertMessage({
        message:
          error.response?.data?.message || "UserProfiles failed. Try again.",
        type: "error",
      });
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center flex-col h-[90vh]">
        <div className="m-5">
          <h2 className="text-[40px] font-semibold mb-4">Create Profile</h2>
        </div>{" "}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 bg-white rounded-lg shadow-md space-y-6 md:w-[50%] mx-auto m-10"
        >
          {/* First Name */}
          <div className="">
            <label className="text-gray-600 font-medium ">First Name</label>
            <Controller
              control={control}
              name="firstName"
              rules={{ required: "First name is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter your first name"
                  type="text"
                  className="border rounded-md w-full px-4 py-2 mt-2 focus:ring focus:ring-blue-300"
                />
              )}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="text-gray-600 font-medium">Last Name</label>
            <Controller
              control={control}
              name="lastName"
              rules={{ required: "Last name is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter your last name"
                  type="text"
                  className="border rounded-md w-full px-4 py-2 mt-2 focus:ring focus:ring-blue-300"
                />
              )}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="text-gray-600 font-medium">Location</label>
            <Controller
              control={control}
              name="location"
              rules={{ required: "Location is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter your location"
                  type="text"
                  className="border rounded-md w-full px-4 py-2 mt-2 focus:ring focus:ring-blue-300"
                />
              )}
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>
          {/* Title */}
          <div>
            <label className="text-gray-600 font-medium">Title</label>
            <Controller
              control={control}
              name="jobTitle"
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter your title"
                  type="text"
                  className="border rounded-md w-full px-4 py-2 mt-2 focus:ring focus:ring-blue-300"
                />
              )}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <CustomButton type="submit" text="Next" height="45px" />
          </div>
        </form>
      </div>{" "}
      <CustomAlertMessage
        message={alertMassage.message}
        type={alertMassage.type}
      />
    </Layout>
  );
};

export default UserProfiles;
