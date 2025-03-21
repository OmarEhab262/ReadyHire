import { useState } from "react";
import Layout from "../../components/layout/Layout";
import img from "../../assets/images/5124556 1.png";
import CustomButton from "../../components/ui/CustomButton";

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto px-6 my-5">
        <h1 className="text-3xl md:text-5xl font-bold text_secondary text-center my-5 mb-7">
          Contact Us
        </h1>

        {/* Contact Form Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-6">
          {/* Left Section (Form) */}
          <div className="md:w-1/2 w-full flex flex-col gap-5">
            <h3 className="text-lg md:text-xl text-gray-500 leading-relaxed">
              If you have any queries or need help, please feel free to contact
              us. We will see your message as soon as possible and respond via
              email.
            </h3>

            <textarea
              className="border border-gray-300 p-4 w-full h-40 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-secondary transition"
              required
              placeholder="Write your message here..."
            ></textarea>

            <CustomButton
              text="Send Message"
              onClick={() => setIsModalOpen(true)}
            />
          </div>

          {/* Right Section (Image) */}
          <div className="md:w-[40%] md:block hidden  justify-center">
            <img src={img} alt="Contact Us" className="max-w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center">
            <h2 className="text-2xl font-semibold text-gray-700">
              Your message has been successfully sent!
            </h2>
            <p className="text-gray-600 mt-2">
              We will see it soon and we will respond to you via email.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg_secondary text-white px-6 py-2 mt-5 rounded-lg hover:bg-secondary-dark transition-all shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ContactUs;
