import { HelpModalProps } from "../../../config/types";
import { helpModalContent } from "../../../config/appData";

function HelpModal({ isOpen, onClose }: HelpModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />

      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 z-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">
            {helpModalContent.title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              {helpModalContent.pages.title}
            </h4>
            <p className="text-gray-600 text-sm">
              {helpModalContent.pages.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              {helpModalContent.languages.title}
            </h4>
            <p className="text-gray-600 text-sm">
              {helpModalContent.languages.description}
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-800">
              <strong>{helpModalContent.additionalCost}</strong>{" "}
              {helpModalContent.formula}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelpModal;
