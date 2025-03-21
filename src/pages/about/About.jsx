import Layout from "../../components/layout/Layout";
import img from "../../assets/images/2724272-removebg-preview 1.png";
import { Check } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto px-6 my-5">
        <h1 className="text-3xl md:text-5xl font-bold text_secondary text-center my-5 mb-7">
          About Us
        </h1>

        <div className="flex flex-col gap-6">
          {/* About Section */}
          <div className="flex md:flex-row flex-col flex-wrap justify-between items-center gap-6 bg-[#EFF5F1] p-6 rounded-xl shadow-md">
            <div className="flex flex-col gap-4 md:w-[50%] w-full">
              <h3 className="text-2xl font-semibold">Who are we?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ready Hire is an innovative recruitment platform that aims to
                streamline and improve the recruitment process for both job
                seekers and employers. We rely on state-of-the-art AI technology
                to deliver accurate assessments, effectively sort candidates,
                and ensure a transparent and reliable experience for all users.
              </p>
            </div>

            <div className="md:w-[45%] w-full flex justify-center">
              <img
                src={img}
                alt="About Us"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="bg-[#EFF5F1] p-6 rounded-xl shadow-md">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We help employers find the right talent quickly and efficiently,
                and provide job seekers with fair opportunities based on skills
                and competence, reducing biases and fostering a fairer working
                environment.
              </p>
            </div>
          </div>

          {/* Why Ready Hire Section */}
          <div className="bg-[#EFF5F1] p-6 rounded-xl shadow-md">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">Why Ready Hire?</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 grid grid-cols-1 gap-3">
                {[
                  "Smart evaluation tests ensure candidates' compatibility with posts.",
                  "Transparency in recruitment through fair reviews and clear results.",
                  "Safety and reliability by checking employers and preventing fake ads.",
                  "Continuous support to ensure a seamless user experience for all parties.",
                ].map((text, index) => (
                  <li key={index} className="flex items-center gap-2 md:gap-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-600 shrink-0" />
                    <span className="text-base md:text-lg">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
