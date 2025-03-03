import image from "../../assets/images/ff.png";
import CustomButton from "../ui/CustomButton";
const LandingApplyJob = () => {
  const userType = localStorage.getItem("type user");
  return (
    <div className="md:h-[93vh] h-[90vh] flex  justify-between  p-5 ">
      <div className="md:w-[50%] h-full w-[90%] flex flex-col justify-center md:p-10 p-2">
        <h1>
          Start your <span className="text_secondary font-bold">Job</span> with
          a <span className="text_secondary font-bold">Skills</span> Test!
        </h1>
        <p className="text-[#555555]  text-lg">
          Join <span className="text_secondary font-bold">Ready Hire</span> to
          discover jobs that match your skills. Take{" "}
          <span className="text_secondary font-bold">
            the mandatory skills test
          </span>{" "}
          to start applying for{" "}
          <span className="text_secondary font-bold">
            full-time, part-time or freelance jobs{" "}
          </span>{" "}
          .
        </p>
        <div className="w-fit mx-auto py-5">
          {!userType && (
            <>
              {" "}
              <CustomButton
                height="40px"
                text="Start testing now"
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

export default LandingApplyJob;
