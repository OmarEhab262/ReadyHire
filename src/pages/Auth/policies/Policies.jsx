import policies1 from "../../../assets/images/ddddd.svg";
import policies2 from "../../../assets/images/policies2.svg";
import policies3 from "../../../assets/images/policies3.svg";
import Footer from "../../../components/footer/Footer";

const Policies = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="font-bold text-3xl p-5 font-young">
          <span className="text_secondary ">READY</span> <span>HIRE</span>
        </div>

        <main className="container mx-auto px-6 md:px-16 py-10">
          <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
            Privacy Policies
          </h2>

          <div className="space-y-10">
            {/* Project Privacy Policies */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="flex items-center gap-3 text-xl font-semibold mb-4">
                <img src={policies1} alt="Project Policies" className="w-8" />
                Project Privacy Policies
              </h3>
              <p className="text-gray-600 leading-loose">
                <strong>1. Project Classification:</strong> Private projects:
                The independent freelancer is not allowed to share or post
                project details on GitHub or any other platform. Public
                enterprises: The freelancer may showcase completed projects with
                employer&apos;s consent.
                <br />
                <strong>2. Project File Protection:</strong> All uploaded files
                go through an encryption system. Files can only be accessed by
                the authorized employer and freelancer. Private enterprise files
                are downloadable only with employer&apos;s consent and can be
                password-protected if necessary.
              </p>
            </div>

            {/* Personal Data Privacy Policies */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="flex items-center gap-3 text-xl font-semibold mb-4">
                <img
                  src={policies2}
                  alt="Personal Data Policies"
                  className="w-8"
                />
                Personal Data Privacy Policies
              </h3>
              <p className="text-gray-600 leading-loose">
                <strong>3. External Communication Restrictions:</strong>{" "}
                Employers cannot share contact information to prevent
                off-platform communication. All interactions must occur through
                the internal chat system for security.
                <br />
                <strong>4. User Data Protection:</strong> All user data is
                encrypted and never sold or shared with third parties. Users
                have full control to delete their accounts and associated data
                upon request.
              </p>
            </div>

            {/* Payment and Security Policies */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="flex items-center gap-3 text-xl font-semibold mb-4">
                <img
                  src={policies3}
                  alt="Payment and Security"
                  className="w-8"
                />
                Payment and Security Policies
              </h3>
              <p className="text-gray-600 leading-loose">
                <strong>5. Freelancer & Employer Rights:</strong> Payments are
                securely held on the platform until project completion. In case
                of disputes, the platform reviews provided evidence to resolve
                issues. If the freelancer fails to deliver, a refund may be
                issued to the employer after review.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Policies;
