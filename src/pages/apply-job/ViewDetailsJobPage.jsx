import Layout from "../../components/layout/Layout";
import img from "../../assets/images/team-01.png";
import { Bookmark, MapPin, Share2 } from "lucide-react";
import CustomButton from "../../components/ui/CustomButton";

const ViewDetailsJobPage = () => {
  return (
    <Layout>
      <div className="head p-10 flex justify-between  bg-gray-50 shadow-lg rounded-xl w-[95%] mx-auto">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-extrabold text-gray-900">
            UI/UX Designer
          </h2>
          <div className="flex gap-5 items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg border-2 border-blue-400">
              <img
                className="w-full h-full object-cover"
                src={img}
                alt="Company Logo"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-gray-800">Google Tec</h3>
              <div className="flex items-center text-gray-600 text-lg">
                <MapPin size={20} className="text-blue-500" />{" "}
                <span className="ml-2">Kharkiv, Ukraine</span>
              </div>
              <div className="flex gap-3 text-sm font-medium">
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-lg shadow-sm">
                  Full time
                </span>
                <span className="bg-green-200 text-green-900 px-3 py-1 rounded-lg shadow-sm">
                  Remote
                </span>
                <span className="bg-purple-200 text-purple-900 px-3 py-1 rounded-lg shadow-sm">
                  2-4 years
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <CustomButton
            height="45px"
            text="Apply Now"
            type="button"
            width="180px"
            className="bg-blue-500 text-white font-bold"
          />
          <div className="p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition-all">
            <Bookmark className="text-gray-600" />
          </div>
          <div className="p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition-all">
            <Share2 className="text-gray-600" />
          </div>
        </div>
      </div>
      <div className="body p-10 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="p-6 bg-gray-50 rounded-lg shadow-md col-span-2">
          <h3 className="text-2xl font-bold text-gray-900 border-b pb-3">
            About Us
          </h3>
          <p className="text-gray-700 mt-3 leading-relaxed">
            We are a leading tech company specializing in innovative solutions
            and cutting-edge design. Our mission is to create seamless digital
            experiences that enhance user engagement and satisfaction. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
            veniam ex? Exercitationem, aspernatur autem mollitia cum consequatur
            eaque porro temporibus?
          </p>
        </section>
        <section className="p-6 bg-gray-50 rounded-lg shadow-md col-span-2">
          <h3 className="text-2xl font-bold text-gray-900 border-b pb-3">
            Qualification
          </h3>
          <ul className="list-disc pl-6 text-gray-700 mt-3 leading-relaxed space-y-2">
            <li>
              Bachelor’s degree in Design, Computer Science, or a related field.
            </li>
            <li>2-4 years of experience in UI/UX design.</li>
            <li>Proficiency in Figma, Adobe XD, and other design tools.</li>
            <li>
              Strong understanding of responsive and adaptive design principles.
            </li>
          </ul>
        </section>
        <section className="p-6 bg-gray-50 rounded-lg shadow-md  md:col-span-1 col-span-2">
          <h3 className="text-2xl font-bold text-gray-900 border-b pb-3">
            Responsibility
          </h3>
          <ul className="list-disc pl-6 text-gray-700 mt-3 leading-relaxed space-y-2">
            <li>
              Design user-friendly interfaces for web and mobile applications.
            </li>
            <li>
              Collaborate with developers, product managers, and stakeholders.
            </li>
            <li>
              Conduct user research, usability testing, and gather feedback.
            </li>
            <li>Maintain and enhance design consistency across platforms.</li>
          </ul>
        </section>
        <section className="p-6 bg-gray-50 rounded-lg shadow-md  md:col-span-1 col-span-2">
          <h3 className="text-2xl font-bold text-gray-900 border-b pb-3">
            Skills
          </h3>
          <ul className="list-disc pl-6 text-gray-700 mt-3 leading-relaxed space-y-2">
            <li>Strong knowledge of UX principles and best practices.</li>
            <li>Experience with wireframing, prototyping, and user testing.</li>
            <li>Excellent problem-solving and communication skills.</li>
            <li>
              Ability to work collaboratively in a fast-paced environment.
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default ViewDetailsJobPage;
