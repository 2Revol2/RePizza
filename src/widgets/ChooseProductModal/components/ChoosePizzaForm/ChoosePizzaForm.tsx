"use client";
import { ProductWithRelations } from "@/shared/types/ProductWithRelations";
import Button from "@/shared/ui/Button/Button";
import { Title } from "@/shared/ui/Title/Title";
import s from "./ChoosePizzaForm.module.scss";
import { PizzaImage } from "@/entities/Product";
import { PizzaOptions } from "@/features/PizzaOptions";
import {
  pizzaSizes,
  PizzaSize,
  pizzaTypes,
  PizzaType,
  mapPizzaType,
} from "@/shared/constants/pizza";
import { useEffect, useState } from "react";
import { Flex } from "antd";
import { IngredientCard } from "@/entities/Ingredient/ui/IngredientCard";
import { useSet } from "react-use";

type ChoosePizzaFormProps = {
  product: ProductWithRelations;
};
export const ChoosePizzaForm = ({ product }: ChoosePizzaFormProps) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedIngredients, { toggle: toogleSelectedIngredients }] = useSet(
    new Set<number>([])
  );

  const textDetails = `${size} см, ${mapPizzaType[type]} тесто пицца`;

  const pizzaPrice =
    product.items.find((item) => item.size === size && item.pizzaType === type)
      ?.price || 0;

  const selectedIngredientsPrice = product.ingredients
    .filter((item) => selectedIngredients.has(item.id))
    .reduce((acc, item) => {
      return (acc += item.price);
    }, 0);

  const totalPrice = pizzaPrice + selectedIngredientsPrice;

  const availablePizza = product.items.filter(
    (item) => item.pizzaType === type
  );
  const availablePizzaSizes = pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !availablePizza.some((pizza) => pizza.size === item.value)
  }));

  const handleAddToCart = () => {
    console.log({ size, type, selectedIngredients });
  };

  useEffect(()=>{
  const currentSize = availablePizzaSizes.find((item) => item.value === size && !item.disabled)
  const availableSize = availablePizzaSizes.find((item) => !item.disabled)

  if(!currentSize && availableSize) {
    setSize((availableSize.value) as PizzaSize)
  }
  }, [type])

  return (
    <div className={s.wrapper}>
      <div className={s.imageWrapper}>
        <PizzaImage
          size={size}
          imageUrl={product.imageUrl}
          name={product.name}
        />
      </div>
      <div className={s.info}>
        <Title size="sm" Level="h3">
          {product.name}
        </Title>

        <Flex vertical gap={10}>
          <p className={s.desc}>{textDetails}</p>

          <PizzaOptions
            options={availablePizzaSizes}
            value={size}
            setValue={(value) => setSize(value as PizzaSize)}
          />
          <PizzaOptions
            options={pizzaTypes}
            value={type}
            setValue={(value) => setType(value as PizzaType)}
          />

          <div className={s.ingredientsWrapper}>
            {product.ingredients.map((item) => (
              <IngredientCard
                key={item.id}
                ingredient={item}
                active={selectedIngredients.has(item.id)}
                onClick={() => toogleSelectedIngredients(item.id)}
              />
            ))}
          </div>

          <Button onClick={handleAddToCart} className={s.button}>
            Добавить в корзину {totalPrice} ₽
          </Button>
        </Flex>
      </div>
    </div>
  );
};
