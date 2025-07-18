import { Upload } from "lucide-react";
import CustomButton from "../../../components/ui/CustomButton";
import { useState, useRef } from "react";
import DefaultNav from "../../../components/nav/DefaultNav";
import apiRequest from "../../../utils/apiRequest";
import { useNavigate } from "react-router-dom";
import CustomAlertMessage from "../../../components/ui/CustomAlertMassage";

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);
  const [loader, setLoader] = useState(false);
  const userProfiles = JSON.parse(localStorage.getItem("userProfiles"));
  const UserProfileId = userProfiles?.id;
  const [alertMassage, setAlertMessage] = useState({
    message: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setProgress(0); // إعادة تعيين شريط التقدم عند اختيار ملف جديد

      // محاكاة تحميل الملف إلى 100%
      let uploadProgress = 0;
      const interval = setInterval(() => {
        uploadProgress += 10;
        setProgress(uploadProgress);
        if (uploadProgress >= 33) clearInterval(interval);
      }, 100);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const onSubmit = async () => {
    setLoader(true);
    try {
      if (!file) {
        setAlertMessage({
          message: "Please select a file before submitting.",
          type: "error",
        });
        return;
      }

      if (!UserProfileId) {
        setAlertMessage({
          message: "UserProfileId not found in localStorage.",
          type: "error",
        });
        return;
      }

      const formData = new FormData();
      formData.append("CvFile", file);
      formData.append("UserProfileId", UserProfileId);

      const response = await apiRequest("UserCv", "POST", formData);

      console.log("Response:", response);
      setAlertMessage({ message: "CV uploaded successfully", type: "success" });
      navigate("/upload-photo-seeker");
    } catch (error) {
      setAlertMessage({
        message: error.response?.data?.message || "CV upload failed.",
        type: "error",
      });
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="">
      <DefaultNav />
      <div className="px-9 md:min-h-[90vh] min-h-[80vh] flex flex-col justify-center items-center p-5">
        <div className="flex flex-col items-center w-full max-w-2xl text-center gap-6 mt-6">
          <h1 className="text-3xl font-semibold">
            How would you like to tell us about yourself?
          </h1>
          <p className="text-lg text-gray-500">
            We want to learn about your education, experience, and skills.
            Please make sure your CV is accurate, as your account will be
            created based on the information you provide.
          </p>
          <div className="flex justify-center md:w-[40%] w-[90%] mx-auto">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <CustomButton
              height="40px"
              text={file ? "Resume Selected" : "Upload Your Resume"}
              type="button"
              width="100%"
              icon={<Upload />}
              onClick={handleUploadClick}
            />
          </div>
          {file && (
            <p className="text-green-600 text-lg">Selected File: {file.name}</p>
          )}
          <div className="w-full max-w-lg rounded-full h-2.5 bg-gray-300">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="md:w-[70%] w-[90%] flex justify-end mx-auto">
            <CustomButton
              height="40px"
              text="Continue"
              type="button"
              width="100px"
              onClick={onSubmit}
              loader={loader}
              disabled={!file} // تعطيل الزر حتى يتم رفع الملف
            />
          </div>
        </div>
      </div>
      <CustomAlertMessage
        message={alertMassage.message}
        type={alertMassage.type}
      />
    </div>
  );
};

export default UploadResume;
