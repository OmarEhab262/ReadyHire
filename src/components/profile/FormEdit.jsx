import { Controller, useForm } from "react-hook-form";
import CustomInput from "../ui/CustomInput";
import PropTypes from "prop-types";
import CustomButton from "../ui/CustomButton";

const FormEdit = ({ label, open, onClose }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div
      className={`z-40 backdrop-blur-md  p-6 rounded-lg shadow-lg  w-full h-full ${
        open ? "fixed" : "hidden"
      }`}
    >
      <div className="flex flex-col h-full items-center justify-center ">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-[40px] font-semibold mb-4">Edit Profile</h2>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name={label}
              control={control}
              defaultValue=""
              rules={{ required: `${label} is required` }}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label={label}
                  err={errors[label]?.message}
                  width="100%"
                />
              )}
            />
            <div className="flex items-center gap-3 mt-4 justify-between">
              <CustomButton
                type="button"
                className="bg_danger"
                width="120px"
                text="Cancel"
                onClick={onClose}
              />
              <CustomButton
                type="button"
                className="bg_success "
                width="120px"
                text="Save Changes"
                onClick={onClose}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
FormEdit.propTypes = {
  label: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default FormEdit;
