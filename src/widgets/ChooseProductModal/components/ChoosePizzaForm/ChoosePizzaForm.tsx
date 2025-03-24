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
} from "@/shared/constants/pizza";
import { useState } from "react";
import { Flex } from "antd";

type ChoosePizzaFormProps = {
  product: ProductWithRelations;
};
export const ChoosePizzaForm = ({ product }: ChoosePizzaFormProps) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);

  const textDetails = "30 см, традиционное тесто 30, ";
  const totalPrice = 300;
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
            options={pizzaSizes}
            value={size}
            setValue={(value) => setSize(value as PizzaSize)}
          />
          <PizzaOptions
            options={pizzaTypes}
            value={type}
            setValue={(value) => setType(value as PizzaType)}
          />
        </Flex>

        <Button className={s.button}>Добавить в корзину {totalPrice} ₽</Button>
      </div>
    </div>
  );
};
