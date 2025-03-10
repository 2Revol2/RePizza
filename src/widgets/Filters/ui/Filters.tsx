"use client";

import { Checkbox, Divider, Flex, Slider } from "antd";
import s from "./Filters.module.scss";
import { Title } from "@/shared/ui/Title/Title";
import { Input } from "@/shared/ui/Input/Input";
import { useState } from "react";

const Ingredients = [
  {
    text: "Сырный соус",
    value: 1,
  },
  {
    text: "Моцарелла",
    value: 2,
  },
  {
    text: "Чеснок",
    value: 3,
  },
  {
    text: "Солённые огурчики",
    value: 4,
  },
  {
    text: "Красный лук",
    value: 5,
  },
  {
    text: "Томаты",
    value: 6,
  },
];

export const Filters = () => {
  const limit = 6;
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const list = showAll
    ? Ingredients.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : Ingredients.slice(0, limit);

  const onChangeSearchInput = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className={s.filters}>
      {/* верх */}
      <Title size="sm" Level="h3">
        Фильтрация
      </Title>
      <Flex style={{ marginTop: 30 }} gap={10} vertical>
        <Checkbox>Можно собирать</Checkbox>
        <Checkbox>Новинки</Checkbox>
      </Flex>
      <Divider />

      {/* цена */}
      <Title size="xs" Level="h3">
        Цена от и до:
      </Title>
      <Flex style={{ marginTop: 15 }} gap={15}>
        <Input min={0} max={1000} placeholder="0" />
        <Input min={100} max={1000} placeholder="1000" />
      </Flex>
      <Slider range defaultValue={[0, 1000]} min={0} max={1000} step={10} />
      <Divider />

      {/* Ингредиенты */}
      <Title size="xs" Level="h3">
        Ингредиенты:
      </Title>
      <Flex className={s.listWrapper} vertical gap={10}>
        {showAll && (
          <input
            onChange={(e) => onChangeSearchInput(e.target.value)}
            type="text"
            placeholder="Поиск..."
            className={s.input}
          />
        )}
        {list.map((item, index) => (
          <Checkbox key={index}>{item.text} </Checkbox>
        ))}
      </Flex>
      <button className={s.button} onClick={() => setShowAll(!showAll)}>
        {showAll ? "Скрыть" : "+ Показать всё"}
      </button>
      <Divider />
    </div>
  );
};
