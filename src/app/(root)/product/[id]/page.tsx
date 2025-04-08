import { prisma } from "@/prisma/prismaClient";
import Container from "@/shared/ui/Container/Container";
import { notFound } from "next/navigation";
import s from "./ProductPage.module.scss";
import { PizzaImage } from "@/entities/Product";
import { Title } from "@/shared/ui/Title/Title";

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
      items: true
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className={s.wrapper}>
      <div className={s.imageWrapper}>
        <PizzaImage imageUrl={product.imageUrl} size={30} name={product.name} />
      </div>
      <div className={s.info}>
        <Title size="md" Level="h4">
          {product.name}
        </Title>
        <p className={s.desc}>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </Container>
  );
}
