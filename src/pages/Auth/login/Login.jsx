import { Controller, useForm } from "react-hook-form";
import CustomInput from "../../../components/ui/CustomInput";
import LoginWithGoogle from "../../../components/utils/LoginWithGoogle";
import CustomAlertMessage from "../../../components/ui/CustomAlertMassage";
import CustomButton from "../../../components/ui/CustomButton";
import { useState } from "react";

const Login = () => {
  const [alertMassage, setAlertMessage] = useState({
    message: "",
    type: "",
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    setAlertMessage({ message: "Login successful", type: "error" });
  };

  const handleLinkedInLogin = () => {
    console.log("LinkedIn login clicked");
  };

  return (
    <div>
      <h1 className="text_primary bg_secondary">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              err={errors.password?.message}
            />
          )}
        />
        <CustomButton
          text="Login with Google"
          type="submit"
          width="180px"
          height="40px"
        />
      </form>

      <div className="mt-4">
        <LoginWithGoogle />
        <button
          onClick={handleLinkedInLogin}
          className="bg-blue-700 text-white px-4 py-2"
        >
          Login with LinkedIn
        </button>
      </div>
      <CustomAlertMessage
        message={alertMassage.message}
        type={alertMassage.type}
      />
    </div>
  );
};

export default Login;
