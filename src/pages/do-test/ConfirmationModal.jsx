import PropTypes from "prop-types";
import CustomButton from "../../components/ui/CustomButton";
import { useNavigate } from "react-router-dom";

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  score,
  totalQuestions,
}) => {
  const navigate = useNavigate(); // ✅ استخدم useNavigate

  if (!isOpen) return null; // ✅ إخفاء المودال إذا لم يكن نشطًا

  const handleFinish = () => {
    onConfirm();
    navigate("/results", { state: { score, totalQuestions } }); // ✅ الانتقال إلى صفحة النتائج
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
      <div className="bg-white rounded-lg shadow-xl overflow-hidden sm:max-w-lg w-full z-20">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Confirmation</h3>
          <p className="text-sm text-gray-500 mt-2">
            Do you want to finish the test?
          </p>
        </div>
        <div className="bg-gray-50 px-4 py-3 flex justify-end space-x-3">
          <CustomButton
            text="Finish"
            type="button"
            height="40px"
            width="150px"
            onClick={handleFinish}
          />
          <CustomButton
            className="!text-[var(--secondary-color)] !bg-white border_secondary"
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

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  score: PropTypes.number,
  totalQuestions: PropTypes.number,
};

export default ConfirmationModal;
