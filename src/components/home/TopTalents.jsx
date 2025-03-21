import CardViewProfile from "../ui/CardViewProfile";
import CustomButton from "../ui/CustomButton";
import team01 from "../../assets/images/team-01.png";
import team02 from "../../assets/images/team-02.png";
import team03 from "../../assets/images/team-04.png";

const TopTalents = () => {
  const talents = [
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
      type: "Remote",
      time: "1 week ago",
    },
  ];
  return (
    <div className="p-5">
      <div className="head flex flex-wrap gap-5 justify-between p-5 mt-5">
        <div>
          <h2 className="text_secondary font-bold mr-3">
            <span className="text-black">Top</span> Talents
          </h2>
        </div>
        <CustomButton
          height="40px"
          text="Browse all Talents"
          type="button"
          width="150px"
          link="/talent"
        />
      </div>
      <div className="flex justify-center items-center flex-wrap flex-col">
        {talents.map((talent) => (
          <CardViewProfile
            key={talent.id}
            img={talent.img}
            title={talent.title}
            location={talent.location}
            experience={talent.experience}
            link={talent.link}
          />
        ))}
      </div>
    </div>
  );
};

export default TopTalents;
