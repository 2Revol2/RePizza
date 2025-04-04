import { Cart, CartItem, Ingredient, Product, ProductItem } from "@prisma/client";

export interface FullCart extends Cart {
  items: Array<
    CartItem & {
      product: ProductItem & {
        product: Product;
      };
      ingredients: Ingredient[];
    }
  >;
}
