export interface Service {
  id: string;
  name: string;
  price: number;
  selected: boolean;
  description: string;
  pages?: number;
  languages?: number;
}

export interface ServiceCardProps {
  service: Service;
  onChange: (id: string) => void;
  onPagesChange?: (value: number) => void;
  onLanguagesChange?: (value: number) => void;
}

export interface Budget {
  id: string;
  name: string;
  phone: number;
  email: string;
  client: string;
  services: Service[];
  total: number;
  date: Date;
  isAnnualPayment: boolean;
}

export interface BudgetFormProps {
  services: Service[];
  budgets: Budget[];
  setBudgets: (budgets: Budget[]) => void;
  isAnnualPayment: boolean;
}

export interface FormInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
}

export interface BudgetSummaryProps {
  services: Service[];
  isAnnualPayment: boolean;
}

export interface BudgetHistoryProps {
  budgets: Budget[];
  onDeleteBudget?: (id: string) => void;
}

export interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export interface AnnualPaymentToggleProps {
  isAnnualPayment: boolean;
  onToggle: () => void;
}
export interface ShareButtonProps {
  getShareableUrl: () => string;
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  fullWidth?: boolean;
}
