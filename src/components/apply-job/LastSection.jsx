import img from "../../assets/images/fdas.png";
import CustomButton from "../ui/CustomButton";
const LastSection = () => {
  return (
    <div className="py-5 ">
      <div className="fccc md:w-[70%] w-[90%] mx-auto py-5 ">
        <h2 className="font-bold mr-3 text-center">
          The end of this journey is not the end of the road,{" "}
          <span className="text_secondary font-bold">Ready Hire</span> is always
          here to open{" "}
          <span className="text_secondary font-bold">
            new opportunity doors
          </span>
          .
        </h2>
      </div>
      <div className="flex  flex-wrap-reverse items-center justify-center p-5 ">
        <div className="fccc md:w-[40%] w-[90%] mx-auto py-5 gap-10">
          <h2 className="font-bold mr-3 text-center ">
            Ready for the next step in your career? Sign up now and start your
            journey to success!
          </h2>
          <CustomButton
            height="40px"
            text="Join Now"
            type="button"
            width="150px"
            link="/signup"
          />
        </div>
        <div className="fccc md:w-[40%] w-[90%] mx-auto py-5 ">
          <img src={img} alt="FDAS" className="w-[100%] rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default LastSection;
