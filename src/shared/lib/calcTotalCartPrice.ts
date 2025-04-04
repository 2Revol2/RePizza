import { Ingredient } from "@prisma/client";

export const calcTotalCartPrice = (
  quantity: number,
  ingredients: Ingredient[],
  productPrice: number
) => {
  const ingredientsPrice = ingredients.reduce(
    (acc, item) => (acc += item.price),
    0
  );

  return (ingredientsPrice + productPrice) * quantity;
};
