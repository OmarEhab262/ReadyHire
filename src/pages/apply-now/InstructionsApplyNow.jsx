import CustomButton from "../../components/ui/CustomButton";
import img from "../../assets/images/Frame.png";
import DefaultNav from "../../components/nav/DefaultNav";

function InstructionsApplyNow() {
  return (
    <div className="">
      <DefaultNav />
      <div className="flex justify-center items-center min-h-[90vh] m-4">
        {" "}
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full">
          {/* Book Icon */}
          <div className="flex justify-center items-center">
            <div className=" w-12 h-12 ">
              <img src={img} alt="" />
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            instructions before starting the Assessments :
          </h2>
          <p className="text-red-500 mb-2">
            ⚠️ please read the instructions carefully to ensure a smooth and
            fair Assessments experience:
          </p>
          <ul className="list-decimal pl-5 mb-4 text-gray-700">
            <li>
              You don&apos;t go out of the browser during the Assessments, this
              may automatically end the session.
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
          </ul>

          <div className="mt-6 fccc">
            <CustomButton
              text="Start Assessments"
              type="button"
              height="40px"
              width="150px"
              link="/start-assessments"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructionsApplyNow;
