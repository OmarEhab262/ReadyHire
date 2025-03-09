import CustomButton from "../ui/CustomButton";

const StartHiring = () => {
  return (
    <div className="fccc gap-10 my-10 px-4">
      <h2 className="font-bold mr-3 text-center">
        Start hiring now without{" "}
        <span className="text_secondary font-bold">complexity</span> !
      </h2>
      <p className="text-[#555555]  text-2xl p-3 md:w-[60%] text-center">
        <span className="text_secondary font-bold"> Ready Hire</span> offers you
        the easiest ways to{" "}
        <span className="text_secondary font-bold">choose competencies </span>{" "}
        through{" "}
        <span className="text_secondary font-bold">accurate assessments</span>{" "}
        and advanced tests.{" "}
        <span className="text_secondary font-bold">Try it now </span>!
      </p>
      <div>
        {" "}
        <CustomButton
          height="50px"
          text="Sign Up & Post Your First Job for Free"
          type="button"
          link="/select-user"
          className="font-bold md:w-[400px] w-[90%] px-3"
        />
      </div>
    </div>
  );
};

export default StartHiring;
