import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../features/budgetCalculator/components/serviceCard";
import BudgetSummary from "../features/budgetCalculator/budgetSummary";
import BudgetForm from "../features/budgetForm/budgetForm";
import AnnualPaymentToggle from "../features/budgetCalculator/components/paymentToggle";
import ShareButton from "../features/budgetCalculator/components/shareButton";
import { useBudgetServices } from "../features/budgetCalculator/hooks/useBudgetServices";
import { useUrlSync } from "../features/budgetCalculator/hooks/useUrlSync";
import { Budget } from "../config/types";
import BudgetHistory from "../features/bugetHistory/budgetHistory";

function BudgetCalculator() {
  const navigate = useNavigate();

  const {
    services,
    setServices,
    isAnnualPayment,
    setIsAnnualPayment,
    toggleAnnualPayment,
    handleServiceChange,
    handlePagesChange,
    handleLanguagesChange,
  } = useBudgetServices();

  const { getShareableUrl } = useUrlSync(
    services,
    isAnnualPayment,
    setServices,
    setIsAnnualPayment
  );

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
            className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
          >
            ← Return to Welcome Page
          </button>

          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Budget</h2>
            <ShareButton getShareableUrl={getShareableUrl} />
          </div>
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
