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
            relative inline-flex h-12 w-24 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
            transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            ${isAnnualPayment ? "bg-green-600" : "bg-gray-300"}
          `}
          role="switch"
          aria-checked={isAnnualPayment}
        >
          <span className="sr-only">Enable annual payment</span>
          <span
            className={`
              pointer-events-none inline-block h-11 w-11 transform rounded-full bg-white shadow ring-0 
              transition duration-200 ease-in-out
              ${isAnnualPayment ? "translate-x-12" : "translate-x-0"}
            `}
          >
            <span
              className={`
                absolute inset-0 flex h-full w-full items-center justify-center transition-opacity
                ${
                  isAnnualPayment
                    ? "opacity-0 duration-100"
                    : "opacity-100 duration-200"
                }
              `}
            >
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
            <span
              className={`
                absolute inset-0 flex h-full w-full items-center justify-center transition-opacity
                ${
                  isAnnualPayment
                    ? "opacity-100 duration-200"
                    : "opacity-0 duration-100"
                }
              `}
            >
              <svg
                className="h-5 w-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default AnnualPaymentToggle;
