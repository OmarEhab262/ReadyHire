import { Building2, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CustomButton from "../../../components/ui/CustomButton";
import DefaultNav from "../../../components/nav/DefaultNav";
import apiRequest from "../../../utils/apiRequest";
import { useNavigate } from "react-router-dom";
import CustomAlertMessage from "../../../components/ui/CustomAlertMassage";

const UploadPhotoCompany = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(75);
  const fileInputRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const [alertMessage, setAlertMessage] = useState({ message: "", type: "" });

  const navigate = useNavigate();
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    if (file) {
      setProgress(100); // تحديث الشريط عند اختيار صورة
    }

    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [file, preview]);

  const onSubmit = async () => {
    const userId = user?.userId || user?.UserId;
    console.log("userId:", userId);

    if (!userId) {
      setAlertMessage({
        message: "User ID is missing",
        type: "error",
      });
      return;
    }

    const formData = new FormData();
    formData.append("UserId", userId);
    formData.append("Image", file);

    try {
      const response = await apiRequest(
        "UserProfilePic/AddUserProfilePicture",
        "POST",
        formData
      );

      console.log("Response:", response);
      setAlertMessage({
        message: "Photo uploaded successfully",
        type: "success",
      });
      navigate("/final-profile");
    } catch (error) {
      console.error(error);
      setAlertMessage({
        message: error.response?.data?.message || "Photo upload failed.",
        type: "error",
      });
    }
  };
  return (
    <div className="">
      <DefaultNav />
      <div className="px-9 min-h-[90vh] flex flex-col justify-center items-center p-5">
        <div className="flex flex-col items-center w-full max-w-2xl text-center gap-6 mt-6">
          <p className="text-lg text-gray-500">
            A professional photo helps establish credibility with your clients.
            To ensure smooth communication and service, we need your company
            photo for verification purposes.
          </p>

          <div className="flex flex-col justify-center md:w-[40%] w-[90%] mx-auto">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="w-28 h-28 rounded-full bg-[#F1F2F2] overflow-hidden border_secondary border-2 flex justify-center items-center mx-auto mb-6">
              {preview ? (
                <img
                  src={preview}
                  alt="Selected"
                  className="w-full h-full object-cover"
                />
              ) : (
                // <User  />
                <Building2 size={80} color="#1971C2" />
              )}
            </div>

            <CustomButton
              height="40px"
              text="Upload Photo"
              type="button"
              width="100%"
              icon={<Plus />}
              onClick={handleUploadClick}
            />
          </div>
          <div className="w-full max-w-lg rounded-full h-2.5 bg-gray-300">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="md:w-[70%] w-[90%] flex justify-between mx-auto">
            <CustomButton
              className="border !bg-white border-gray-400 !text-black "
              type="button"
              height="40px"
              width="100px"
              link="/company-commercial-registration"
              text="Back"
            />
            <CustomButton
              height="40px"
              text="Continue"
              type="button"
              width="100px"
              onClick={onSubmit}
              disabled={!file}
            />
          </div>
        </div>
      </div>{" "}
      <CustomAlertMessage
        message={alertMessage.message}
        type={alertMessage.type}
      />
    </div>
  );
};

export default UploadPhotoCompany;
