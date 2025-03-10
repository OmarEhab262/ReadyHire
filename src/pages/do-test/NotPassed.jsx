import DefaultNav from "../../components/nav/DefaultNav";
import CustomButton from "../../components/ui/CustomButton";

const NotPassed = () => {
  return (
    <div>
      <DefaultNav />
      <div className="flex flex-col items-center justify-center h-[90vh] bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center max-w-xl w-full">
          <h1 className="text-3xl font-semibold text-red-500 mb-4">
            ⚠️ Don’t worry, you can try again! ⚠️
          </h1>
          <p className="text-gray-600 mb-4">
            You didn’t pass the test this time, but don’t let that discourage
            you!
          </p>
          <p className="text-gray-600 mb-4">
            We recommend reviewing the required skills, practicing, and then
            retaking the test when you&apos;re ready.
          </p>
          <div className="text-left bg-gray-50 p-4 rounded-lg mb-4">
            <h2 className="text-lg font-semibold text-blue-600">
              🔹 Tips for Improvement:
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>✅ Review relevant materials in your field.</li>
              <li>✅ Enhance your skills through training courses.</li>
            </ul>
          </div>
          <p className="text-gray-600 mb-6">
            Try the test again when you feel prepared.
          </p>

          <div className="flex justify-center">
            <CustomButton
              text="Retry Later"
              type="button"
              height="40px"
              width="150px"
              link="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotPassed;
