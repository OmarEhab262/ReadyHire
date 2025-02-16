import dd from "../../../assets/images/dd.png";
import CustomButton from "../../../components/ui/CustomButton";
const Final = () => {
  return (
    <div className="px-9">
      <div className="font-bold text-3xl mt-5 ml-5 font-young">
        <span className="text_secondary ">READY</span> <span>HIRE</span>
      </div>
      <div className="flex items-center justify-around min-h-screen text-center">
        <div className=" flex flex-col gap-10 justify-center items-center">
          <div className="md:w-[40%] w-[90%] mx-auto flex justify-center items-center">
            <img src={dd} alt="" />
          </div>
          <h2>
            Nice work,{" "}
            <span className="text_secondary font-semibold">Omar Ehab!</span>{" "}
            Your profile&apos;s ready.
          </h2>
          <p className="text-2xl text-gray-500 text-center md:w-[80%] w-[90%] mx-auto">
            Congratulations! With thousands of opportunities available, you can
            now apply for jobs that match your skills—whether by bidding on
            Freelance jobs or taking the required assessments for Full-time and
            Part-time positions. Let’s complete the final step so you can start
            applying for jobs. Take the test now!
          </p>
          <div className="flex md:flex-row flex-col gap-10 my-6 ">
            <CustomButton
              height="40px"
              text="View my profile"
              className="!text-[var(--secondary-color)] !bg-white border_secondary !border-2"
              type="button"
              width="300px"
              //   link="/"
            />
            <CustomButton
              height="40px"
              text="Take Testing Now"
              type="button"
              width="300px"
              //   link="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
