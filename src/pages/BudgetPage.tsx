import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../features/budgetCalculator/components/serviceCard";
import BudgetSummary from "../features/budgetCalculator/budgetSummary";
import BudgetForm from "../features/budgetForm/budgetForm";
import AnnualPaymentToggle from "../features/budgetCalculator/components/Annualpaymenttoggle";
import { useBudgetServices } from "../features/budgetCalculator/hooks/useBudgetServices";
import { Budget } from "../config/types";
import BudgetHistory from "../features/bugetHistory/budgetHistory";

function BudgetCalculator() {
  const navigate = useNavigate();

  const {
    services,
    isAnnualPayment,
    toggleAnnualPayment,
    handleServiceChange,
    handlePagesChange,
    handleLanguagesChange,
  } = useBudgetServices();

  const [budgets, setBudgets] = useState<Budget[]>([]);

  const handleGoBack = () => {
    navigate("/");
  };

  const handleDeleteBudget = (id: string) => {
    if (window.confirm("Are you sure you want to delete this budget?")) {
      setBudgets(budgets.filter((budget) => budget.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="p-8 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handleGoBack}
            className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Return to Welcome Page
          </button>
          <h2 className="text-2xl font-bold">Budget</h2>
        </div>


        <AnnualPaymentToggle
          isAnnualPayment={isAnnualPayment}
          onToggle={toggleAnnualPayment}
        />

        <div className="space-y-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onChange={handleServiceChange}
              onPagesChange={
                service.id === "web" ? handlePagesChange : undefined
              }
              onLanguagesChange={
                service.id === "web" ? handleLanguagesChange : undefined
              }
            />
          ))}
        </div>

        <BudgetSummary services={services} isAnnualPayment={isAnnualPayment} />

        <BudgetForm
          services={services}
          budgets={budgets}
          setBudgets={setBudgets}
          isAnnualPayment={isAnnualPayment}
        />
        <BudgetHistory budgets={budgets} onDeleteBudget={handleDeleteBudget} />
      </div>
    </div>
  );
}

export default BudgetCalculator;
