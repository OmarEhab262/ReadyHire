import { Controller, useForm } from "react-hook-form";
import CustomInput from "../../../components/ui/CustomInput";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };
  return (
    <div>
      <h1 className="text_success">Login</h1>
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
              formData={{
                data: { username: field.value },
                errors: { username: errors.username?.message },
              }}
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
              formData={{
                data: { password: field.value },
                errors: { password: errors.password?.message },
              }}
            />
          )}
        />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
