import { BudgetFormProps } from "../../config/types";
import { useBudgetForm } from "./hooks/useBudgetForm";
import FormInput from "./components/FormInput";
import Button from "../../common/components/button";
import {
  getBudgetNameError,
  getClientNameError,
  getPhoneError,
  getEmailError,
} from "./utils/validators";

function BudgetForm({
  services,
  budgets,
  setBudgets,
  isAnnualPayment,
}: BudgetFormProps) {
  const {
    budgetName,
    setBudgetName,
    clientName,
    setClientName,
    clientPhone,
    setClientPhone,
    clientEmail,
    setClientEmail,
    errors,
    setErrors,
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
          onChange={(val) => {
            setBudgetName(val);
            setErrors({ ...errors, budgetName: getBudgetNameError(val) });
          }}
          placeholder="Ex: Project Web 2026"
          error={errors.budgetName}
        />

        <FormInput
          label="Client name"
          type="text"
          value={clientName}
          onChange={(val) => {
            setClientName(val);
            setErrors({ ...errors, clientName: getClientNameError(val) });
          }}
          placeholder="Ex: IT Academy"
          error={errors.clientName}
        />

        <FormInput
          label="Phone"
          type="tel"
          value={clientPhone}
          onChange={(val) => {
            setClientPhone(val);
            setErrors({ ...errors, phone: getPhoneError(val) });
          }}
          placeholder="Ex: 667854477"
          error={errors.phone}
        />

        <FormInput
          label="Email"
          type="email"
          value={clientEmail}
          onChange={(val) => {
            setClientEmail(val);
            setErrors({ ...errors, email: getEmailError(val) });
          }}
          placeholder="Ex: claudiabcn@gmail.com"
          error={errors.email}
        />

        {errors.services && (
          <p className="text-sm text-red-600">{errors.services}</p>
        )}

        <Button onClick={handleSaveBudget} fullWidth>
          Send request
        </Button>
      </div>
    </div>
  );
}

export default BudgetForm;
