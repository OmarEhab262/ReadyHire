import { useState, useRef } from "react";
import { Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import DefaultNav from "../../../components/nav/DefaultNav";
import CustomButton from "../../../components/ui/CustomButton";
import { useNavigate } from "react-router-dom";

const CommercialRegistration = () => {
  const [hasRegistration, setHasRegistration] = useState(null); // Track if user has commercial registration
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(50); // Start progress at 50%
  const [loader, setLoader] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  // Using react-hook-form
  const { handleSubmit } = useForm();

  // Handle file change (for upload progress simulation)
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setProgress(50); // Reset progress when file is selected

      // Simulate file upload progress
      let uploadProgress = 50; // Start progress from 50%
      const interval = setInterval(() => {
        uploadProgress += 5;
        setProgress(uploadProgress);
        if (uploadProgress >= 75) clearInterval(interval); // End at 75%
      }, 500); // Simulate a file upload over time
    }
  };

  // Trigger file input click
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Handle form submission
  const onSubmit = () => {
    setLoader(true);

    // Simulate progress update on submit click
    let progressValue = 50; // Start from 50%
    const interval = setInterval(() => {
      progressValue += 5; // Increase progress by 5 each step
      setProgress(progressValue);

      if (progressValue >= 75) {
        clearInterval(interval); // Stop once we reach 75%
      }
    }, 500);

    setTimeout(() => {
      setLoader(false);
      navigate("/company-upload-photo");
    }, 3000);
  };

  return (
    <div className="company-registration-container">
      <DefaultNav />
      <div className="flex items-center justify-center md:justify-around py-8 p-5">
        <div className="md:w-[40%] w-[90%]">
          <h2 className="text-4xl font-semibold mb-4 text-blue-600">
            Commercial Registration Status
          </h2>
          <p className="text-lg mb-6">
            Does your business currently hold a commercial registration as
            required by local or national authorities for its operations?
          </p>

          {/* Radio Buttons for Commercial Registration */}
          <div className="mb-4">
            <label className="block text-sm mb-2">
              Do you have a commercial registration?
            </label>
            <div className="flex items-center  space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="yes"
                  checked={hasRegistration === "yes"}
                  onChange={() => setHasRegistration("yes")}
                  className="h-5 w-5 text-blue-600 border-gray-300  rounded-full  focus:ring-blue-500 transition duration-200 ease-in-out"
                />
                <span className="text-lg text-gray-700">Yes</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="no"
                  checked={hasRegistration === "no"}
                  onChange={() => setHasRegistration("no")}
                  className="h-5 w-5 text-blue-600 border-gray-300  rounded-full  focus:ring-blue-500 transition duration-200 ease-in-out"
                />
                <span className="text-lg text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Show Upload File button only if 'Yes' is selected */}
          {hasRegistration === "yes" && (
            <div className="mb-4">
              <label className="block text-sm mb-2">
                Upload Your Registration Document
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
              <CustomButton
                height="40px"
                text={file ? "File Selected" : "Upload Your File"}
                type="button"
                width="100%"
                icon={<Upload />}
                onClick={handleUploadClick}
              />
              {file && (
                <p className="text-green-600 text-lg mt-2">
                  Selected File: {file.name}
                </p>
              )}
            </div>
          )}

          {/* Progress Bar */}
          <div className="w-full bg-gray-300 h-2 rounded-full mb-4">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Continue Button */}
          <div className=" w-[100%] flex justify-between mx-auto">
            <CustomButton
              className="border !bg-white border-gray-400 !text-black "
              type="button"
              height="40px"
              width="100px"
              link="/company-brief-description"
              text="Back"
            />
            <CustomButton
              height="40px"
              text="Continue"
              type="button"
              width="100px"
              loader={loader}
              onClick={handleSubmit(onSubmit)}
              disabled={
                (hasRegistration === "yes" && !file) || !hasRegistration
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialRegistration;
