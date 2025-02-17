import CustomButton from "../../../components/ui/CustomButton";
import image from "../../../assets/images/ffsdf.png";
import DefaultNav from "../../../components/nav/DefaultNav";
const CompanyProfileSetup = () => {
  return (
    <>
      {" "}
      <DefaultNav />
      <div className="flex flex-col items-center justify-center  text-center ">
        <div className="w-[80%] md:w-[30%]">
          {" "}
          <img className="w-fit h-[80%]" src={image} alt="" />
        </div>
        <h1 className="text-3xl font-bold mb-4">
          Complete Your Company Profile
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-[600px]">
          A well-crafted company profile builds trust with top talent. To ensure
          a secure and efficient hiring process, we need your business details.
          This helps us verify your company and connect you with the best
          candidates.
        </p>
        <div className="w-[80%] md:w-[10%]">
          <CustomButton
            height="40px"
            text="Next"
            type="submit"
            width="100%"
            link="/company-registration"
          />
        </div>
      </div>
    </>
  );
};

export default CompanyProfileSetup;
