import CustomButton from "../../components/ui/CustomButton";
import img from "../../assets/images/aaaa.png";
import DefaultNav from "../../components/nav/DefaultNav";
function StartApplyNow() {
  return (
    <section>
      <DefaultNav />
      <div className="flex flex-col items-center justify-center h-[90vh]">
        <h1 className="text-3xl font-semibold text-center ">
          Welcome to <span className="text_secondary">Ready Hire!</span>
        </h1>
        <div className="flex flex-col items-center justify-center ">
          {/* Logo */}
          <div className="mb-8">
            <img src={img} alt="" className="w-full h-[400px]" />
          </div>

          {/* Title */}

          {/* Description */}
          <p className="text-gray-700 text-start mb-8 px-6 ">
            Since you&apos;ve chosen this job, you&apos;ll need to complete an
            assessment to <br />
            evaluate your skills and determine your suitability for the role. ✅
          </p>

          {/* Continue Button */}

          <CustomButton
            text="Continue"
            type="button"
            height="40px"
            width="150px"
            link="/instructions-apply-now"
          />
        </div>
      </div>
    </section>
  );
}

export default StartApplyNow;
