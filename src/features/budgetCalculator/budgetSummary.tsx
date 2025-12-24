import { calculateTotal } from "./utils/calculateTotal";
import { Service } from "../../config/types";

interface BudgetSummaryProps {
  services: Service[];
  isAnnualPayment: boolean;
}

const BudgetSummary = ({ services, isAnnualPayment }: BudgetSummaryProps) => {
  const totalWithoutDiscount = calculateTotal(services, false);
  const totalWithDiscount = calculateTotal(services, isAnnualPayment);
  const discount = totalWithoutDiscount - totalWithDiscount;

  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
      {isAnnualPayment && discount > 0 && (
        <div className="mb-3 p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-green-800 font-semibold">
              Annual discount applied! (20%)
            </span>
          </div>
          <div className="text-sm text-green-700">
            <p className="line-through">
              Original price: {totalWithoutDiscount}€
            </p>
            <p className="font-semibold text-green-800">
              Save: {discount.toFixed(2)}€
            </p>
          </div>
        </div>
      )}

      <h3 className="text-xl font-bold">Total price: {totalWithDiscount}€</h3>
      {isAnnualPayment && (
        <p className="text-sm text-gray-600 mt-1">
          Annual payment applied with 20% discount.
        </p>
      )}
    </div>
  );
};

export default BudgetSummary;
