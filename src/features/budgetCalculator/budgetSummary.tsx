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
          <p className="text-green-800 font-semibold mb-1">
            ✓ Annual discount applied! (20%)
          </p>
          <p className="text-sm text-green-700 line-through">
            Original price: {totalWithoutDiscount}€
          </p>
          <p className="text-sm font-semibold text-green-800">
            You save: {discount.toFixed(2)}€
          </p>
        </div>
      )}

      <h3 className="text-xl font-bold">Total price: {totalWithDiscount}€</h3>
      {isAnnualPayment && (
        <p className="text-sm text-gray-600 mt-1">
          Annual payment with 20% discount
        </p>
      )}
    </div>
  );
};

export default BudgetSummary;