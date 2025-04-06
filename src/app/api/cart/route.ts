import { prisma } from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { findOrCreateCart } from "@/shared/lib/findOrCreateCart";
import { CreateCartItemValue } from "@/shared/types/CreateCartItemValue";
import { updateTotalCartPrice } from "@/shared/lib/updateTotalCartPrice";
export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

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
            productItem: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    });

    return NextResponse.json(userCart);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Cant get data" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get("cartToken")?.value;
    if (!token) {
      token = crypto.randomUUID();
    }
    const data = (await req.json()) as CreateCartItemValue;
    const userCart = await findOrCreateCart(token);
    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: data.productItemId,
        ingredients: { every: { id: { in: data.ingredients } } },
      },
    });

    // Если такой товар есть в корзине делаем +1
    if (findCartItem) {
      await prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },
        data: {
          quantity: findCartItem.quantity + 1,
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productItemId: data.productItemId,
          ingredients: {
            connect: data.ingredients?.map((ingredient) => ({
              id: ingredient,
            })),
          },
        },
      });
    }

    const updatedUserCart = updateTotalCartPrice(token);

    const response = NextResponse.json(updatedUserCart);
    response.cookies.set("cartToken", token);

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Cant post data" }, { status: 500 });
  }
}
