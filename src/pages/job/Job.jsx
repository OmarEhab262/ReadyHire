import { Search, Filter, X } from "lucide-react";
import { useState } from "react";
import JobFilter from "../../components/job/JobFilter";
import Layout from "../../components/layout/Layout";
import CardJob from "../../components/ui/CardJob";
import team01 from "../../assets/images/team-01.png";
import team02 from "../../assets/images/team-02.png";
import team03 from "../../assets/images/team-04.png";

const Job = () => {
  const [clicked, setClicked] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      location: "New York, USA",
      companyName: "Tech Corp",
      experience: "5 years",
      img: team01,
      link: "/job/1",
      budget: "$80,000",
      type: "Full-time",
      time: "2 days ago",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      location: "London, UK",
      companyName: "Design Studio",
      experience: "3 years",
      img: team02,
      link: "/job/2",
      budget: "$60,000",
      type: "Part-time",
      time: "5 days ago",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      location: "Berlin, Germany",
      companyName: "Startup Inc.",
      experience: "7 years",
      img: team03,
      link: "/job/3",
      budget: "$90,000",
      type: "FreeLance",
      time: "1 week ago",
    },
    {
      id: 4,
      title: "Senior Frontend Developer",
      location: "New York, USA",
      companyName: "Tech Corp",
      experience: "5 years",
      img: team01,
      link: "/job/1",
      budget: "$80,000",
      type: "Full-time",
      time: "2 days ago",
    },
    {
      id: 5,
      title: "UI/UX Designer",
      location: "London, UK",
      companyName: "Design Studio",
      experience: "3 years",
      img: team02,
      link: "/job/2",
      budget: "$60,000",
      type: "Part-time",
      time: "5 days ago",
    },
    {
      id: 6,
      title: "Full Stack Developer",
      location: "Berlin, Germany",
      companyName: "Startup Inc.",
      experience: "7 years",
      img: team03,
      link: "/job/3",
      budget: "$90,000",
      type: "Remote",
      time: "1 week ago",
    },
  ];
  return (
    <Layout>
      <div className="flex flex-col items-center text-center p-6 md:p-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Find Your <span className="text_secondary">Dream Job</span> Today
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mt-3 max-w-2xl">
          Explore thousands of opportunities in tech, engineering, and more.
          Take the next step in your career—start your job search now!
        </p>
      </div>

      <div className="w-full px-4 md:px-10">
        <div className="relative max-w-lg mx-auto flex shadow-lg rounded-lg overflow-hidden">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Search size={23} color="#1971c2" />
          </div>
          <input
            type="text"
            placeholder="Search jobs..."
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

      <div className="flex lg:flex-row flex-col gap-8 my-12 px-4 md:px-10">
        {/* Desktop Filter */}
        <div className="lg:w-1/4 w-full lg:block hidden p-5 sticky top-0 bg-white shadow-md rounded-lg">
          <JobFilter />
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
          <JobFilter />
        </div>

        {/* Content Section */}
        <div className="lg:w-3/4 w-full bg-gray-100 p-6 rounded-lg shadow-md">
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
          <div className="grid grid-cols-1 justify-items-center gap-6 overflow-y-auto max-h-[calc(100vh-150px)]">
            {jobs.map((job) => (
              <CardJob
                key={job.id}
                img={job.img}
                title={job.title}
                location={job.location}
                companyName={job.companyName}
                experience={job.experience}
                link={job.link}
                budget={job.budget}
                type={job.type}
                time={job.time}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Job;
