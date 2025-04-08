import { ProductWithRelations } from "@/shared/types/ProductWithRelations";
import Button from "@/shared/ui/Button/Button";
import { Title } from "@/shared/ui/Title/Title";
import s from "./ChoosePizzaForm.module.scss";
import { PizzaImage } from "@/entities/Product";
import { PizzaOptions } from "@/features/PizzaOptions";
import {
  PizzaSize,
  pizzaTypes,
  PizzaType,
  mapPizzaType,
} from "@/shared/constants/pizza";
import { useState } from "react";
import { Flex } from "antd";
import { IngredientCard } from "@/entities/Ingredient/ui/IngredientCard";
import { useSet } from "react-use";
import { calcTotalPizzaPrice } from "@/shared/lib/calcTotalPizzaPrice";
import { useAvailablePizzaSizes } from "@/shared/hooks/useAvailablePizzaSizes";

type ChoosePizzaFormProps = {
  product: ProductWithRelations;
  addPizza: (productId: number, ingredients?: number[]) => void;
  loading?: boolean;
};
export const ChoosePizzaForm = ({
  product,
  addPizza,
  loading,
}: ChoosePizzaFormProps) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);

  const currentItem = product.items.find(
    (item) => item.size === size && item.pizzaType === type
  )?.id;

  const [selectedIngredients, { toggle: toogleSelectedIngredients }] = useSet(
    new Set<number>([])
  );

  const textDetails = `${size} см, ${mapPizzaType[type]} тесто пицца`;

  const totalPrice = calcTotalPizzaPrice(
    size,
    type,
    product.items,
    product.ingredients,
    selectedIngredients
  );

  const availablePizzaSizes = useAvailablePizzaSizes(
    type,
    size,
    product.items,
    setSize
  );

  const handleAddToCart = () => {
    if (currentItem) {
      addPizza(currentItem, Array.from(selectedIngredients));
    }
  };

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

          <Button loading={loading} onClick={handleAddToCart} className={s.button}>
            Добавить в корзину {totalPrice} ₽
          </Button>
        </Flex>
      </div>
    </div>
  );
};
