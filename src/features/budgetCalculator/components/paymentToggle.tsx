import { AnnualPaymentToggleProps } from "../../../config/types";

const AnnualPaymentToggle = ({
  isAnnualPayment,
  onToggle,
}: AnnualPaymentToggleProps) => {
  return (
    <div className="mb-6 p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Annual payment
          </h3>
          <p className="text-sm text-gray-600">
            Enable this option to get a{" "}
            <span className="font-semibold text-green-600">20% discount</span>{" "}
            on your budget.
          </p>
        </div>

        <button
          onClick={onToggle}
          className={`
            relative h-8 w-14 rounded-full transition-colors
            ${isAnnualPayment ? "bg-green-600" : "bg-gray-300"}
          `}
          role="switch"
          aria-checked={isAnnualPayment}
        >
          <span
            className={`
              absolute top-1 left-1 h-6 w-6 rounded-full bg-white 
              transition-transform duration-200
              ${isAnnualPayment ? "translate-x-6" : "translate-x-0"}
            `}
          />
        </button>
      </div>
    </div>
  );
};

export default AnnualPaymentToggle;
