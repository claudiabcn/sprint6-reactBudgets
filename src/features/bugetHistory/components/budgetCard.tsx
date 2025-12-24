import { Budget } from "../../../config/types";
import { formatDate, formatPrice } from "../utils/formatters";

interface BudgetCardProps {
  budget: Budget;
  onDelete?: (id: string) => void;
}

function BudgetCard({ budget, onDelete }: BudgetCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-900 mb-1">
            {budget.name}
          </h4>
          <div className="space-y-1">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Client:</span> {budget.client}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Phone:</span> {budget.phone}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Email:</span> {budget.email}
            </p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-blue-600">
            {formatPrice(budget.total)}
            
          </span>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">
          Services Included:
        </p>
        <ul className="space-y-2">
          {budget.services.map((service) => (
            <li
              key={service.id}
              className="flex items-start text-sm text-gray-600"
            >
              <span>{service.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center border-t border-gray-200 pt-4">
        <p className="text-xs text-gray-500">{formatDate(budget.date)}</p>
        {onDelete && (
          <button
            onClick={() => onDelete(budget.id)}
            className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default BudgetCard;
