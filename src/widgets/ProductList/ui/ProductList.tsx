"use client";
import { Title } from "@/shared/ui/Title/Title";
import s from "./ProductList.module.scss";
import { ProductCard } from "@/entities/ui/ProductCard/ProductCard";
import { useEffect } from "react";
import { useCategoryStore } from "@/shared/store/categoryStore";
import { useInView } from "react-intersection-observer";
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

  const setActiveCAtegoryId = useCategoryStore((state) => state.setActiveId);
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      setActiveCAtegoryId(categoryId);
    }
  }, [inView]);
  
  return (
    <div id={title} ref={ref}>
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
