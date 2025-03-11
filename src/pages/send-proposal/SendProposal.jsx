import { useState } from "react";
import { toast } from "react-hot-toast";
import Layout from "../../components/layout/Layout";
import CustomButton from "../../components/ui/CustomButton";

const SendProposal = () => {
  const [formData, setFormData] = useState({
    title: "",
    technicalProposal: null,
    financialProposal: null,
    deadline: "",
    price: "",
    attachments: [],
    loading: false,
  });

  const handleFileChange = (event, field) => {
    const files = Array.from(event.target.files);
    if (files.length > 5) {
      toast.error("You can upload up to 5 files.");
      return;
    }
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
    ];
    const validFiles = files.filter(
      (file) => validTypes.includes(file.type) && file.size <= 5 * 1024 * 1024
    );

    if (validFiles.length !== files.length) {
      toast.error(
        "Some files were not uploaded due to invalid type or size exceeding 5MB."
      );
    } else {
      toast.success("Files uploaded successfully.");
    }

    setFormData((prev) => ({ ...prev, [field]: validFiles }));
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    setFormData((prev) => ({ ...prev, loading: true }));
    console.log("Form Data:", formData);
    setTimeout(() => {
      toast.success("Proposal submitted successfully!");
      setFormData((prev) => ({ ...prev, loading: false }));
    }, 2000);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-center my-3">
          <span className="text_secondary "> Send Proposal</span> <br /> Trade
          Mark Registration
        </h1>
      </div>
      <div className="p-6 max-w-2xl md:mx-auto mx-10 bg-white shadow-lg rounded-xl border border-gray-200 m-5 mb-10">
        <label className="block mb-2 font-semibold text-gray-700">
          Technical Proposal (PDF)
        </label>
        <label className="w-full flex items-center justify-center bg_secondary text-white font-semibold py-2 px-4 rounded-lg cursor-pointer transition duration-300 hover:opacity-90 mb-2">
          Choose File
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => handleFileChange(e, "technicalProposal")}
            className="hidden"
          />
        </label>
        {formData.technicalProposal && (
          <p className="text-sm text-gray-500 mb-4">
            {formData.technicalProposal[0]?.name}
          </p>
        )}

        <label className="block mb-2 font-semibold text-gray-700">
          Financial Proposal (PDF)
        </label>
        <label className="w-full flex items-center justify-center bg_secondary text-white font-semibold py-2 px-4 rounded-lg cursor-pointer transition duration-300 hover:opacity-90 mb-2">
          Choose File
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => handleFileChange(e, "financialProposal")}
            className="hidden"
          />
        </label>
        {formData.financialProposal && (
          <p className="text-sm text-gray-500 mb-4">
            {formData.financialProposal[0]?.name}
          </p>
        )}

        <label className="block mb-2 font-semibold text-gray-700">
          Deadline for Applications
        </label>
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg mb-4"
        />

        <label className="block mb-2 font-semibold text-gray-700">
          Your Price
        </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg mb-4"
        />

        <label className="block mb-2 font-semibold text-gray-700">
          Attachments (PDF, DOC, DOCX, JPG, JPEG, PNG)
        </label>
        <label className="w-full flex items-center justify-center bg_secondary text-white font-semibold py-2 px-4 rounded-lg cursor-pointer transition duration-300 hover:opacity-90 mb-2">
          Choose Files
          <input
            type="file"
            multiple
            onChange={(e) => handleFileChange(e, "attachments")}
            className="hidden"
          />
        </label>
        {formData.attachments.length > 0 &&
          formData.attachments.map((file, index) => (
            <p key={index} className="text-sm text-gray-500">
              {file.name}
            </p>
          ))}
        <p className="text-sm text-gray-500 mb-4">
          Allowed file types: PDF, DOC, DOCX, JPG, JPEG, PNG. Max 5MB per file.
          Up to 5 files.
        </p>

        <CustomButton
          text="Submit Proposal"
          onClick={handleSubmit}
          loader={formData.loading}
        />
      </div>
    </Layout>
  );
};

export default SendProposal;
