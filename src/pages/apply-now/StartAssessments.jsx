import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import DefaultNav from "../../components/nav/DefaultNav";
import CustomButton from "../../components/ui/CustomButton";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import CameraRecorder from "../../components/camera-recorder/CameraRecorder";
import ConfirmationModal from "../do-test/ConfirmationModal";
import LoadingOverlay from "./LoadingOverlay";
import apiRequest from "../../utils/apiRequest";

const StartAssessments = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(400);
  const [isClosed, setIsClosed] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const navigate = useNavigate();

  const questions = [
    {
      jobExamId: 1,
      questionText:
        "Which HTML element is used to declare the document's base URL for relative links?",
      choices: ["<meta>", "<link>", "<base>", "<head>"],
      correctAnswer: "<base>",
    },
    {
      jobExamId: 6,
      questionText: "Which of the following is NOT a valid Git merge strategy?",
      choices: ["recursive", "resolve", "octopus", "squash"],
      correctAnswer: "squash",
    },
    {
      jobExamId: 7,
      questionText: "In Git, what does git reflog do?",
      choices: [
        "Shows all commit history in the repository",
        "Shows references to where HEAD and branch references have been",
        "Deletes local branches",
        "Lists files to be staged",
      ],
      correctAnswer:
        "Shows references to where HEAD and branch references have been",
    },
    {
      jobExamId: 11,
      questionText: "How do you make a component extendable in Tailwind CSS?",
      choices: ["@apply", "extend", "inherit", "@include"],
      correctAnswer: "@apply",
    },
    {
      jobExamId: 12,
      questionText:
        "Which ES6 feature is used to extract data from arrays or objects?",
      choices: ["Destructuring", "Spread", "Rest", "Arrow Functions"],
      correctAnswer: "Destructuring",
    },
    {
      jobExamId: 17,
      questionText:
        "CSS Grid allows for two-dimensional layouts, unlike Flexbox.",
      choices: ["True", "False"],
      correctAnswer: "True",
    },
    {
      jobExamId: 21,
      questionText: "Tailwind CSS includes built-in support for dark mode.",
      choices: ["True", "False"],
      correctAnswer: "True",
    },
    {
      jobExamId: 25,
      questionText:
        "git reset --hard HEAD will discard all uncommitted changes.",
      choices: ["True", "False"],
      correctAnswer: "True",
    },
    {
      jobExamId: 32,
      questionText: `let numbers = [1, 2, 3, 4];
for (let i = 0; i <= numbers.length; i++) {
  console.log(numbers[i]);
}`,
      wrongLine: 2,
      correction: "for (let i = 0; i < numbers.length; i++) {",
    },
    {
      jobExamId: 37,
      questionText: "What is the result of: console.log(2 + '2');",
      correctAnswer: "22",
    },
  ];

  const handleAnswerSelection = (option) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
    setAnsweredQuestions((prev) => new Set([...prev, currentQuestion]));
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      finishExam();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleNext = () => {
    const currentQ = questions[currentQuestion];
    const selected = selectedAnswers[currentQuestion];

    if (selected && selected === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setTimeout(() => {
        setIsModalOpen(true);
      }, 500);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const finishExam = async () => {
    if (isClosed) return;

    Cookies.set("score", score, { expires: 1 });
    Cookies.set("totalQuestions", questions.length, { expires: 1 });

    setIsLoading(true);

    try {
      const userId = JSON.parse(localStorage.getItem("user"));
      const localUserId = userId?.userProfileId;
      const jobIdd = localStorage.getItem("jobId");

      const payload = {
        jobId: jobIdd,
        userProfileId: localUserId,
        matchRatio: ((score / questions.length) * 100).toFixed(2),
      };

      await apiRequest("JobApplications", "POST", payload);
      console.log("Application submitted:", payload);
      setIsClosed(true);
      navigate("/results");
    } catch (error) {
      console.error("Error applying for job:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmFinish = () => {
    finishExam();
  };

  return (
    <div>
      <DefaultNav />
      <div className="flex justify-center items-center min-h-[90vh] w-full">
        <div className="bg-white rounded-lg shadow-xl p-6 md:w-[60%] w-[90%] mx-auto">
          {/* Header */}
          <div className="head flex gap-5 justify-between items-center">
            <div className="flex items-center">
              <Clock size={40} />
              <div className="flex flex-col pl-3">
                <span className="text-gray-500">Time remaining</span>
                <span className="text-2xl font-bold">
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
            <CustomButton
              text="Submit"
              type="button"
              height="40px"
              width="150px"
              onClick={() => setIsModalOpen(true)}
            />
          </div>

          {/* Question Section */}
          <div className="body my-5 flex items-center md:justify-between justify-center gap-8 flex-wrap-reverse">
            <div className="text mr-5 lg:w-[70%] w-full">
              <span className="text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
              </span>

              <pre className="text-2xl mt-2 whitespace-pre-wrap">
                {questions[currentQuestion].questionText}
              </pre>

              {/* Render MCQ if available */}
              {questions[currentQuestion].choices ? (
                <div className="choices grid md:grid-cols-2 grid-cols-1 gap-4 mt-5">
                  {questions[currentQuestion].choices.map((option, index) => (
                    <label
                      key={index}
                      className={`flex items-center p-4 border-2 rounded-xl shadow-md cursor-pointer transition-all duration-300 ${
                        selectedAnswers[currentQuestion] === option
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`choice-${currentQuestion}`}
                        value={option}
                        className="hidden"
                        checked={selectedAnswers[currentQuestion] === option}
                        onChange={() => handleAnswerSelection(option)}
                      />
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                            selectedAnswers[currentQuestion] === option
                              ? "border-blue-600"
                              : "border-gray-400"
                          }`}
                        >
                          <div
                            className={`w-2.5 h-2.5 bg-blue-600 rounded-full transform transition-all ${
                              selectedAnswers[currentQuestion] === option
                                ? "scale-100"
                                : "scale-0"
                            }`}
                          ></div>
                        </div>
                        <span className="text-gray-700 font-medium">
                          {option}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              ) : (
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="اكتب إجابتك هنا"
                    className="w-full p-4 border-2 rounded-xl shadow-md"
                    value={selectedAnswers[currentQuestion] || ""}
                    onChange={(e) => handleAnswerSelection(e.target.value)}
                  />
                </div>
              )}
            </div>

            {/* Circular Progress Bar */}
            <div className="clock flex items-center justify-between w-full ">
              <div className="w-40 h-40">
                <CircularProgressbar
                  value={answeredQuestions.size}
                  maxValue={questions.length}
                  text={`${answeredQuestions.size}/${questions.length}`}
                  styles={buildStyles({
                    textColor: "#000",
                    pathColor: "#1971c2",
                    trailColor: "#d1d5db",
                    textSize: "16px",
                    strokeLinecap: "round",
                  })}
                />
              </div>
              <CameraRecorder stopRecording={isClosed} />
            </div>
          </div>

          {/* Navigation */}
          <div className="navigation flex flex-col items-center">
            <div className="flex justify-between gap-4 w-full">
              <CustomButton
                className="!text-[var(--secondary-color)] !bg-white border_secondary"
                text="Previous"
                type="button"
                height="40px"
                width="150px"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              />
              <CustomButton
                text={
                  currentQuestion === questions.length - 1 ? "Finish" : "Next"
                }
                type="button"
                height="40px"
                width="150px"
                onClick={handleNext}
              />
            </div>

            <div className="mt-5 flex gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 flex items-center justify-center border rounded-full text-sm font-bold ${
                    answeredQuestions.has(index)
                      ? "bg-[#1971c2] text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setCurrentQuestion(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmFinish}
      />

      {isLoading && <LoadingOverlay />}
    </div>
  );
};

export default StartAssessments;
