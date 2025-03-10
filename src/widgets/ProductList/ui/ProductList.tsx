"use client";
import { Title } from "@/shared/ui/Title/Title";
import s from "./ProductList.module.scss";
import { ProductCard } from "@/entities/ui/ProductCard/ProductCard";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/shared/store/categoryStore";
type ProductItem = {
  price: number;
};

type Product = {
  id: number;
  name: string;
  desc: string;
  image: string;
  items: ProductItem[];
};

type ProductListProps = {
  title: string;
  products: Product[];
  categoryId: number;
};

export const ProductList = ({
  products,
  title,
  categoryId,
}: ProductListProps) => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title, setActiveCategoryId]);

  return (
    <div id={title} ref={intersectionRef}>
      <Title Level="h3" size="lg" className={s.title}>
        {title}
      </Title>
      <div className={s.list}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            desc={product.desc}
            image={product.image}
            id={product.id}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
