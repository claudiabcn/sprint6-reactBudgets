import { useState } from 'react';
import { Service, Budget } from '../../../config/types';
import { calculateTotal } from '../../budgetCalculator/utils/calculateTotal';
import { validateBudgetForm } from '../utils/validators';

export function useBudgetForm(
  services: Service[],
  budgets: Budget[],
  setBudgets: (budgets: Budget[]) => void
) {
  const [budgetName, setBudgetName] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  const resetForm = () => {
    setBudgetName('');
    setClientName('');
    setClientPhone('');
    setClientEmail('');
  };

  const handleSaveBudget = () => {
    const hasSelectedServices = services.some(s => s.selected);
    
    const error = validateBudgetForm(
      budgetName,
      clientName,
      clientPhone,
      clientEmail,
      hasSelectedServices
    );

    if (error) {
      alert(error);
      return;
    }

    const newBudget: Budget = {
      id: Date.now().toString(),
      name: budgetName,
      client: clientName,
      phone: parseInt(clientPhone),
      email: clientEmail,
      services: services.filter(s => s.selected),
      total: calculateTotal(services),
      date: new Date()
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
    handleSaveBudget
  };
}