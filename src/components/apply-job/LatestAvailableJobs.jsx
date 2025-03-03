import CardJob from "../ui/CardJob";
import CustomButton from "../ui/CustomButton";

const LatestAvailableJobs = () => {
  return (
    <div className="p-5">
      <div className="head flex flex-wrap gap-5 justify-between p-5 mt-5">
        <div>
          <h2 className="text_secondary font-bold mr-3">
            <span className="text-black"> Latest Available</span> Jobs
          </h2>
        </div>
        <CustomButton
          height="40px"
          text="view more"
          type="button"
          width="150px"
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center">
        <CardJob />
        <CardJob />
        <CardJob />
      </div>
    </div>
  );
};

export default LatestAvailableJobs;
