import { Service } from "../../../config/types";

const PAGE_PRICE = 30;
const LANGUAGE_PRICE = 30;

export function calculateTotal(
  services: Service[],
  discountPercent: number = 0
): number {
  let total = 0;

  services.forEach((service) => {
    if (service.selected) {
      total += service.price;

      if (service.id === "web" && service.pages && service.languages) {
        total += service.pages * PAGE_PRICE;
        total += service.languages * LANGUAGE_PRICE;
      }
    }
  });

  if (discountPercent > 0) {
    total = total * (1 - discountPercent / 100);
  }

  return total;
}
