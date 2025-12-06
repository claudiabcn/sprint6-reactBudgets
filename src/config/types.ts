export interface Service {
  id: number;
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
}
