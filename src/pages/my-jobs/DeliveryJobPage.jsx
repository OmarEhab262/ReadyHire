import Layout from "../../components/layout/Layout";
import CustomButton from "../../components/ui/CustomButton";
import { useState } from "react";
import img from "../../assets/images/zip.png";
import { toast } from "react-hot-toast";

const DeliveryJobPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.name.endsWith(".zip")) {
        toast.error("Only .zip files are allowed.");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size must be less than 10MB.");
        return;
      }
      setSelectedFile(file);
      toast.success("File selected successfully!");
    }
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      toast.error("Please upload a .zip file before submitting.");
      return;
    }

    // هنا تضع منطق رفع الملف إن أردت
    console.log("File to upload:", selectedFile);

    toast.success("File submitted successfully!", {
      duration: 3000,
      position: "top-center",
    });

    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  return (
    <Layout>
      <div className="mx-auto px-6 my-10 max-w-4xl w-full mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-secondary text-center mb-4">
          Delivery Job
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Please make sure your uploaded file is compressed in a .zip format and
          includes all the necessary project files. Double-check your work
          before submitting.
        </p>

        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 flex flex-col gap-6 w-full">
          {/* قسم الملفات */}
          <div className="p-5 flex flex-col gap-2">
            <label htmlFor="file" className="text-lg font-semibold my-3">
              Upload Project Files (.zip)
            </label>
            <div className="flex items-center gap-6 md:justify-between justify-center flex-wrap">
              <div className="bg-gray-300 p-2 rounded-lg flex items-center gap-6 md:w-[60%] w-[300px]">
                <img src={img} alt="zip" className="w-10 h-10" />
                <p className="text-gray-500">
                  {selectedFile ? selectedFile.name : "No file selected"}
                </p>
              </div>
              <label className="w-[200px] flex items-center justify-center bg_secondary text-white font-semibold py-2 px-4 rounded-lg cursor-pointer transition duration-300 hover:opacity-90">
                Choose File
                <input
                  type="file"
                  accept=".zip"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* زر الإرسال */}
          <div className="flex flex-row flex-wrap gap-6 w-full md:justify-end justify-center">
            <CustomButton text="Submit" height="40px" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeliveryJobPage;
