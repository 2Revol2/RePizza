import { prisma } from "@/prisma/prismaClient";
import { productFilters } from "../types/productFilters";
import { MAX_PRICE_DEFAULT, MIN_PRICE_DEFAULT } from "../constants/const";

export const findProductByFilters = async (searchParams: productFilters) => {
  const size = searchParams.size?.split(",").map(Number);
  const pizzaType = searchParams.pizzaType?.split(",").map(Number);
  const ingredientsId = searchParams.ingredients?.split(",").map(Number);
  const minPrice = Number(searchParams.priceFrom) || MIN_PRICE_DEFAULT;
  const maxPrice = Number(searchParams.priceTo) || MAX_PRICE_DEFAULT;

  const categories = await prisma.category.findMany({
    include: {
      products: {
        orderBy: {
          id: "desc",
        },
        where: {
          ingredients: ingredientsId
            ? { some: { id: { in: ingredientsId } } }
            : undefined,
          items: {
            some: {
              size: { in: size },
              pizzaType: { in: pizzaType },
              price: { gte: minPrice, lte: maxPrice },
            },
          },
        },

        include: {
          ingredients: true,
          items: {
            where: { price: { gte: minPrice, lte: maxPrice } },
            orderBy: { price: "asc" },
          },
        },
      },
    },
  });

  return categories;
};
