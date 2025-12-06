export interface Service {
  id: string;
  name: string;
  price: number;
  selected: boolean;
  description: string;
  pages?: number;   
  languages?: number;
}

