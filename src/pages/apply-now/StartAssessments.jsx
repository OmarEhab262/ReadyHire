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
const StartAssessments = () => {
  const [isLoading, setIsLoading] = useState(false);

  const questions = [
    {
      id: 1,
      question:
        "Which of the following is a popular programming language for developing multimedia webpages?",
      options: ["JavaScript", "COBOL", "Python", "Java"],
      correct: "JavaScript",
    },
    {
      id: 2,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Machine Learning",
        "Home Tool Markup Language",
        "Hyperlink and Text Markup Language",
      ],
      correct: "Hyper Text Markup Language",
    },
    {
      id: 3,
      question: "What is the abbreviation for Cascading Style Sheets?",
      options: ["CSS", "C++", "CSV", "C#"],
      correct: "CSS",
    },
    {
      id: 4,
      question:
        "Which of the following programming languages is statically typed?",
      options: ["JavaScript", "Python", "Java", "Ruby"],
      correct: "Java",
    },
    {
      id: 5,
      question: "What is the primary purpose of using React.js?",
      options: [
        "To style web pages",
        "To build dynamic user interfaces",
        "To manage databases",
        "To create backend APIs",
      ],
      correct: "To build dynamic user interfaces",
    },
    {
      id: 6,
      question: "Introduce yourself like you're in a real job interview.",
      options: [],
      correct: null,
    },
  ];

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(400);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());

  const handleAnswerSelection = (option) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
    setAnsweredQuestions((prev) => new Set([...prev, currentQuestion]));
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      Cookies.set("score", score, { expires: 1 });
      Cookies.set("totalQuestions", questions.length, { expires: 1 });
      //   navigate("/results");
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, navigate, score, questions.length]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };
  const handleNext = () => {
    if (
      selectedAnswers[currentQuestion] === questions[currentQuestion].correct
    ) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setTimeout(() => {
        setIsModalOpen(true);
      }, 1000); // Wait 1 second before opening the modal
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };
  const handleConfirmFinish = () => {
    Cookies.set("score", score, { expires: 1 });
    Cookies.set("totalQuestions", questions.length, { expires: 1 });

    setIsLoading(true); // Show the overlay

    setTimeout(() => {
      navigate("/thank-you");
    }, 3000);
  };

  return (
    <div>
      <DefaultNav />
      <div className="flex justify-center items-center min-h-[90vh] w-full">
        <div className="bg-white rounded-lg shadow-xl p-6 md:w-[60%] w-[90%] mx-auto">
          {/* Header */}
          <div className="head flex  gap-5 justify-between items-center">
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

              <p className="text-2xl mt-2">
                {questions[currentQuestion].question}
              </p>

              {questions[currentQuestion].id === 6 ? (
                <div className="mt-5">
                  <CameraRecorder />
                </div>
              ) : (
                <div className="choices grid md:grid-cols-2 grid-cols-1 gap-4 mt-5">
                  {questions[currentQuestion].options.map((option, index) => (
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
              )}
            </div>

            {/* Circular Progress Bar */}
            <div className="clock flex items-center justify-end mr-3">
              <div className="w-40 h-40">
                <CircularProgressbar
                  value={answeredQuestions.size} // عدد الأسئلة المجاب عليها
                  maxValue={questions.length} // إجمالي عدد الأسئلة
                  text={`${answeredQuestions.size}/${questions.length}`} // تحديث النص ليعكس العدد الصحيح
                  styles={buildStyles({
                    textColor: "#000",
                    pathColor: "#1971c2",
                    trailColor: "#d1d5db",
                    textSize: "16px",
                    strokeLinecap: "round",
                  })}
                />
              </div>
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

            {/* أرقام الأسئلة */}
            <div className="mt-5 flex gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 flex items-center justify-center border rounded-full text-sm font-bold 
        ${
          answeredQuestions.has(index) // إذا تمت الإجابة على السؤال
            ? "bg-[#1971c2] text-white"
            : "bg-gray-200 text-gray-700"
        }
      `}
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
