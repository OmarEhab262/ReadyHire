import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/layout/Layout";
import PostJobStepOne from "./PostJobStepOne";
import PostJobStepTwo from "./PostJobStepTwo";
import PostJobStepThree from "./PostJobStepThree";

const PostJob = () => {
  const [step, setStep] = useState(1);

  // 🔹 Move form state to PostJob to persist data across steps
  const formMethods = useForm({
    defaultValues: {
      jobTitle: "",
      jobCategory: "",
      jobType: "",
      experienceLevel: "",
      skills: [],
      applicationDeadline: "",
      expectedSalary: "",
      byNegotiation: false,
      workingHours: "",
      jobLocation: "",
    },
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <Layout>
      {step === 1 && (
        <PostJobStepOne formMethods={formMethods} onNext={nextStep} />
      )}
      {step === 2 && (
        <PostJobStepTwo
          onNext={nextStep}
          onPrev={prevStep}
          formMethods={formMethods}
        />
      )}
      {step === 3 && (
        <PostJobStepThree
          onNext={nextStep}
          onPrev={prevStep}
          formMethods={formMethods}
        />
      )}
    </Layout>
  );
};

export default PostJob;
