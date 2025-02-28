import CustomButton from "../ui/CustomButton";
import img1 from "../../assets/images/1.svg";
import img2 from "../../assets/images/2.svg";
import img3 from "../../assets/images/3.svg";
import img4 from "../../assets/images/4.svg";
import img5 from "../../assets/images/5.svg";
import img6 from "../../assets/images/6.svg";
import img7 from "../../assets/images/7.svg";
import img8 from "../../assets/images/8.svg";
import img9 from "../../assets/images/9.svg";
import img10 from "../../assets/images/10.svg";
import img11 from "../../assets/images/11.svg";
import img12 from "../../assets/images/12.svg";

const categories = [
  {
    name: "Education & Coaching",
    icon: img1,
  },
  {
    name: "Accounting",
    icon: img2,
  },
  {
    name: "Marketing & Sales",
    icon: img3,
  },
  {
    name: "HR & Recruitment",
    icon: img4,
  },
  {
    name: "Engineering & Science",
    icon: img5,
  },
  {
    name: "Design & Multimedia",
    icon: img6,
  },
  {
    name: "Data Entry & Administration",
    icon: img7,
  },
  {
    name: "IT & Tech",
    icon: img8,
  },
  {
    name: "Media Production",
    icon: img9,
  },
  {
    name: "Writing & Content",
    icon: img10,
  },
  {
    name: "Business Management",
    icon: img11,
  },
  {
    name: "Project Management",
    icon: img12,
  },
];

const Categories = () => {
  return (
    <div className="p-5">
      <div className="head flex flex-wrap gap-5 justify-between p-5 mt-5">
        <div>
          <h2 className="text_secondary font-bold mr-3">Explore Categories</h2>
        </div>
        <CustomButton
          height="40px"
          text="Browse all Jobs"
          type="button"
          width="150px"
        />
      </div>
      <div>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-10">
          {categories.map((category, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-[100px] aspect-square flex items-center justify-center bg-[#F7FAFC] rounded-full hover:shadow-md transition-shadow">
                <img
                  src={category.icon || "/assets/placeholder.svg"}
                  alt={category.name}
                  className="w-2/3"
                />
              </div>
              <span className="text-sm text-center text-[#000000] font-bold">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
