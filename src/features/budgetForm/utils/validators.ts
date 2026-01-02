export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  return /^\d+$/.test(phone.trim());
};

export const validateBudgetForm = (
  budgetName: string,
  clientName: string,
  clientPhone: string,
  clientEmail: string,
  hasSelectedServices: boolean
): string | null => {
  if (!budgetName.trim() || !clientName.trim()) {
    return "Please complete the budget name and client name";
  }

  if (!clientPhone.trim() || !clientEmail.trim()) {
    return "Please complete the phone number and email";
  }

  if (!validatePhone(clientPhone)) {
    return "Please enter a valid phone number";
  }

  if (!validateEmail(clientEmail)) {
    return "Please enter a valid email address";
  }

  if (!hasSelectedServices) {
    return "Please select at least one service";
  }

  return null;
};
