import { Controller, useForm } from "react-hook-form";
import CustomButton from "../../components/ui/CustomButton";
import Layout from "../../components/layout/Layout";
import apiRequest from "../../utils/apiRequest";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomAlertMessage from "../../components/ui/CustomAlertMassage";

const MakeQuestions = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [alertMessage, setAlertMessage] = useState({
    message: "",
    type: "",
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Questions Data:", data);
    // await apiRequest("Questions", "POST", data);
    // navigate("/");
  };

  return (
    <Layout>
      <div className="flex flex-col items-center text-center p-6 md:p-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Create Your{" "}
          <span className="text_secondary">Assessment Questions</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mt-3 max-w-2xl">
          Design your assessment by adding questions and answers. Each question
          should have one correct answer. You can add up to five questions.
          Please ensure that all fields are filled out correctly before
          submitting.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 bg-white m-5 rounded-lg shadow-md space-y-6 md:w-[90%] mx-auto"
      >
        {[1, 2, 3, 4, 5].map((questionIndex) => (
          <div
            key={questionIndex}
            className="focus:border-none p-4 rounded-md space-y-4"
          >
            <h2 className="text-lg font-semibold mb-2">
              Question {questionIndex}
            </h2>

            {/* Question Text */}
            <div>
              <label className="block text-gray-600 font-medium">
                Question Text
              </label>
              <Controller
                control={control}
                name={`question${questionIndex}_text`}
                rules={{ required: "Question text is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Write the question here"
                    className="focus:border-none rounded-md w-full px-4 py-2 mt-2 focus:ring focus:ring-blue-300"
                  />
                )}
              />
              {errors[`question${questionIndex}_text`] && (
                <small className="text-red-500">
                  {errors[`question${questionIndex}_text`].message}
                </small>
              )}
            </div>

            {/* Answers + Correct Answer */}
            <div className="grid grid-cols-5 gap-4">
              {[1, 2, 3, 4].map((answerIndex) => (
                <div key={answerIndex}>
                  <label className="block text-gray-600 font-medium text-sm">
                    Answer {answerIndex}
                  </label>
                  <Controller
                    control={control}
                    name={`question${questionIndex}_answer${answerIndex}`}
                    rules={{ required: `Answer ${answerIndex} is required` }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder={`Answer ${answerIndex}`}
                        className="focus:border-none rounded-md w-full px-2 py-2 mt-1 focus:ring focus:ring-blue-300"
                      />
                    )}
                  />
                  {errors[`question${questionIndex}_answer${answerIndex}`] && (
                    <small className="text-red-500">
                      {
                        errors[`question${questionIndex}_answer${answerIndex}`]
                          .message
                      }
                    </small>
                  )}
                </div>
              ))}

              {/* Correct Answer */}
              <div>
                <label className="block text-gray-600 font-medium text-sm">
                  Correct Answer
                </label>
                <Controller
                  control={control}
                  name={`question${questionIndex}_correct`}
                  rules={{ required: "Correct answer is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Correct"
                      className="focus:border-none rounded-md w-full px-2 py-2 mt-1 focus:ring focus:ring-blue-300"
                    />
                  )}
                />
                {errors[`question${questionIndex}_correct`] && (
                  <small className="text-red-500">
                    {errors[`question${questionIndex}_correct`].message}
                  </small>
                )}
              </div>
            </div>
          </div>
        ))}

        <CustomButton type="submit" text="Submit Questions" height="45px" />

        <CustomAlertMessage
          message={alertMessage.message}
          type={alertMessage.type}
        />
      </form>
    </Layout>
  );
};

export default MakeQuestions;
