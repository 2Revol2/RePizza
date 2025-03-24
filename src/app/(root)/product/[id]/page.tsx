import { prisma } from "@/prisma/prismaClient";
import Container from "@/shared/ui/Container/Container";
import { notFound } from "next/navigation";
import s from "./ProductPage.module.scss";
import { ProductImage } from "@/entities/Product";
import { Title } from "@/shared/ui/Title/Title";
import { PizzaOptions } from "@/features/PizzaOptions";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });
  if (!product) {
    return notFound();
  }

  return (
    <Container className={s.wrapper}>
      <div className={s.imageWrapper}>
        <ProductImage
          imageUrl={product.imageUrl}
          size={30}
          name={product.name}
        />
      </div>
      <div className={s.info}>
        <Title size="md" Level="h4">
          {product.name}
        </Title>
        <p className={s.desc}>Lorem ipsum dolor sit amet consectetur.</p>
        <PizzaOptions
          options={[
            { value: "20", name: "Маленькая" },
            { value: "30", name: "Средняя" },
            { value: "40", name: "Большая", disabled: true },
          ]}
          selectedValue={"30"}
        />
      </div>
    </Container>
  );
}
