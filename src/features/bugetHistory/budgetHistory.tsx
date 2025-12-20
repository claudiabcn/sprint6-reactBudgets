import { Budget } from "../../config/types";
import BudgetCard from "./components/budgetCard";
import EmptyState from "./components/emptyState";

interface BudgetHistoryProps {
  budgets: Budget[];
  onDeleteBudget?: (id: string) => void;
}

function BudgetHistory({ budgets, onDeleteBudget }: BudgetHistoryProps) {
  if (budgets.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800">History of Budgets</h3>
        <span className="text-sm text-gray-600">
          {budgets.length}{" "}
          {budgets.length === 1 ? "presupuesto" : "presupuestos"}
        </span>
      </div>

      <div className="space-y-4">
        {budgets.map((budget) => (
          <BudgetCard
            key={budget.id}
            budget={budget}
            onDelete={onDeleteBudget}
          />
        ))}
      </div>
    </div>
  );
}

export default BudgetHistory;
