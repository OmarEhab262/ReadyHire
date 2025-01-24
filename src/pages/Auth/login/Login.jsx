import { Controller, useForm } from "react-hook-form";
import CustomInput from "../../../components/ui/CustomInput";
import LoginWithGoogle from "../../../components/utils/LoginWithGoogle";
import CustomAlertMessage from "../../../components/ui/CustomAlertMassage";
import CustomButton from "../../../components/ui/CustomButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      navigate("/home");
    }, 2000);
  };

  const handleLinkedInLogin = () => {
    console.log("LinkedIn login clicked");
  };

  return (
    <div>
      <h1 className="text_primary bg_secondary">Login</h1>
      <div className="flex px-5 flex-col items-center justify-center h-[70vh] ">
        <div className=" md:w-fit w-full h-fit  border_secondary !border-2 p-5 rounded-lg">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              rules={{ required: "Username is required" }}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label="Username"
                  err={errors.username?.message}
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
              <div className="flex md:w-[300px] w-full md:flex-row flex-col  flex-wrap items-center justify-between gap-3">
                <LoginWithGoogle />
                <button
                  onClick={handleLinkedInLogin}
                  className="bg-blue-700 text-white md:w-[45%] w-full px-4 py-2 rounded-md"
                >
                  LinkedIn
                </button>
              </div>
            </div>
          </form>
          <CustomAlertMessage
            message={alertMassage.message}
            type={alertMassage.type}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
