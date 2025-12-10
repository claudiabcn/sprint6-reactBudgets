import { useState } from "react";
import { Budget, BudgetFormProps } from "../../config/types";
import { calculateTotal } from "../budgetCalculator/utils/calculateTotal";

function BudgetForm({ services, budgets, setBudgets }: BudgetFormProps) {
  const [budgetName, setBudgetName] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  const handleSaveBudget = () => {
    if (!budgetName.trim() || !clientName.trim()) {
      alert("Please complete the budget name and client name");
      return;
    }

    if (!clientPhone.trim() || !clientEmail.trim()) {
      alert("Please complete the client phone and email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(clientEmail)) {
      alert("Please enter a valid email address");
      return;
    }

    const hasSelectedServices = services.some((s) => s.selected);
    if (!hasSelectedServices) {
      alert("Please select at least one service");
      return;
    }

    const newBudget: Budget = {
      id: Date.now().toString(),
      name: budgetName,
      client: clientName,
      phone: parseInt(clientPhone),
      email: clientEmail,
      services: services.filter((s) => s.selected),
      total: calculateTotal(services),
      date: new Date(),
    };

    setBudgets([...budgets, newBudget]);

    setBudgetName("");
    setClientName("");
    setClientPhone("");
    setClientEmail("");
  };

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Request Budget</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            value={budgetName}
            onChange={(e) => setBudgetName(e.target.value)}
            placeholder="Ej: Project Web 2026"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Client
          </label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Ex: IT Academy"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
            placeholder="Ex: 667854477"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            placeholder="Ex: claudiabcn@gmail.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleSaveBudget}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default BudgetForm;
