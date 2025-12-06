import { useState } from "react";
import { Service } from "../../config/types";
import { services as initialServices } from "../../config/appData";
import ServiceCard from "../../components/serviceCard";

function BudgetCalculator() {
  const [services, setServices] = useState<Service[]>(initialServices);

  const handleServiceChange = (id: string) => {
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
    </div>
  );
}

export default BudgetCalculator;
