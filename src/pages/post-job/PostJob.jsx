import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/layout/Layout";
import PostJobStepOne from "./PostJobStepOne";
import PostJobStepTwo from "./PostJobStepTwo";
import PostJobStepThree from "./PostJobStepThree";

const PostJob = () => {
  const [step, setStep] = useState(1);

  // ✅ اجلب بيانات الشركة بشكل آمن
  const company = JSON.parse(localStorage.getItem("company data"));
  const companyProfileId = company?.id;
  const localUserrrr = JSON.parse(localStorage.getItem("user"));
  const localUserrrrId = localUserrrr?.companyProfileId;

  const userId = companyProfileId || localUserrrrId;

  console.log("companyProfileId:", userId);

  const formMethods = useForm({
    defaultValues: {
      jobTitle: "",
      jobCategory: "",
      jobType: "",
      jobDescription: "",
      experienceLevel: "",
      skills: [],
      deadlineForApplications: "",
      expectedSalary: "",
      byNegotiation: false,
      workingHours: "",
      jobLocation: "",
      companyProfileId: userId || "",
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
          formMethods={formMethods}
          onNext={nextStep}
          onPrev={prevStep}
        />
      )}
      {step === 3 && (
        <PostJobStepThree
          formMethods={formMethods}
          onNext={nextStep}
          onPrev={prevStep}
        />
      )}
    </Layout>
  );
};

export default PostJob;
