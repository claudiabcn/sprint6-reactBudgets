import { useState } from "react";
import { Service } from "../../../config/types";
import { services as initialServices } from "../../../config/appData";

export const useBudgetServices = () => {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [isAnnualPayment, setIsAnnualPayment] = useState(false);

  const toggleAnnualPayment = () => {
    setIsAnnualPayment(!isAnnualPayment);
  };

  const handleServiceChange = (id: string) => {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id === id
          ? { ...service, selected: !service.selected }
          : service
      )
    );
  };

  const handlePagesChange = (value: number) => {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id === "web" ? { ...service, pages: value } : service
      )
    );
  };

  const handleLanguagesChange = (value: number) => {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id === "web" ? { ...service, languages: value } : service
      )
    );
  };

  return {
    services,
    setServices,
    isAnnualPayment,
    setIsAnnualPayment,
    toggleAnnualPayment,
    handleServiceChange,
    handlePagesChange,
    handleLanguagesChange,
  };
};