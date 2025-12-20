export const formatDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatPrice = (price: number): string => {
  return `${price.toFixed(2)}€`;
};
