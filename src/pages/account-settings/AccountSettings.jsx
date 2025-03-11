import { useState } from "react";
import { toast } from "react-hot-toast";
import Layout from "../../components/layout/Layout";
import CustomButton from "../../components/ui/CustomButton";
import DeleteAccountModal from "./DeleteAccountModal";
import CustomInput from "../../components/ui/CustomInput";

const AccountSettings = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const validatePassword = () => {
    let newErrors = { oldPassword: "", newPassword: "", confirmPassword: "" };
    let isValid = true;

    if (!oldPassword) {
      newErrors.oldPassword = "Old password is required";
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

  const handleChangePassword = () => {
    if (!validatePassword()) return;
    toast.success("Password changed successfully!");
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setErrors({ oldPassword: "", newPassword: "", confirmPassword: "" });
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
            label="Old Password"
            type="password"
            name="oldPassword"
            placeholder="Enter old password"
            width="100%"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            err={errors.oldPassword}
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
    </Layout>
  );
};

export default AccountSettings;
