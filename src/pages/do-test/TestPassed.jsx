import DefaultNav from "../../components/nav/DefaultNav";
import CustomButton from "../../components/ui/CustomButton";

const TestPassed = () => {
  return (
    <div>
      <DefaultNav />
      <div className="flex flex-col items-center justify-center h-[90vh] bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center max-w-xl w-full">
          <h1 className="text-3xl font-semibold text-green-500 mb-4">
            🎉 Congratulations! You passed the test successfully! 🎉
          </h1>
          <p className="text-gray-600 mb-4">
            Your performance confirms your possession of the required core
            skills, and now you can apply for the jobs available in Ready Hire.
          </p>
          <p className="text-gray-600 mb-4">
            🔹 Explore the right opportunities for you and start your career
            with confidence!
          </p>
          <p className="text-gray-600 mb-6">
            We wish you well in your next move. 🎯💼
          </p>
          <div className="flex justify-center">
            <CustomButton
              text="Explore Jobs"
              type="button"
              height="40px"
              width="180px"
              link="/job"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPassed;
