import { Search } from "lucide-react";
import Layout from "../../components/layout/Layout";
import { useState } from "react";
import TalentFilter from "../../components/talent/TalentFilter";
import CardViewProfile from "../../components/ui/CardViewProfile";

const TalentPage = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <Layout>
      <div className="flex flex-col justify-center md:p-10 p-10">
        <h1>
          Find Top <span className="text_secondary font-bold">Talent</span> for
          Your Business
        </h1>
        <p className="text-[#555555] text-lg">
          Find top talent in tech, engineering, and more. Build your team and
          grow your business. Start hiring today!
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
              className={`flex text-md items-center gap-4 px-3 ${
                clicked ? "animate-click" : ""
              }`}
            >
              Talent{" "}
            </span>
          </button>
        </div>
      </div>

      <div className="bg-[#EFF5F1] flex flex-wrap my-10 py-10  justify-center">
        <div className="lg:w-[20%] w-full p-5">
          <TalentFilter />
        </div>
        <div className=" w-[80%]  overflow-scroll h-screen">
          <div className="w-fit mx-auto">
            <CardViewProfile />
            <CardViewProfile />
            <CardViewProfile />
            <CardViewProfile />
            <CardViewProfile />
            <CardViewProfile />
            <CardViewProfile />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TalentPage;
