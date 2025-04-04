import { prisma } from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
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
          product: {
            include: {
              product: true,
            },
          },
          ingredients: true
        },
      },
    },
  });

  return NextResponse.json(userCart)
}
