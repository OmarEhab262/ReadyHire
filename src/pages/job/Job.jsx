import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import Layout from "../../components/layout/Layout";
import CardJob from "../../components/ui/CardJob";
import JobFilter from "../../components/job/JobFilter";

const Job = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <Layout>
      <div className="flex flex-col justify-center md:p-10 p-2">
        <h1>
          Find Your <span className="text_secondary font-bold">Dream Job</span>{" "}
          Today
        </h1>
        <p className="text-[#555555] text-lg">
          Explore thousands of opportunities in tech, engineering, and more.
          Take the next step in your career—start your job search now!
        </p>
      </div>

      <div className="w-full px-5">
        <div className="relative w-full max-w-[600px] mx-auto flex">
          <div className="absolute left-3 top-2">
            <Search size={23} color="#1971c2" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-3 rounded-r-none rounded-l-md border_secondary flex-1 min-w-0"
          />
          <button
            className="px-5 rounded-r-md bg_secondary text-white p-2 -ml-2 border_secondary w-[110px] pt-[8.5px] flex-shrink-0"
            onClick={() => setClicked(!clicked)}
          >
            <span
              className={`flex text-md items-center gap-4 ${
                clicked ? "animate-click" : ""
              }`}
            >
              Job{" "}
              <span
                className={`transition-transform duration-300 ${
                  clicked ? "rotate-180" : ""
                }`}
              >
                <ChevronDown />
              </span>
            </span>
          </button>
        </div>
      </div>

      <div className="bg-[#EFF5F1] flex flex-wrap my-10 py-10  justify-center">
        <div className="lg:w-[20%] w-full p-5">
          <JobFilter />
        </div>
        <div className=" lg:w-[80%] w-full  overflow-y-scroll h-screen">
          <div className="lg:w-fit w-full mx-auto">
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
            <CardJob />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Job;
