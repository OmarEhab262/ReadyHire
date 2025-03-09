import CustomButton from "../../components/ui/CustomButton";
import img from "../../assets/images/flat.png";
import DefaultNav from "../../components/nav/DefaultNav";
function StartDoTest() {
  return (
    <section>
      <DefaultNav />
      <div className="flex flex-col items-center justify-center h-[90vh]">
        {/* Logo */}
        <div className="mb-8">
          <img src={img} alt="" className="h-16 w-16 md:h-20 md:w-20" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold text-center mb-4">
          Welcome to Ready Hire!
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-start mb-8 px-6 ">
          Before you start your journey towards your perfect job, we will take a
          test to <br />
          assess your skills and help you find the most suitable opportunities
          for you. 🎯
        </p>

        {/* Continue Button */}

        <CustomButton
          text="Continue"
          type="button"
          height="40px"
          width="150px"
          link="/instructions-do-test"
        />
      </div>
    </section>
  );
}

export default StartDoTest;
