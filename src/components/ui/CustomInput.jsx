import { forwardRef } from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import PasswordIcon from "../icons/PasswordIcon";
import CloseEyesIcon from "../icons/CloseEyesIcon";

const CustomInput = forwardRef(
  (
    {
      setFormData,
      formData,
      label = "",
      width = "300px",
      err = "",
      placeholder = "",
      type = "text",
      name = "",
      disabled = false,
      classNameInput = "",
      classNameContainer = "",
      ...rest
    },
    ref
  ) => {
    const [inputType, setInputType] = useState(type);

    const handleChange = (e) => {
      const { name, value } = e.target;

      if (setFormData) {
        setFormData((prevState) => ({
          ...prevState,
          data: {
            ...prevState.data,
            [name]: value,
          },
          errors: {
            ...prevState.errors,
            [name]: err || "",
          },
        }));
      }
    };

    useEffect(() => {
      console.log("form Data ", formData);
    }, [formData]);

    return (
      <div
        className={`flex flex-col my-7 mx-2 relative ${classNameContainer}`}
        style={{ width }}
      >
        <label className="font-semibold text-sm mb-1 relative">
          {label}
          {type === "password" && (
            <div
              onClick={() =>
                setInputType(inputType === "password" ? "text" : "password")
              }
              aria-label={
                inputType === "password" ? "Show password" : "Hide password"
              }
              className="cursor-pointer ml-2 text-sm absolute right-2 top-[50px] transform -translate-y-1/2 rounded-full p-2"
            >
              {inputType === "password" ? <PasswordIcon /> : <CloseEyesIcon />}
            </div>
          )}
        </label>

        <input
          ref={ref} // Forward the ref here
          name={name}
          type={inputType}
          value={formData.data[name] || ""}
          placeholder={placeholder}
          onChange={handleChange}
          disabled={disabled}
          className={`border p-2 mt-2 rounded ${classNameInput} ${
            formData.errors[name] ? "border-red-500" : "border-gray-300"
          }`}
          {...rest} // Pass down other props from React Hook Form
        />

        {formData.errors[name] && (
          <small className="text-red-500 mt-1">{err}</small>
        )}
      </div>
    );
  }
);

// Add a display name to the component
CustomInput.displayName = "CustomInput";

CustomInput.propTypes = {
  label: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  err: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  setFormData: PropTypes.func,
  disabled: PropTypes.bool,
  formData: PropTypes.object,
  classNameInput: PropTypes.string,
  classNameContainer: PropTypes.string,
};

export default CustomInput;
