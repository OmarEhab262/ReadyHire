import policies1 from "../../../assets/images/ddddd.svg";
import policies2 from "../../../assets/images/policies2.svg";
import policies3 from "../../../assets/images/policies3.svg";
import Footer from "../../../components/footer/Footer";
const Policies = () => {
  return (
    <>
      <div className="px-9">
        <div className="font-bold text-3xl mt-5 ml-5">
          READY <span className="text-[var(--secondary-color)]">HIRE</span>
        </div>
        <div className="flex justify-center items-center gap-10 p-3 flex-col md:w-[60%] w-[90%] mx-auto">
          <div className="text-center ">
            <h1>Privacy Policies</h1>
          </div>
          <div>
            <h3 className="flex gap-2 text-[30px] font-semibold">
              <img className="w-[30px]" src={policies1} alt="" />{" "}
              <span>Project Privacy Policies:</span>
            </h3>
            <p className="text-gray-600  leading-loose ">
              1.Project classification (special vs. general): Private projects:
              The independent is not allowed to share or post project details on
              GitHub or any other platform. It should be delivered only via the
              platform&apos;s platform. Public enterprises: The independent is
              allowed to participate in the project after completion, both in
              his personal exhibition and on other platforms, subject to the
              employer&apos;s consent.
              <br />
              2.Project File Protection: All uploaded files pass through an
              encryption and protection system to ensure they are not leaked.
              Project files can only be uploaded by the authorized employer and
              freelancer. Private enterprises can be downloaded only after the
              employer&apos;s consent, and may be protected by a password if
              necessary.
            </p>
          </div>
          <div>
            <h3 className="flex gap-2 text-[30px] font-semibold">
              <img src={policies2} alt="" className="w-[30px]" />{" "}
              <span>Personal Data Privacy Policies:</span>
            </h3>
            <p className="text-gray-600  leading-loose ">
              3.Hide External Communication Data: Employers cannot share phone
              numbers or emails within their profiles to prevent communication
              outside the platform. The employer and freelancer can communicate
              only through the internal chat system to ensure security and
              protect the rights of the parties.
              <br />
              4.User Data Protection: All data is encrypted and not sold or
              shared with third parties. Users can delete their accounts and
              data completely upon request. necessary.
            </p>
          </div>
          <div>
            <h3 className="flex gap-2 text-[30px] font-semibold">
              <img src={policies3} alt="" className="w-[30px]" />{" "}
              <span>Payment and Security Policies:</span>
            </h3>
            <p className="text-gray-600  leading-loose ">
              Freelancer and Employer&apos;s Rights Guarantee: Upon recruitment,
              the amount of money is booked on the platform until the project is
              successfully delivered. In case of dispute, the platform can
              review the files and communicate with the parties to resolve the
              problem according to the evidence provided. If the freelancer does
              not commit to delivery, the amount can be refunded to the employer
              after reviewing the order.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Policies;
