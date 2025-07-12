import Layout from "../../components/layout/Layout";
import CustomButton from "../../components/ui/CustomButton";
import { useState } from "react";
import img from "../../assets/images/zip.png";
import { toast } from "react-hot-toast";

const DeliveryJob = () => {
  const [description, setDescription] = useState("");

  const handleAcceptJob = () => {
    toast.success("Job accepted successfully!", {
      duration: 3000,
      position: "top-center",
    });
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <Layout>
      <div className="mx-auto px-6 my-10 max-w-4xl w-full mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-secondary text-center mb-8">
          Delivery Job
        </h1>
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 flex flex-col gap-6 w-full">
          {/* قسم الملفات */}
          <div className="p-5 flex flex-col gap-2">
            <label htmlFor="file" className="text-lg font-semibold my-3">
              Project Files
            </label>
            <div className="flex items-center gap-6 md:justify-between justify-center flex-wrap">
              <div className="bg-gray-300 p-2 rounded-lg flex items-center gap-6 md:w-[60%] w-[300px]">
                <img src={img} alt="zip" className="w-10 h-10" />
                <p className="text-gray-500">Project folder.zip</p>
              </div>
              <CustomButton text="Download" height="40px" width="200px" />
            </div>
          </div>

          {/* قسم وصف العمل */}
          <label htmlFor="description" className="text-lg font-semibold">
            Description of Job Done
          </label>
          <textarea
            className="border border-gray-300 p-4 w-full h-48 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-md"
            required
            placeholder="Enter the description of the job done"
            maxLength={500}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          {/* الأزرار */}
          <div className="flex flex-row flex-wrap gap-6 w-full md:justify-between justify-center">
            <CustomButton
              text="Request Modification"
              className="!text-[var(--secondary-color)] !bg-white border border_secondary hover:bg-blue-50 transition"
              height="40px"
              width="200px"
              link="/need-modification"
            />
            <CustomButton
              text="Accept"
              height="40px"
              width="200px"
              onClick={handleAcceptJob}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeliveryJob;
