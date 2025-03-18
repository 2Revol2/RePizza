"use client";
import { Title } from "@/shared/ui/Title/Title";
import s from "./ProductList.module.scss";
import { ProductCard } from "@/entities/Product";
import { useEffect } from "react";
import { useCategoryStore } from "@/shared/store/categoryStore";
import { useInView } from "react-intersection-observer";
import { ProductWithRelations } from "@/shared/types/ProductWithRelations";

type ProductListProps = {
  title: string;
  products: ProductWithRelations[];
  categoryId: number;
};

export const ProductList = ({
  products,
  title,
  categoryId,
}: ProductListProps) => {
  const setActiveCAtegoryId = useCategoryStore((state) => state.setActiveId);
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (inView) {
      setActiveCAtegoryId(categoryId);
    }
  }, [inView, categoryId, title]);

  return (
    <section id={title} ref={ref}>
      <Title Level="h3" size="lg" className={s.title}>
        {title}
      </Title>
      <div className={s.list}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            id={product.id}
            imageUrl={product.imageUrl}
            ingredients={product.ingredients}
            price={product.items[0].price}
          />
        ))}
      </div>
    </section>
  );
};
