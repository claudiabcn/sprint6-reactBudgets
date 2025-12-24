import { BudgetFormProps } from "../../config/types";
import { useBudgetForm } from "./hooks/useBudgetForm";
import FormInput from "./components/formInput";
import Button from "../../common/components/button";

function BudgetForm({ services, budgets, setBudgets, isAnnualPayment }: BudgetFormProps) {
  const {
    budgetName,
    setBudgetName,
    clientName,
    setClientName,
    clientPhone,
    setClientPhone,
    clientEmail,
    setClientEmail,
    handleSaveBudget,
  } = useBudgetForm(services, budgets, setBudgets, isAnnualPayment);

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Request budget</h3>

      <div className="space-y-4">
        <FormInput
          label="Budget name"
          type="text"
          value={budgetName}
          onChange={setBudgetName}
          placeholder="Ex: Project Web 2026"
        />

        <FormInput
          label="Client name"
          type="text"
          value={clientName}
          onChange={setClientName}
          placeholder="Ex: IT Academy"
        />

        <FormInput
          label="Phone"
          type="tel"
          value={clientPhone}
          onChange={setClientPhone}
          placeholder="Ex: 667854477"
        />

        <FormInput
          label="Email"
          type="email"
          value={clientEmail}
          onChange={setClientEmail}
          placeholder="Ex: claudiabcn@gmail.com"
        />

        <Button onClick={handleSaveBudget} fullWidth>
          Send request
        </Button>
      </div>
    </div>
  );
}

export default BudgetForm;