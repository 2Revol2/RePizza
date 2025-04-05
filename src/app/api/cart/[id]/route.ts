import { prisma } from "@/prisma/prismaClient";
import { updateTotalCartPrice } from "@/shared/lib/updateTotalCartPrice";

import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const data = (await req.json()) as { quantity: number };
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "Cart token not found" });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!cartItem) {
      return NextResponse.json({ error: "Cart item not found" });
    }

    await prisma.cartItem.update({
      where: {
        id: Number(id),
      },
      data: {
        quantity: data.quantity,
      },
    });
    const updatedUserCart = await updateTotalCartPrice(token);

    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "Cart token not found" });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!cartItem) {
      return NextResponse.json({ error: "Cart item not found" });
    }

    await prisma.cartItem.delete({
      where: {
        id: Number(id),
      },
    });

    const updatedUserCart = await updateTotalCartPrice(token);

    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "Cant delete item" }, { status: 500 });
  }
}
