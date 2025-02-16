import dd from "../../../assets/images/dd.png";
import CustomButton from "../../../components/ui/CustomButton";

const Final = () => {
  return (
    <div className="px-6 min-h-screen flex flex-col">
      {/* Title */}
      <div className="font-bold text-3xl mt-6 w-full text-left">
        <span className="text_secondary">READY</span> <span>HIRE</span>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center flex-grow text-center my-5">
        <div className="flex flex-col gap-8 items-center w-full max-w-2xl">
          {/* Profile Image */}
          <div className="md:w-[50%] w-[90%] flex justify-center">
            <img src={dd} alt="Profile Ready" className="w-[60%] max-w-sm" />
          </div>

          {/* Success Message */}
          <h2 className="text-2xl font-semibold">
            Nice work, <span className="text_secondary">Omar Ehab!</span> Your
            profile is ready.
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-500 w-[90%] md:w-[100%]">
            Congratulations! With thousands of opportunities available, you can
            now apply for jobs that match your skills—whether by bidding on
            freelance jobs or taking the required assessments for full-time and
            part-time positions.
            <br />
            Let’s complete the final step so you can start applying for jobs.
            Take the test now!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <CustomButton
              height="40px"
              text="View My Profile"
              className="!text-[var(--secondary-color)] !bg-white border_secondary !border-2"
              type="button"
              width="280px"
              // link="/profile"
            />
            <CustomButton
              height="40px"
              text="Take Test Now"
              type="button"
              width="280px"
              // link="/assessment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
