import CustomButton from "../../components/ui/CustomButton";
import img from "../../assets/images/Frame.png";
import DefaultNav from "../../components/nav/DefaultNav";

function InstructionsDoTest() {
  return (
    <div className="">
      <DefaultNav />
      <div className="flex justify-center items-center min-h-[90vh]">
        {" "}
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full">
          {/* Book Icon */}
          <div className="flex justify-center items-center">
            <div className=" w-12 h-12 ">
              <img src={img} alt="" />
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Instructions before starting the test:
          </h2>
          <p className="text-red-500 mb-2">
            ⚠️ Please read the instructions carefully to ensure a smooth and
            fair test experience:
          </p>
          <ul className="list-decimal pl-5 mb-4 text-gray-700">
            <li>
              You don&apos;t go out of the browser during the test, this may
              automatically end the session.
            </li>
            <li>
              Don&apos;t open new tabs or move to other sites, as this may
              exclude you from the test.
            </li>
            <li>
              Be careful to stabilize your internet, because losing connectivity
              can result in losing your test progress.
            </li>
            <li>
              Allocate enough time to answer all the questions, as the pause or
              re-attempt cannot be put on hold immediately after the start.
            </li>
            <li>
              Choose a quiet, distraction-free place to ensure your focus during
              the solution.
            </li>
            <li>
              No external sources such as search engines or references are
              allowed to be used during the test.
            </li>
            <li>
              Once the test starts, you won&apos;t be able to go back to
              previous questions, so make sure you answer before moving on to
              the next one.
            </li>
            <li>
              Minimum test <span className=" font-bold">pass is 70%</span>, and
              if you don&apos;t pass, you can re-try.
            </li>
          </ul>
          <p className="text-blue-500 font-semibold mb-2">
            ♦️Remember: This test aims to confirm your skills and help us offer
            you the most suitable opportunities based on what you mentioned in
            your CV. 🚀
          </p>
          <p className="text-gray-700 italic">
            Take your time, focus well, show your best. We wish you all the
            best! ❤️
          </p>

          <div className="mt-6 fccc">
            <CustomButton
              text="Start Test"
              type="button"
              height="40px"
              width="150px"
              link="/do-test"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructionsDoTest;
