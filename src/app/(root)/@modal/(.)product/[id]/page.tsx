import { prisma } from "@/prisma/prismaClient";
import { ChooseProductModal } from "@/widgets/ChooseProductModal/ui/ChooseProductModal";
import { notFound } from "next/navigation";
export default async function Modal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
}
