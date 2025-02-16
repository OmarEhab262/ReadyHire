import { Controller, useForm } from "react-hook-form";
import CustomInput from "../../../components/ui/CustomInput";
// import LoginWithGoogle from "../../../utils/LoginWithGoogle";
import CustomAlertMessage from "../../../components/ui/CustomAlertMassage";
import CustomButton from "../../../components/ui/CustomButton";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../../assets/images/Rectangle 21.png";

import google from "../../../assets/images/google.svg";
import apple from "../../../assets/images/apple.svg";
const Signup = () => {
  const typeUser = localStorage.getItem("type user");
  const navigate = useNavigate();
  const [alertMassage, setAlertMessage] = useState({
    message: "",
    type: "",
  });
  const [loader, setLoader] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoader(true);
    console.log("Submitted Data:", data);
    setTimeout(() => {
      setLoader(false);
      setAlertMessage({ message: "Login successful", type: "success" });
      if (typeUser === "seeker") {
        navigate("/upload-resume");
      }
    }, 2000);
  };

  return (
    <div className="px-9">
      <div className="font-bold text-3xl mt-5 ml-5 font-young">
        <span className="text_secondary ">READY</span> <span>HIRE</span>
      </div>
      <div className="flex items-center justify-around min-h-screen ">
        <div className="md:w-[40%] w-[90%] ">
          <h2 className="text-[40px] font-semibold mb-4">Sign up</h2>
          <p className="text-gray-400 text-md mb-3">
            {typeUser === "seeker" ? (
              <span>
                Let’s get you all set up so you can access your job
                <span className="text_secondary font-semibold mx-1">
                  seeker
                </span>
                account and start exploring opportunities.
              </span>
            ) : typeUser === "company" ? (
              <span>
                Let’s get you all set up so you can manage your
                <span className="text_secondary font-semibold mx-1">
                  company
                </span>
                account and connect with top talent.
              </span>
            ) : typeUser === "client" ? (
              <span>
                Let’s get you all set up so you can access your
                <span className="text_secondary font-semibold mx-1">
                  client
                </span>
                account and find the services you need.
              </span>
            ) : null}
          </p>

          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between gap-11 ">
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                rules={{ required: "first name is required" }}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    label="First Name"
                    err={errors.firstName?.message}
                    classNameContainer="!m-0"
                    width="100%"
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                rules={{ required: "Last name is required" }}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    label="Last Name"
                    err={errors.lastName?.message}
                    classNameContainer="!m-0"
                    width="100%"
                  />
                )}
              />
            </div>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{ required: "Country is required" }}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  width="100%"
                  label="Country"
                  err={errors.country?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label="Email"
                  err={errors.email?.message}
                  width="100%"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label="Password"
                  type="password"
                  width="100%"
                  err={errors.password?.message}
                />
              )}
            />
            {errors.terms && (
              <p className="text-red-500 text-sm">{errors.terms.message}</p>
            )}
            <div>
              <Controller
                name="terms"
                control={control}
                rules={{ required: "You must agree to the Privacy Policies" }}
                render={({ field }) => (
                  <div className="flex items-center gap-2 mt-4">
                    <input
                      className="cursor-pointer"
                      type="checkbox"
                      id="terms"
                      {...field}
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                    <label htmlFor="terms" className="text-gray-600">
                      I agree to and adhere to Ready Hire&lsquo;s{" "}
                      <Link
                        to="/policies"
                        className="text-blue-600 cursor-pointer"
                      >
                        Privacy Policies
                      </Link>
                      .
                    </label>
                  </div>
                )}
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <CustomButton
                height="40px"
                text="Sign Up"
                type="submit"
                width="100%"
                loader={loader}
              />
              <div>
                <p>
                  Already have an account?
                  <Link className="text-blue-600" to="/login">
                    Log In
                  </Link>
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <span className="w-[45%] h-0.5 bg-gray-200"></span>
                <span className="mx-2 text-gray-300">Or</span>
                <span className="w-[45%] h-0.5 bg-gray-200"></span>
              </div>

              <div className="flex items-center gap-10 mb-10 flex-wrap justify-center">
                <CustomButton
                  type="button"
                  icon={<img className="w-8 h-8" src={google} alt="" />}
                  className="!text-[var(--secondary-color)] !bg-white border-gray-500 border"
                  width="150px"
                />
                <CustomButton
                  type="button"
                  icon={<img className="w-8 h-8" src={apple} alt="" />}
                  className="!text-[var(--secondary-color)] !bg-white border-gray-500 border"
                  width="150px"
                />
              </div>
            </div>
          </form>
        </div>
        <CustomAlertMessage
          message={alertMassage.message}
          type={alertMassage.type}
        />
        <div className="md:w-[50%] md:flex hidden    flex-col items-center justify-center">
          <img className="w-fit h-[90%]" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
