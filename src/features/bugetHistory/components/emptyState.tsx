import { emptyState } from "../../../config/appData";

function EmptyState() {
  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg text-center text-gray-500">
      <p className="text-4xl mb-3">📋</p>
      <p className="text-lg font-medium">{emptyState.noBudgets}</p>
      <p className="text-sm mt-1">{emptyState.createBudgets}</p>
    </div>
  );
}

export default EmptyState;
