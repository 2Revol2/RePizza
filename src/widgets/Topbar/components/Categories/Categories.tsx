"use client";
import s from "./Categories.module.scss";
import { useCategoryStore } from "@/shared/store/categoryStore";

const category = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Коктели" },
  { id: 5, name: "Кофе" },
  { id: 6, name: "Напитки" },
  { id: 7, name: "Десерты" },
];

export const Categories = () => {
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
