import img1 from "../../assets/images/b1.png";
import img2 from "../../assets/images/b2.png";
import img3 from "../../assets/images/b3.png";
import img4 from "../../assets/images/b4.png";

const HowDoYouStart = () => {
  return (
    <div className="bg-[#EFF5F1] py-5">
      <div className="fccc md:w-[60%] w-[90%] mx-auto py-5">
        <h2 className="font-bold mr-3 text-center">
          How do you <span className="text_secondary font-bold">start</span>{" "}
          your <span className="text_secondary font-bold">career</span>?
        </h2>
        <p className="text-[#555555] text-center text-2xl">
          We have provided career opportunities for thousands of creative
          technical minds around the world. Here is a breakdown of how to start.
        </p>
      </div>

      <div className="py-5 flex flex-col md:gap-10 gap-5">
        {/* الخطوة 1 */}
        <div className="flex flex-wrap gap-10 items-center justify-around w-[90%] mx-auto">
          <h2 className="font-bold mr-3 md:w-[50%] w-[90%]">
            Create your account and register your basic data
          </h2>
          <div className="md:w-[40%] w-[90%]">
            <img src={img1} alt="Step 1" />
          </div>
        </div>

        {/* الخطوة 2 */}
        <div className="flex flex-wrap-reverse gap-10 items-center justify-around w-[90%] mx-auto">
          <div className="md:w-[40%] w-[90%]">
            <img src={img2} alt="Step 2" />
          </div>
          <h2 className="font-bold mr-3 md:w-[50%] w-[90%]">
            Pass the basic skills test, which is compulsory for all job seekers.
          </h2>
        </div>

        {/* الخطوة 3 */}
        <div className="flex flex-wrap gap-10 items-center justify-around w-[90%] mx-auto">
          <div className="md:w-[50%] w-[90%]">
            <h2 className="font-bold mr-3">
              Start applying for jobs or projects:
            </h2>
            <div className="mt-5 text-2xl w-[90%] flex flex-col gap-5">
              <p>
                If you are looking for a full-time/part-time job, you will
                undergo an additional test for each company you apply to, and
                your assessment will be sent to your employer.
              </p>
              <p>
                If you are independent (Freelancer), you will not need
                additional tests, but you must send a Financial & Technical
                Proposal when applying to any project.
              </p>
            </div>
          </div>
          <div className="md:w-[40%] w-[90%]">
            <img src={img3} alt="Step 3" />
          </div>
        </div>

        {/* الخطوة 4 */}
        <div className="flex flex-wrap-reverse gap-10 items-center justify-around w-[90%] mx-auto">
          <div className="md:w-[40%] w-[90%]">
            <img src={img4} alt="Step 4" />
          </div>
          <h2 className="font-bold mr-3 md:w-[50%] w-[90%]">
            Get your chance: After evaluating or reviewing your offer, you will
            be notified in the notification section of the application result.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HowDoYouStart;
