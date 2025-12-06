import { useState } from "react";
import { Service } from "../../config/types";
import { services as initialServices } from "../../config/appData";
import ServiceCard from "../../components/serviceCard";
import { calculateTotal } from "../budgetCalculator/calculateTotal";

function BudgetCalculator() {
  const [services, setServices] = useState<Service[]>(initialServices);

  const handleServiceChange = (id: number) => {
    setServices(
      services.map((service) =>
        service.id === id
          ? { ...service, selected: !service.selected }
          : service
      )
    );
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Budget Your Website Easily</h2>

      <div className="space-y-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onChange={handleServiceChange}
          />
        ))}
      </div>

      <div className="mt-6 p-4 border-t">
        <h3 className="text-xl font-semibold">
        Total Budget: {calculateTotal(services)}€
        </h3>
      </div>
    </div>
  );
}

export default BudgetCalculator;
