import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import CustomAlertMessage from "../../components/ui/CustomAlertMassage";
import CustomButton from "../../components/ui/CustomButton";
import CustomInput from "../../components/ui/CustomInput";
import apiRequest from "../../utils/apiRequest";
import DeleteAccountModal from "./DeleteAccountModal";

const AccountSettings = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.token;
  console.log("token:", token);

  const navigate = useNavigate();

  const [alertMessage, setAlertMessage] = useState({
    message: "",
    type: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const validateFields = () => {
    let newErrors = { email: "", newPassword: "", confirmPassword: "" };
    let isValid = true;

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!newPassword) {
      newErrors.newPassword = "New password is required";
      isValid = false;
    } else if (newPassword.length < 6) {
      newErrors.newPassword = "New password must be at least 6 characters";
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
      isValid = false;
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const payload = {
    email,
    token,
    newPassword,
    confirmPassword,
  };

  const handleChangePassword = async () => {
    if (!validateFields()) return;

    try {
      const response = await apiRequest(
        "Authentication/ResetPassword",
        "POST",
        payload
      );
      console.log("Response:", response);
      navigate("/");
      setAlertMessage({
        message: "Password changed successfully!",
        type: "success",
      });
      toast.success("Password changed successfully!");

      setEmail("");
      setNewPassword("");
      setConfirmPassword("");
      setErrors({ email: "", newPassword: "", confirmPassword: "" });

      // optional: navigate if needed
      // navigate("/verification-success");
    } catch (error) {
      setAlertMessage({
        message:
          error.response?.data?.message || "Password reset failed. Try again.",
        type: "error",
      });
    }
  };

  const handleDeleteAccount = () => {
    setIsModalOpen(true);
  };

  const confirmDeleteAccount = () => {
    toast.success("Account deleted successfully!");
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <div className="flex justify-center items-center p-5">
        <div className="w-full max-w-2xl md:w-[90%] md:mx-auto p-6 md:p-8 bg-white rounded-2xl shadow-xl mt-10 border border-gray-300 mb-5">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Account Settings
          </h2>

          <CustomInput
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            width="100%"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            err={errors.email}
          />

          <CustomInput
            label="New Password"
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            width="100%"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            err={errors.newPassword}
          />

          <CustomInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            width="100%"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            err={errors.confirmPassword}
          />

          <CustomButton onClick={handleChangePassword} text="Change Password" />

          <button
            onClick={handleDeleteAccount}
            className="w-full mt-4 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-all shadow-md"
          >
            Delete My Account
          </button>
        </div>
      </div>

      <DeleteAccountModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDeleteAccount}
      />

      <CustomAlertMessage
        message={alertMessage.message}
        type={alertMessage.type}
      />
    </Layout>
  );
};

export default AccountSettings;
