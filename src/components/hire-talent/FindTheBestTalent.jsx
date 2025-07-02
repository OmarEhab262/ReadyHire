import { ChevronsDown } from "lucide-react";
import CustomButton from "../ui/CustomButton";

const FindTheBestTalent = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-5 bg-[#EFF5F1]">
      <h2 className="font-bold mr-3">
        How can you find the best{" "}
        <span className="text_secondary font-bold">Talent</span> ?
      </h2>
      <div className="fccc">
        <div className="flex flex-col m-5 items-center gap-2 text-2xl hover:shadow-lg transition-all duration-300 shadow-md p-10  rounded-lg bg-white cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center font-bold rounded-full p-2 bg_secondary text-white">
            1
          </div>
          <p className="text-center text-3xl font-bold">
            Create your account and post a job or project.
          </p>
        </div>
        <ChevronsDown size={60} className="text_secondary" />
      </div>
      <div className="fccc w-full">
        <div className="flex flex-col m-5 items-center gap-2 text-2xl w-[90%] hover:shadow-lg transition-all duration-300 shadow-md p-10  rounded-lg bg-white cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center font-bold rounded-full p-2 bg_secondary text-white">
            2
          </div>
          <p className="text-center text-3xl font-bold">
            How are candidates selected?
          </p>
        </div>
        <ChevronsDown size={60} className="text_secondary mt-3 " />
      </div>
      <div className=" w-[90%] flex flex-col  ">
        <div className="flex items-center justify-between flex-wrap w-full">
          <div className="flex text-center flex-col m-5 mt-0 items-center gap-2 text-xl md:w-[450px] hover:shadow-lg transition-all duration-300 shadow-md p-10  rounded-lg bg-white cursor-pointer">
            If you are looking for a full-time/part-time employee: All
            candidates will be tested through our smart system, sending you
            evaluation results to choose the best.
          </div>
          <div className="flex flex-col m-5 mt-0 text-center items-center gap-2 text-xl  w-[450px] hover:shadow-lg transition-all duration-300 shadow-md p-10  rounded-lg bg-white cursor-pointer">
            If you are looking for an Freelancer for your project: you will
            receive financial and technical proposal from freelancers, and you
            can review their previous work to choose the most suitable for you.{" "}
          </div>
        </div>
        <div className="w-fit mx-auto">
          <ChevronsDown size={60} className="text_secondary" />
        </div>
      </div>
      <div className="fccc w-full">
        <div className="flex flex-col m-5 items-center gap-2 text-2xl w-[90%] hover:shadow-lg transition-all duration-300 shadow-md p-10  rounded-lg bg-white cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center font-bold rounded-full p-2 bg_secondary text-white">
            3
          </div>
          <p className="text-center text-3xl font-bold">
            Get the right candidate for you easily!
          </p>
        </div>
      </div>
      <CustomButton
        height="40px"
        text="Start Hiring Now"
        type="button"
        width="300px"
        link="/select-user"
      />
      <div className="text-center text-gray-500 text-2xl p-3 md:w-[70%]">
        ✅ Note: Test assessments are available only to candidates for full-time
        or part-time positions, while the independent&apos;s assessment is based
        on their past offers and experience.
      </div>
    </div>
  );
};

export default FindTheBestTalent;
