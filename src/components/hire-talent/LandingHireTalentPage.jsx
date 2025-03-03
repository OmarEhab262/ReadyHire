import image from "../../assets/images/hh.png";
import CustomButton from "../ui/CustomButton";
const LandingHireTalentPage = () => {
  const userType = localStorage.getItem("type user");
  return (
    <div className="md:h-[93vh] h-[90vh] flex  justify-between  p-5 ">
      <div className="md:w-[50%] h-full w-[90%] flex flex-col justify-center md:p-10 p-2">
        <h1>
          Use the best <span className="text_secondary font-bold">Talent</span>{" "}
          smartly and quickly!
        </h1>
        <p className="text-[#555555]  text-lg">
          Post your jobs and let our smart system rate candidates and choose the
          best fit for you based on actual performance and not just CV.
        </p>
        <div className="w-fit mx-auto py-5">
          {!userType && (
            <>
              {" "}
              <CustomButton
                height="40px"
                text="Start hiring now"
                type="button"
                width="150px"
                link="/signup"
              />
            </>
          )}
        </div>
      </div>
      <div className="md:block hidden w-[50%]">
        <img className="w-full h-full" src={image} alt="" />
      </div>
    </div>
  );
};

export default LandingHireTalentPage;
