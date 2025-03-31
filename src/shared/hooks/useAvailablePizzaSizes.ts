import { Dispatch, SetStateAction, useEffect } from "react";
import { PizzaSize, pizzaSizes, PizzaType } from "../constants/pizza";
import { ProductItem } from "@prisma/client";

export const useAvailablePizzaSizes = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  setSize: Dispatch<SetStateAction<20 | 30 | 40>>
) => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);
  const availablePizzaSizes = pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some((pizza) => pizza.size === item.value),
  }));

  useEffect(() => {
    const currentSize = availablePizzaSizes.find(
      (item) => item.value === size && !item.disabled
    );
    const availableSize = availablePizzaSizes.find((item) => !item.disabled);

    if (!currentSize && availableSize) {
      setSize(availableSize.value as PizzaSize);
    }
  }, [type]);

  return availablePizzaSizes;
};
