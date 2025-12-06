import ServiceCard from "./components/serviceCard";
import BudgetSummary from "../budgetCalculator/budgetSummary";
import { useBudgetServices } from "./hooks/useBudgetServices";

function BudgetCalculator() {
  const {
    services,
    handleServiceChange,
    handlePagesChange,
    handleLanguagesChange,
  } = useBudgetServices();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Budget</h2>

      <div className="space-y-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onChange={handleServiceChange}
            onPagesChange={service.id === "web" ? handlePagesChange : undefined}
            onLanguagesChange={
              service.id === "web" ? handleLanguagesChange : undefined
            }
          />
        ))}
      </div>

      <BudgetSummary services={services} />
    </div>
  );
}

export default BudgetCalculator;
