import img1 from "../../assets/images/11.png";
import img2 from "../../assets/images/22.png";
import img3 from "../../assets/images/33.png";
import img4 from "../../assets/images/44.png";
import img5 from "../../assets/images/55.png";
import img6 from "../../assets/images/66.png";
const MoreInformation = () => {
  const card = [
    {
      img: img1,
      title: "Prove Your Competence with Trusted Tools",
      discretion:
        "Start by proving your skills by taking a mandatory post-registration test, applying for available positions with confidence after passing it, and distinguishing from the other candidates!",
    },
    {
      img: img2,
      title: "Professional opportunities to develop your skills",
      discretion:
        "Develop your career through dedicated jobs for you, whether you are looking for a full-time, part-time job, or a free job. We help you choose a job that fits your skills and interests.",
    },
    {
      img: img3,
      title: "Flexible and Diverse Job Opportunities",
      discretion:
        "We offer a flexible working environment with full-time, part-time, and free work to meet your professional needs and personal preferences. No matter what type of work you prefer, we have the right opportunity for you.",
    },
    {
      img: img4,
      title: "Job Application Requirements",
      discretion:
        "Before applying for any job, job seekers must complete the necessary requirements. If you are an employee, you will need to pass a test for the job you are applying to. If you are independent, you will have to send a financial and technical offer.",
    },
    {
      img: img5,
      title: "Evaluation and notifications to freelancers",
      discretion:
        "After sending the financial and technical propsal, you will be notified via the notification section of the site regarding the status of your propsal.",
    },
    {
      img: img6,
      title: "Evaluation and notifications to employees",
      discretion:
        "After passing the exam, your skills will be evaluated, and you will have to wait for notification via the notification section of the site regarding your acceptance or rejection of the job.",
    },
  ];
  return (
    <div className="bg-[#EFF5F1] py-5">
      <div className="fccc md:w-[60%] w-[90%] mx-auto p-5 ">
        <h2 className="font-bold mr-3 text-center ">
          Your job doesn&apos;t just depend on your CV!
        </h2>
        <p className="text-[#555555] text-center text-2xl">
          We believe that{" "}
          <span className="text_secondary font-bold">actual performance</span>{" "}
          is the foundation! Our smart ratings help you{" "}
          <span className="text_secondary font-bold">
            prove your actual skills
          </span>{" "}
          to employers without the need for{" "}
          <span className="text_secondary font-bold">long experience</span>.
        </p>
      </div>
      <div>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {card.map((item) => (
            <div
              key={item.title}
              className="mx-10 my-10 shadow-lg h-[450px] w-[350px] bg-white rounded-lg p-10"
            >
              <div className="flex items-center flex-col h-full justify-between">
                <div className="w-[100px] h-[100px] ">
                  <img className="w-full h-full" src={item.img} alt="" />
                </div>
                <div className="w-[90%] h-[2px] bg-gray-500 my-4 "></div>
                <h3 className="font-bold text-2xl text-center">{item.title}</h3>
                <p className="text-[#555555] text-center">{item.discretion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreInformation;
