import { calculateTotal } from "./utils/calculateTotal";
import { Service } from "../../config/types";
const BudgetSummary = ({ services }: { services: Service[] }) => {
  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-xl font-bold">
        Total price: {calculateTotal(services)}€
      </h3>
    </div>
  );
};

export default BudgetSummary;
