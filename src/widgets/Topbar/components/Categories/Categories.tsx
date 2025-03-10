"use client";

import { useState } from "react";
import s from "./Categories.module.scss";
const carygory = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктели",
  "Кофе",
  "Напитки",
  "Десерты",
];

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <div className={s.categories}>
      {carygory.map((item, index) => (
        <a key={index} className={s.link}>
          <button
            onClick={() => setActiveCategory(index)}
            className={activeCategory === index ? s.activeButton : s.button}
          >
            {item}
          </button>
        </a>
      ))}
    </div>
  );
};
