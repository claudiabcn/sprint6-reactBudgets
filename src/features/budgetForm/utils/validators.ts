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
    return 'Por favor completa el nombre del presupuesto y el cliente';
  }

  if (!clientPhone.trim() || !clientEmail.trim()) {
    return 'Por favor completa el teléfono y el email';
  }

  if (!validateEmail(clientEmail)) {
    return 'Por favor ingresa un email válido';
  }

  if (!hasSelectedServices) {
    return 'Por favor selecciona al menos un servicio';
  }

  return null;
};