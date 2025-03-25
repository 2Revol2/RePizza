import s from "./IngredientCard.module.scss";
import { Ingredient } from "@prisma/client";
import classNames from "classnames";
import { CircleCheck } from "lucide-react";

type IngredientCardProps = {
  ingredient: Ingredient;
  active: boolean;
  onClick: () => void;
};

export const IngredientCard = ({
  ingredient,
  active,
  onClick,
}: IngredientCardProps) => {
  return (
    <article
      onClick={onClick}
      className={classNames(s.ingredient, { [s.active]: active })}
    >
      {active && <CircleCheck className={s.icon}/>}
      <img
        width={110}
        height={110}
        src={ingredient.imageUrl}
        alt={ingredient.name}
      />
      <h5 className={s.name}>{ingredient.name}</h5>
      <p>{ingredient.price} ₽</p>
    </article>
  );
};
