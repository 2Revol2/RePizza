"use client";
import { Category } from "@prisma/client";
import s from "./Categories.module.scss";
import { useCategoryStore } from "@/shared/store/categoryStore";


type CategoriesProps = {
  category: Category[];
};

export const Categories = ({ category }: CategoriesProps) => {
  const activeId = useCategoryStore((state) => state.activeId);

  return (
    <div className={s.categories}>
      {category.map((item, index) => (
        <a key={index} className={s.link} href={`/#${item.name}`}>
          <button className={activeId === item.id ? s.activeButton : s.button}>
            {item.name}
          </button>
        </a>
      ))}
    </div>
  );
};
