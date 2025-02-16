import { Plus, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CustomButton from "../../../components/ui/CustomButton";
import { Link } from "react-router-dom";

const UploadPhoto = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(33);
  const fileInputRef = useRef(null);

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
      setProgress(66); // تحديث الشريط عند اختيار صورة
    }

    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [file, preview]);

  return (
    <div className="px-9">
      <div className="font-bold text-3xl mt-5 ml-5 font-young">
        <span className="text_secondary">READY</span> <span>HIRE</span>
      </div>
      <div className="flex items-center justify-around h-screen text-center">
        <div className="w-[90%] flex flex-col gap-10">
          <p className="text-2xl text-gray-500 text-center md:w-[80%] w-[90%] mx-auto">
            A professional photo helps you build trust with your clients. To
            keep things safe and simple, they&apos;ll pay you through us - which
            is why we need your personal information.
          </p>
          <div className="flex flex-col justify-center md:w-[40%] w-[90%] mx-auto">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="w-40 h-40 rounded-full bg-[#F1F2F2] overflow-hidden border_secondary !border-2 flex justify-center items-center mx-auto mb-10">
              {preview ? (
                <img
                  src={preview}
                  alt="Selected"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User size={80} color="#1971C2" />
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
          <div className="md:w-[70%] w-[90%] rounded-full h-2.5 bg-[#5555554b] mx-auto">
            <div
              className="bg-blue-600 h-2.5 rounded-full duration-300 ease-in"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="md:w-[70%] w-[90%] flex justify-between mx-auto">
            <Link className="" to="/upload-resume">
              Back
            </Link>
            <CustomButton
              height="40px"
              text="Continue"
              type="button"
              width="100px"
              link="/final-profile-seeker"
              disabled={!file}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;
