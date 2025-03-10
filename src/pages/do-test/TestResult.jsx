import Cookies from "js-cookie";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DefaultNav from "../../components/nav/DefaultNav";
import CustomButton from "../../components/ui/CustomButton";

const TestResult = () => {
  // استرجاع القيم من الكوكيز
  const score = parseInt(Cookies.get("score") || "0", 10);
  const totalQuestions = parseInt(Cookies.get("totalQuestions") || "0", 10);
  const incorrectAnswers = totalQuestions - score;
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
  const isTakenTask = percentage >= 70;
  Cookies.set("isTakenTask", isTakenTask);

  return (
    <div className="">
      <DefaultNav />
      <div className="flex flex-col items-center justify-center min-h-[80vh] w-full px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:w-[40%] w-full mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Test Completed!
          </h2>

          <div className="w-40 h-40 mx-auto mb-6">
            <CircularProgressbar
              value={percentage}
              text={`${Math.round(percentage)}%`}
              styles={buildStyles({
                textSize: "16px",
                pathColor: percentage >= 50 ? "#4CAF50" : "#F87171",
                textColor: "#333",
                trailColor: "#ddd",
              })}
            />
          </div>

          <p className="text-lg text-gray-700 font-medium">
            Total Questions: {totalQuestions}
          </p>
          <p className="text-lg text-green-600 font-semibold">
            Correct Answers: {score}
          </p>
          <p className="text-lg text-red-600 font-semibold">
            Wrong Answers: {incorrectAnswers}
          </p>

          <div className="mt-6 flex justify-center space-x-4 w-full">
            <CustomButton
              text="Continue"
              type="button"
              height="45px"
              width="300px"
              link={percentage >= 70 ? "/test-passed" : "/not-passed"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestResult;
