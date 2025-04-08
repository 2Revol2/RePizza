import { prisma } from "@/prisma/prismaClient";
import Container from "@/shared/ui/Container/Container";
import { notFound } from "next/navigation";
import s from "./ProductPage.module.scss";
import { ChooseProduct } from "@/widgets/ChooseProduct";

export default async function ProductPage({
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
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className={s.wrapper}>
      <ChooseProduct product={product} />
    </Container>
  );
}
