import image from "../../assets/images/landing-1-hero.png";
import CustomButton from "../ui/CustomButton";
const LandingPage = () => {
  const userType = localStorage.getItem("type user");
  return (
    <div className="h-[93vh] flex justify-between bg-[#EFF5F1] p-5 ">
      <div className="md:w-[60%] w-[90%] flex flex-col justify-center md:p-10 p-5">
        <h1>
          Welcome to{" "}
          <span className="text_secondary font-bold">Ready Hire</span> Smart
          Platform for <span className="text_secondary font-bold"> Fair</span>{" "}
          and Effective{" "}
          <span className="text_secondary font-bold">Employment.</span>
        </h1>
        <p className="text-[#555555]  text-lg">
          Whether you are looking for a job, or want to hire the best
          candidates, we provide you with the perfect solution via advanced
          assessment tests.
        </p>
        <div className="w-fit mx-auto py-5">
          {!userType && (
            <>
              {" "}
              <CustomButton
                height="40px"
                text="Get Started"
                type="button"
                width="150px"
                link="/signup"
              />
            </>
          )}
        </div>
      </div>
      <div className="md:block hidden w-[40%]">
        <img className="w-full h-full" src={image} alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
