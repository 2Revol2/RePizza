import { prisma } from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
  const ingredient = await prisma.ingredient.findMany();

  return NextResponse.json(ingredient);
}
