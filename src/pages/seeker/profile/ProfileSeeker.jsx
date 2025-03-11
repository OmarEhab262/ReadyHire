import Layout from "../../../components/layout/Layout";
import image from "../../../assets/images/team-01.png";
import CustomButton from "../../../components/ui/CustomButton";
import { CircleGauge, Earth, GraduationCap, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
const ProfileSeeker = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("type user");
    navigate("/");
  };

  const [isTakenTask, setIsTakenTask] = useState(
    Cookies.get("isTakenTask") === "true"
  );

  // تحديث `isTakenTask` عند تحميل الصفحة
  useEffect(() => {
    const checkTakenTask = Cookies.get("isTakenTask");
    setIsTakenTask(checkTakenTask === "true");
  }, []);
  return (
    <Layout>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6 md:p-10 p-5 justify-between md:items-center">
        {/* Left Section - Profile Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          {/* Profile Image */}
          <div className="w-28 h-28 p-[2px] rounded-full border_secondary !border-2 overflow-hidden">
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold">Omar Ehab Mahmoud</h2>
          <p className="text-xl text-[#555555]">
            Web Developer, React Developer, UI/UX Designer
          </p>
          <p className="text-xl text-[#555555]">Kharkiv, Ukraine</p>

          {/* Buttons */}
          <div className="flex gap-4 my-4">
            <CustomButton
              height="40px"
              width="150px"
              text="Edit Profile"
              type="button"
            />
            <CustomButton
              height="40px"
              width="150px"
              className="!text-[var(--secondary-color)] !bg-white border_secondary"
              text="Settings"
              type="button"
              link="/account-settings"
            />
          </div>
          <CustomButton
            height="40px"
            width="320px"
            className="!bg-red-500 "
            text="Logout"
            type="button"
            onClick={logOut}
          />
        </div>

        {/* Right Section - Skills */}
        <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-1/2">
          <div className="p-2 px-5 bg-gray-200 rounded-xl text-center">
            Front End Developer
          </div>
          <div className="flex items-center gap-4 text-xl text-[#555555]">
            Skills <Star />
          </div>

          {/* Skills List */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3 w-full">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "TypeScript",
              "Redux",
              "Tailwind CSS",
              "Firebase",
            ].map((skill) => (
              <p
                key={skill}
                className="p-2 px-5 bg-blue-200 rounded-xl text-center"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Experience, Language, Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 m-4 p-6 rounded-lg shadow-lg">
        {[
          {
            icon: <CircleGauge className="text-2xl text-secondary" />,
            label: "Experience Level",
            value: "3 Years",
            bg: "bg-white",
          },
          {
            icon: <Earth className="text-2xl text-secondary" />,
            label: "Language",
            value: "Arabic: Native language",
            bg: "bg-white",
          },
          {
            icon: <GraduationCap className="text-2xl text-secondary" />,
            label: "Education",
            value: (
              <>
                <p>Okernia University</p>
                <p>Bachelor of Computers and Information, IT</p>
              </>
            ),
            bg: "bg-white",
          },
        ].map(({ icon, label, value, bg }, index) => (
          <div
            key={index}
            className={`${bg} p-5 rounded-lg shadow-md flex flex-col items-center`}
          >
            <div className="flex items-center gap-3 text-xl text-[#555555]">
              {icon} <span>{label}</span>
            </div>
            <span className="text_secondary text-lg font-bold mt-2 text-center">
              {value}
            </span>
          </div>
        ))}
        {!isTakenTask && (
          <div className="col-span-1 md:col-span-3 flex justify-center mt-4">
            <CustomButton
              height="40px"
              width="150px"
              text="Take Testing Now"
              type="button"
              link="/start-do-test"
            />
          </div>
        )}
      </div>

      {/* About Me Section */}
      <div className="md:p-10 p-5">
        <div className="bg-gray-100 rounded-xl p-7 shadow-xl">
          <h2 className="text-2xl font-bold text-primary">About Me</h2>
          <p className="text-[#555555] text-lg leading-relaxed mt-2">
            I am a professional Golang backend engineer with over 5+ years of
            experience building backends for various projects.
          </p>
          <ul className="list-disc pl-5 text-[#555555] text-lg space-y-2 mt-3">
            <li>
              I&apos;m comfortable with any Go HTTP library, but my favorite is
              Chi.
            </li>
            <li>
              If data retrieval becomes too complex, I use GraphQL for better
              performance and ease of use.
            </li>
            <li>I love using gRPC for internal service connections.</li>
            <li>
              For real-time data communication, I use zishang/socket.io or
              gorilla/websocket.
            </li>
            <li>
              Typically, I use Kafka for message queuing, but for smaller use
              cases, I prefer Redis queue.
            </li>
            <li>PostgreSQL is my top choice for a database.</li>
            <li>
              I can work with Kubernetes as a developer, though not as a DevOps
              specialist.
            </li>
            <li>The ELK stack is my preferred tool for analyzing log data.</li>
            <li>
              I am also capable of setting up CI/CD pipelines using GitHub and
              GitLab.
            </li>
            <li>
              Lastly, I assist frontend developers in integrating backend APIs.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileSeeker;
