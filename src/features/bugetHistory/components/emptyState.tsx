import { emptyState } from "../../../config/appData";

function EmptyState() {
  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg text-center text-gray-500">
      <svg
        className="mx-auto h-12 w-12 text-gray-400 mb-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      <p className="text-lg font-medium"> {emptyState.noBudgets}</p>
      <p className="text-sm mt-1">{emptyState.createBudgets} </p>
    </div>
  );
}

export default EmptyState;
