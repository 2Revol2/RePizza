import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";

/**
 * 
 * @param size - размеры пиццы
 * @param type - тип теста 
 * @param items - список вариаций
 * @param ingredients - ингредиенты
 * @param selectedIngredients - выбранные ингредиенты
 * @returns number сума выбраных ингредиентов и пиццы 
 */

export const calcTotalPizzaPrice = (
  size: PizzaSize,
  type: PizzaType,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.size === size && item.pizzaType === type)
      ?.price || 0;

  const selectedIngredientsPrice = ingredients
    .filter((item) => selectedIngredients.has(item.id))
    .reduce((acc, item) => {
      return (acc += item.price);
    }, 0);
    return pizzaPrice + selectedIngredientsPrice
};
