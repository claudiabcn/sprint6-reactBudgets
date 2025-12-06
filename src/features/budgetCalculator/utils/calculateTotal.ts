import { Service } from "../../../config/types";

export function calculateTotal(services: Service[]): number {
  let total = 0;

  services.forEach((service) => {
    if (service.selected) {
      total += service.price;

      if (service.id === "web" && service.pages && service.languages) {
        total += (service.pages + service.languages) * 30;
      }
    }
  });

  return total;
}
