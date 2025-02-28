import CardViewProfile from "../ui/CardViewProfile";
import CustomButton from "../ui/CustomButton";

const TopTalents = () => {
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
          text="Browse all Jobs"
          type="button"
          width="150px"
        />
      </div>
      <div className="flex justify-center items-center flex-wrap flex-col">
        <CardViewProfile />
        <CardViewProfile />
        <CardViewProfile />
      </div>
    </div>
  );
};

export default TopTalents;
