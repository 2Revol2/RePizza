"use client";
import { Divider, Flex, Skeleton } from "antd";
import s from "./Filters.module.scss";
import { Title } from "@/shared/ui/Title/Title";
import { useQuery } from "@tanstack/react-query";
import { getAllIngredients } from "@/shared/api/ingredients/api";
import { LIMIT } from "@/shared/constants/const";
import { CheckboxFilter } from "@/features/CheckboxFilter";
import { DOUGH_TYPE, PIZZA_SIZE } from "@/shared/constants/filters";
import { PriceFilter } from "@/features/PriceFilter";
import Button from "@/shared/ui/Button/Button";
import { useFiltersLogic } from "@/shared/hooks/useFiltersLogic";

export const Filters = () => {
  const {
    showAll,
    searchValue,
    doughType,
    size,
    ingredients,
    setSearchValue,
    resetFilters,
    setShowAll,
  } = useFiltersLogic();

  const { data, isLoading } = useQuery({
    queryKey: ["search"],
    queryFn: () => getAllIngredients(),
  });

  const list = showAll
    ? data?.filter((ingredient) =>
        ingredient.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : data?.slice(0, LIMIT);

  return (
    <div className={s.filters}>
      <Title size="sm" Level="h3">
        Фильтрация
      </Title>
      <Divider />

      {/* тип */}
      <Title size="xs" Level="h3">
        Тип теста:
      </Title>
      <CheckboxFilter
        items={DOUGH_TYPE}
        type="doughType"
        checkedValues={doughType}
      />
      <Divider />

      {/* размер */}
      <Title size="xs" Level="h3">
        Размер:
      </Title>
      <CheckboxFilter items={PIZZA_SIZE} type="size" checkedValues={size} />
      <Divider />

      {/* цена */}
      <Title size="xs" Level="h3">
        Цена от и до:
      </Title>
      <PriceFilter />
      <Divider />

      {/* Ингредиенты */}
      <Title size="xs" Level="h3">
        Ингредиенты:
      </Title>
      <Flex className={s.listWrapper} vertical gap={10}>
        {showAll && (
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Поиск..."
            className={s.input}
          />
        )}
        {isLoading ? (
          [...new Array(LIMIT)].map((_, index) => (
            <Skeleton.Input
              key={index}
              active
              style={{ width: "100%", height: "25px" }}
            />
          ))
        ) : (
          <CheckboxFilter
            items={
              list?.map((item) => ({ text: item.name, value: item.id })) || []
            }
            type="ingredients"
            checkedValues={ingredients}
          />
        )}
      </Flex>
      <button className={s.button} onClick={() => setShowAll(!showAll)}>
        {showAll ? "Скрыть" : "+ Показать всё"}
      </button>
      <Divider />
      <Flex justify="center" align="center">
        <Button buttonType="default" onClick={resetFilters}>
          Сбросить фильтры
        </Button>
      </Flex>
    </div>
  );
};
