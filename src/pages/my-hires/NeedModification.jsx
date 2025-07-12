import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import img from "../../assets/images/5124556 1.png";
import CustomButton from "../../components/ui/CustomButton";
import { toast } from "react-hot-toast";

const NeedModification = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (!message.trim()) {
      toast.error("Please write your modification request first.");
      return;
    }

    toast.success("Your message has been sent successfully!", {
      duration: 3000,
      position: "top-center",
    });

    setTimeout(() => {
      navigate("/my-hires");
    }, 1000);
  };

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto px-6 my-5">
        <h1 className="text-3xl md:text-5xl font-bold text_secondary text-center my-5 mb-7">
          Need Modification
        </h1>

        {/* Contact Form Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-6">
          {/* Left Section (Form) */}
          <div className="md:w-1/2 w-full flex flex-col gap-5">
            <h3 className="text-lg md:text-xl text-gray-500 leading-relaxed">
              Please clarify the modifications required to ensure that they are
              implemented as required. Be as specific as possible to facilitate
              the modification process and achieve the best result.
            </h3>

            <textarea
              className="border border-gray-300 p-4 w-full h-40 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-secondary transition"
              required
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <CustomButton text="Send Message" onClick={handleSend} />
          </div>

          {/* Right Section (Image) */}
          <div className="md:w-[40%] md:block hidden justify-center">
            <img src={img} alt="Contact Us" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NeedModification;
