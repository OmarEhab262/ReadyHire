import { Search, Filter, X } from "lucide-react";
import Layout from "../../components/layout/Layout";
import { useState } from "react";
import TalentFilter from "../../components/talent/TalentFilter";
import CardViewProfile from "../../components/ui/CardViewProfile";

const TalentPage = () => {
  const [clicked, setClicked] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <Layout>
      <div className="flex flex-col items-center text-center p-6 md:p-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Find Top <span className="text_secondary">Talent</span> for Your
          Business
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mt-3 max-w-2xl">
          Find top talent in tech, engineering, and more. Build your team and
          grow your business. Start hiring today!
        </p>
      </div>

      <div className="w-full px-4 md:px-10">
        <div className="relative max-w-lg mx-auto flex shadow-lg rounded-lg overflow-hidden">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Search size={23} color="#1971c2" />
          </div>
          <input
            type="text"
            placeholder="Search Talents..."
            className="w-full pl-12 pr-4 py-3 border-none focus:border-none outline-none"
          />
          <button
            className="bg_secondary text-white px-6 py-3 rounded-r-lg"
            onClick={() => setClicked(!clicked)}
          >
            <span
              className={`flex items-center gap-2 ${
                clicked ? "animate-click" : ""
              }`}
            >
              Search
            </span>
          </button>
        </div>
      </div>

      {/* زر فتح الفلتر في الشاشات الصغيرة */}
      <div className="lg:hidden flex justify-end px-4 my-4">
        <button
          className="flex items-center gap-2 bg_secondary text-white px-4 py-2 rounded-md shadow-md"
          onClick={() => setFilterOpen(true)}
        >
          <Filter size={20} />
          Filters
        </button>
      </div>

      <div className="flex lg:flex-row flex-col gap-8 my-12 px-4 md:px-10">
        {/* Desktop Filter */}
        <div className="lg:w-1/4 w-full lg:block hidden p-5 sticky top-0 bg-white shadow-md rounded-lg">
          <TalentFilter />
        </div>

        {/* Mobile Filter Drawer */}
        <div
          className={`fixed top-0 left-0 lg:hidden block w-3/4 h-full bg-white shadow-lg p-5 transform transition-transform duration-300 ease-in-out z-50 ${
            filterOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-gray-600 text-lg"
            onClick={() => setFilterOpen(false)}
          >
            <X size={24} color="red" />
          </button>
          <TalentFilter />
        </div>

        {/* قسم عرض البروفايلات */}

        <div className="lg:w-3/4 w-full bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 justify-items-center gap-6 overflow-y-auto max-h-[calc(100vh-150px)]">
            {[...Array(12)].map((_, index) => (
              <CardViewProfile key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TalentPage;
