import { AlertTriangle, CheckCircle } from "lucide-react";
import Layout from "../../../components/layout/Layout";
import CustomButton from "../../../components/ui/CustomButton";

const OverallScore = () => {
  return (
    <Layout>
      <div className="mx-auto bg-white rounded-xl shadow-md m-5 p-5 ">
        <h1 className="text-3xl font-bold mb-6">🏆 Overall Score</h1>
        <div className="my-5">
          <div className="w-full flex items-center justify-center  ">
            <p className="text-lg">65.2% - Average</p>
          </div>
          <div className="h-[3px] w-[65.2%] bg-green-500 "></div>
        </div>
        <div className=" flex flex-col gap-9">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">📊 COMPONENT SCORES</h2>

              <div className="mt-2">
                <ul className="list-disc list-inside space-y-1 ml-6">
                  <li>Skills: 23.5%</li>
                  <li>Certifications: 100.0%</li>
                  <li>Experience: 68.0% </li>
                  <li>CV Quality: 100.0%</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-medium flex items-center text-green-600">
                <CheckCircle className="mr-2" /> Strengths:
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-6">
                <li> Solid experience background</li>
                <li> Well-structured CV</li>
                <li>Consistent experience claims</li>
                <li>
                  Focus on developing core technical skills & Certifications
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium flex items-center text-yellow-600">
                <AlertTriangle className="mr-2" /> Areas for Improvement:
              </h3>

              <ul className="list-disc list-inside space-y-1 ml-6">
                <li> ❗ Limited relevant technical skills</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Recommendations</h2>
            <ul className="list-disc list-inside ml-6 space-y-1">
              Focus on developing core technical skills & Certifications
            </ul>
          </div>
          <div className="space-y-4 flex justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                🧰 Suggested Skills
              </h2>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>REST APIs</li>
                <li>.NET Core</li>
                <li>.ASP.NET</li>
                <li>Microservices</li>
                <li>Entity Framework</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                📌 Suggested Certifications
              </h2>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Microsoft Certified: .NET Developer</li>
                <li>Azure Fundamentals</li>
                <li>Microsoft Certified: Web Applications Developer</li>
              </ul>
            </div>
          </div>
          <CustomButton text="Next" link="/final-profile" />
        </div>
      </div>
    </Layout>
  );
};

export default OverallScore;
