import { useState } from "react";
import { Service, Budget } from "../../../config/types";
import { calculateTotal } from "../../budgetCalculator/utils/calculateTotal";
import {
  getBudgetNameError,
  getClientNameError,
  getPhoneError,
  getEmailError,
} from "../utils/validators";

export function useBudgetForm(
  services: Service[],
  budgets: Budget[],
  setBudgets: (budgets: Budget[]) => void,
  isAnnualPayment: boolean
) {
  const [budgetName, setBudgetName] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [errors, setErrors] = useState({
    budgetName: "",
    clientName: "",
    phone: "",
    email: "",
    services: "",
  });

  const resetForm = () => {
    setBudgetName("");
    setClientName("");
    setClientPhone("");
    setClientEmail("");
    setErrors({
      budgetName: "",
      clientName: "",
      phone: "",
      email: "",
      services: "",
    });
  };

  const handleSaveBudget = () => {
    const hasSelectedServices = services.some((s) => s.selected);

    const newErrors = {
      budgetName: getBudgetNameError(budgetName),
      clientName: getClientNameError(clientName),
      phone: getPhoneError(clientPhone),
      email: getEmailError(clientEmail),
      services: hasSelectedServices ? "" : "Please select at least one service",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      return;
    }

    const newBudget: Budget = {
      id: Date.now().toString(),
      name: budgetName,
      client: clientName,
      phone: parseInt(clientPhone),
      email: clientEmail,
      services: services.filter((s) => s.selected),
      total: calculateTotal(services, isAnnualPayment),
      date: new Date(),
      isAnnualPayment: isAnnualPayment,
    };

    setBudgets([...budgets, newBudget]);
    resetForm();
  };

  return {
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
  };
}
