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
}

export interface BudgetFormProps {
  services: Service[];
  budgets: Budget[];
  setBudgets: (budgets: Budget[]) => void;
}

export interface FormInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}