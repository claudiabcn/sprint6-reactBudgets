import { useState } from "react";
import { Service } from "../../config/types";
import { services as initialServices } from "../../config/appData";

function BudgetCalculator() {
  const [services] = useState<Service[]>(initialServices);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Budget</h2>
    </div>
  );
}

export default BudgetCalculator;
