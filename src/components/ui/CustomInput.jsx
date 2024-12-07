import { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import PasswordIcon from "../icons/PasswordIcon";
import CloseEyesIcon from "../icons/CloseEyesIcon";

const CustomInput = forwardRef(
  (
    {
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
          placeholder={placeholder}
          disabled={disabled}
          className={`border p-2 mt-2 rounded ${classNameInput} ${
            err ? "border-red-500" : "border-gray-300"
          }`}
          {...rest} // Pass down other props from React Hook Form
        />

        {err && <small className="text-red-500 mt-1">{err}</small>}
      </div>
    );
  }
);

// Add a display name to the component
CustomInput.displayName = "CustomInput";

CustomInput.propTypes = {
  label: PropTypes.string,
  width: PropTypes.string,
  err: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  classNameInput: PropTypes.string,
  classNameContainer: PropTypes.string,
};

export default CustomInput;
