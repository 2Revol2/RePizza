import { prisma } from "@/prisma/prismaClient";
import { calcTotalCartPrice } from "./calcTotalCartPrice";

export const updateTotalCartPrice = async (token: string) => {
  const userCart = await prisma.cart.findFirst({
    where: {
      token,
    },
    include: {
      items: {
        orderBy: {
          createAt: "desc",
        },
        include: {
          product: {
            include: {
              product: true,
            },
          },
          ingredients: true,
        },
      },
    },
  });
  if (!userCart) {
    return 0;
  }

  const totalAmount = userCart?.items.reduce((acc, item) => {
    return (acc += calcTotalCartPrice(
      item.quantity,
      item.ingredients,
      item.product.price
    ));
  }, 0);

 return await prisma.cart.update({
    where: {
      id: userCart.id,
    },
    data: {
      totalAmount,
    },
    include: {
      items: {
        orderBy: {
          createAt: "desc",
        },
        include: {
          product: {
            include: {
              product: true,
            },
          },
          ingredients: true,
        },
      },
    },
  });
};
