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
    ref // 👈 تأكد من تمرير ref هنا
  ) => {
    const [inputType, setInputType] = useState(type);

    return (
      <div
        className={`flex flex-col my-7 ${classNameContainer}`}
        style={{ width }}
      >
        <label className="text-sm mb-1">
          <span
            className={`${
              err ? "text-red-500 font-bold" : "text-gray-500 font-medium"
            }`}
          >
            {label}
          </span>
          {err && <span className="text-red-500"> *</span>}
        </label>
        <div className="relative">
          <input
            ref={ref} // 👈 تمرير ref إلى الـ input
            name={name}
            type={inputType}
            placeholder={placeholder}
            disabled={disabled}
            style={{ width }}
            className={`border rounded ${classNameInput} ${
              err ? "border-red-500" : "border-gray-300"
            }`}
            {...rest}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={() =>
                setInputType(inputType === "password" ? "text" : "password")
              }
              aria-label={
                inputType === "password" ? "Show password" : "Hide password"
              }
              className="cursor-pointer ml-2 text-sm absolute right-2 top-3"
            >
              <div className="mt-1">
                {inputType === "password" ? (
                  <PasswordIcon />
                ) : (
                  <CloseEyesIcon />
                )}
              </div>
            </button>
          )}
        </div>

        {err && <small className="text-red-500 mt-1">{err}</small>}
      </div>
    );
  }
);

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
