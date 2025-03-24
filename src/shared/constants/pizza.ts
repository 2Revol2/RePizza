export const mapPizzaSize = {
  20: "Маленькая",
  30: "Средняя",
  40: "Большая",
};

export const mapPizzaType = {
  1: "Традиционное",
  2: "Тонкое",
};

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
  name,
  value: Number(value),
}));

export const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
  name,
  value: Number(value),
}));

export type PizzaSize = keyof typeof mapPizzaSize;
export type PizzaType = keyof typeof mapPizzaType;
