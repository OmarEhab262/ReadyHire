import PropTypes from "prop-types";
import CustomButton from "../../components/ui/CustomButton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const DeleteAccountModal = ({ isOpen, onClose, onConfirm }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleDelete = () => {
    onConfirm();
    toast.success("Account deleted successfully!");
    navigate("/goodbye");
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
      <div className="bg-white rounded-lg shadow-xl overflow-hidden sm:max-w-lg w-full z-20 m-3">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Delete Account</h3>
          <p className="text-sm text-gray-500 mt-2">
            Are you sure you want to delete your account? This action cannot be
            undone.
          </p>
        </div>
        <div className="bg-gray-50 px-4 py-3 flex justify-end space-x-3">
          <CustomButton
            text="Delete"
            type="button"
            height="40px"
            width="150px"
            onClick={handleDelete}
            className="!bg-red-600 text-white hover:bg-red-700"
          />
          <CustomButton
            className="!text-gray-700 !bg-gray-200 border-gray-300 hover:!bg-gray-300"
            text="Cancel"
            type="button"
            height="40px"
            width="150px"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

DeleteAccountModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
};

export default DeleteAccountModal;
