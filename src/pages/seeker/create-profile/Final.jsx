import dd from "../../../assets/images/dd.png";
import DefaultNav from "../../../components/nav/DefaultNav";
import CustomButton from "../../../components/ui/CustomButton";

const Final = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const typeUser = localStorage.getItem("type user");
  return (
    <div className="">
      {/* Title */}
      <DefaultNav />

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center flex-grow text-center my-5 p-5">
        <div className="flex flex-col gap-8 items-center w-full max-w-2xl">
          {/* Profile Image */}
          <div className="md:w-[50%] md:flex hidden w-[90%]  justify-center ">
            <img src={dd} alt="Profile Ready" className="w-[60%] max-w-sm" />
          </div>

          {/* Success Message */}
          <h2 className="text-2xl font-semibold">
            Nice work,{" "}
            <span className="text_secondary">
              {user?.firstName} {user?.lastName}!
            </span>{" "}
            Your profile is ready.
          </h2>
          <p className="text-lg text-gray-500 w-[90%] md:w-[100%]">
            {typeUser === "seeker" && (
              <>
                Congratulations! With thousands of opportunities available, you
                can now apply for jobs that match your skills—whether by bidding
                on freelance jobs or taking the required assessments for
                full-time and part-time positions.
                <br />
                Let’s complete the final step so you can start applying for
                jobs. Take the test now!
              </>
            )}
            {typeUser === "company" && (
              <>
                Congratulations! You’re just one step away from fully
                registering your company. Once complete, you’ll be able to post
                job opportunities and hire talent that aligns with your business
                needs.
                <br />
                Let’s finish the registration process and unlock the full
                potential of your company’s profile!
              </>
            )}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            {typeUser === "seeker" && (
              <CustomButton
                height="40px"
                text="View My Profile"
                className="!text-[var(--secondary-color)] !bg-white border_secondary !border-2"
                type="button"
                width="280px"
                link="/profile-seeker"
              />
            )}
            {typeUser === "company" && (
              <CustomButton
                height="40px"
                text="View My Profile"
                className="!text-[var(--secondary-color)] !bg-white border_secondary !border-2"
                type="button"
                width="280px"
                link="/profile-company"
              />
            )}
            {typeUser === "seeker" && (
              <CustomButton
                height="40px"
                text="Take Test Now"
                type="button"
                width="280px"
                link="/do-test"
              />
            )}
            {typeUser === "company" && (
              <CustomButton
                height="40px"
                text="Post a Job Now"
                type="button"
                width="280px"
                link="/post-job"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
