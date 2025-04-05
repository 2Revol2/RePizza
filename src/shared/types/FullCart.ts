import { Cart, CartItem, Ingredient, Product, ProductItem } from "@prisma/client";

export interface FullCart extends Cart {
  items: Array<
    CartItem & {
      productItem: ProductItem & {
        product: Product;
      };
      ingredients: Ingredient[];
    }
  >;
}
