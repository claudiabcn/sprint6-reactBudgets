export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  return /^\d+$/.test(phone.trim());
};

export const getPhoneError = (phone: string): string => {
  if (!phone.trim()) return "Phone number is required";
  if (!validatePhone(phone)) return "Phone number must contain only digits";
  return "";
};

export const getEmailError = (email: string): string => {
  if (!email.trim()) return "Email is required";
  if (!validateEmail(email)) return "Please enter a valid email address";
  return "";
};

export const getBudgetNameError = (budgetName: string): string => {
  if (!budgetName.trim()) return "Budget name is required";
  return "";
};

export const getClientNameError = (clientName: string): string => {
  if (!clientName.trim()) return "Client name is required";
  return "";
};

export const validateBudgetForm = (
  budgetName: string,
  clientName: string,
  clientPhone: string,
  clientEmail: string,
  hasSelectedServices: boolean
): string | null => {
  const budgetNameError = getBudgetNameError(budgetName);
  if (budgetNameError) return budgetNameError;

  const clientNameError = getClientNameError(clientName);
  if (clientNameError) return clientNameError;

  const phoneError = getPhoneError(clientPhone);
  if (phoneError) return phoneError;

  const emailError = getEmailError(clientEmail);
  if (emailError) return emailError;

  if (!hasSelectedServices) {
    return "Please select at least one service";
  }

  return null;
};
