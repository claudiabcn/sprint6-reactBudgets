export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateBudgetForm = (
  budgetName: string,
  clientName: string,
  clientPhone: string,
  clientEmail: string,
  hasSelectedServices: boolean
): string | null => {
  if (!budgetName.trim() || !clientName.trim()) {
    return 'Please complete the budget name and client name';
  }

  if (!clientPhone.trim() || !clientEmail.trim()) {
    return 'Please complete the phone number and email';
  }

  if (!validateEmail(clientEmail)) {
    return 'Please enter a valid email address';
  }

  if (!hasSelectedServices) {
    return 'Please select at least one service';
  }

  return null;
};