import { useState, useEffect } from "react";
import BudgetCard from "./components/budgetCard";
import EmptyState from "./components/emptyState";
import { BudgetHistoryProps } from "../../config/types";

type SortType = "none" | "alphabetical" | "date";
type SortDirection = "asc" | "desc";

function BudgetHistory({ budgets, onDeleteBudget }: BudgetHistoryProps) {
  const [sortedBudgets, setSortedBudgets] = useState(budgets);
  const [currentSort, setCurrentSort] = useState<SortType>("none");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSortedBudgets(budgets);
    setCurrentSort("none");
  }, [budgets]);

  const getFilteredBudgets = () => {
    if (!searchTerm.trim()) {
      return sortedBudgets;
    }
    return sortedBudgets.filter((budget) =>
      budget.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const sortAlphabetically = () => {
    if (currentSort === "alphabetical") {
      const newDirection = sortDirection === "asc" ? "desc" : "asc";
      setSortDirection(newDirection);

      const sorted = [...budgets].sort((a, b) =>
        newDirection === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
      setSortedBudgets(sorted);
    } else {
      setCurrentSort("alphabetical");
      setSortDirection("asc");

      const sorted = [...budgets].sort((a, b) => a.name.localeCompare(b.name));
      setSortedBudgets(sorted);
    }
  };

  const sortByDate = () => {
    if (currentSort === "date") {
      const newDirection = sortDirection === "asc" ? "desc" : "asc";
      setSortDirection(newDirection);

      const sorted = [...budgets].sort((a, b) =>
        newDirection === "asc"
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setSortedBudgets(sorted);
    } else {
      setCurrentSort("date");
      setSortDirection("desc");

      const sorted = [...budgets].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setSortedBudgets(sorted);
    }
  };

  const resetOrder = () => {
    setSortedBudgets([...budgets]);
    setCurrentSort("none");
    setSortDirection("asc");
  };

  if (budgets.length === 0) {
    return <EmptyState />;
  }

  const filteredBudgets = getFilteredBudgets();

  return (
    <div className="mt-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold text-gray-800">
              History of Budgets
            </h3>
          </div>

          <div className="flex gap-2">
            <button
              onClick={sortAlphabetically}
              className={`px-4 py-2 font-semibold rounded-md transition-colors text-sm ${
                currentSort === "alphabetical"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
              }`}
            >
              🔤 A-Z{" "}
              {currentSort === "alphabetical" &&
                (sortDirection === "asc" ? "↑" : "↓")}
            </button>

            <button
              onClick={sortByDate}
              className={`px-4 py-2 font-semibold rounded-md transition-colors text-sm ${
                currentSort === "date"
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-green-100 text-green-700 hover:bg-green-200"
              }`}
            >
              📅 Date{" "}
              {currentSort === "date" && (sortDirection === "asc" ? "↑" : "↓")}
            </button>

            <button
              onClick={resetOrder}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-md transition-colors text-sm"
            >
              🔄 Reset
            </button>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="🔍Search budgets by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {filteredBudgets.length === 0 ? (
        <div className="p-6 bg-gray-50 rounded-lg text-center text-gray-500">
          No budgets found matching "{searchTerm}"
        </div>
      ) : (
        <div className="space-y-4">
          {filteredBudgets.map((budget) => (
            <BudgetCard
              key={budget.id}
              budget={budget}
              onDelete={onDeleteBudget}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BudgetHistory;
