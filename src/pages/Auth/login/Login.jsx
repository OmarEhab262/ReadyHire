import { Controller, useForm } from "react-hook-form";
import CustomInput from "../../../components/ui/CustomInput";
// import LoginWithGoogle from "../../../utils/LoginWithGoogle";
import CustomAlertMessage from "../../../components/ui/CustomAlertMassage";
import CustomButton from "../../../components/ui/CustomButton";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../../assets/images/freepik__upload__29140.png";
import google from "../../../assets/images/google.svg";
import apple from "../../../assets/images/apple.svg";
import DefaultNav from "../../../components/nav/DefaultNav";
// import apiRequest from "../../../utils/apiRequest";
const Login = () => {
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
      navigate("/");
    }, 2000);
  };
  // const onSubmit = async (data) => {
  //   setLoader(true);
  //   try {
  //     const response = await apiRequest("Authentication/Login", "POST", data);
  //     console.log("response", response);
  //     // localStorage.setItem("user", JSON.stringify(response.user));
  //     setAlertMessage({ message: "Login successful", type: "success" });
  //     navigate("/verification-success");
  //   } catch (error) {
  //     setAlertMessage({
  //       message: error.response?.data?.message || "Login failed. Try again.",
  //       type: "error",
  //     });
  //   } finally {
  //     setLoader(false);
  //   }
  // };

  return (
    <div className="">
      <DefaultNav />
      <div className="flex items-center justify-around h-[90vh]  ">
        <div className="md:w-[40%] w-[90%] ">
          <h2 className="text-[40px] font-semibold mb-4">Login</h2>
          <p className="text-gray-400 text-md">Login to access your account</p>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
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

            <div className="flex flex-col items-center gap-3">
              <CustomButton
                height="40px"
                text="Login"
                type="submit"
                width="100%"
                loader={loader}
              />
              <div>
                <p>
                  Don’t have an account?{" "}
                  <Link className="text-blue-600" to="/signup">
                    Sign up
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
                  width="120px"
                />
                <CustomButton
                  type="button"
                  icon={<img className="w-8 h-8" src={apple} alt="" />}
                  className="!text-[var(--secondary-color)] !bg-white border-gray-500 border"
                  width="120px"
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
          <img className="w-fit" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
