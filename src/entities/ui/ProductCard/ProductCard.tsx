import Link from "next/link";
import s from "./ProductCard.module.scss";
import { Flex } from "antd";
import { Title } from "@/shared/ui/Title/Title";
import Button from "@/shared/ui/Button/Button";
import { Plus } from "lucide-react";
import { Ingredient } from "@prisma/client";
interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
}

export const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
}: ProductCardProps) => {
  return (
    <article className={s.card}>
      <Link href={`/product/${id}}`}>
        <Flex justify="center" align="center" className={s.imageWrapper}>
          <img width={215} height={215} src={imageUrl} alt={name} />
        </Flex>
        <Flex vertical gap={10}>
          <Title Level="h4" size="sm">
            {name}
          </Title>
          <div className={s.desc}>
            {ingredients.map((item) => (
              <span key={item.id}>{item.name.toLocaleLowerCase()} </span>
            ))}
          </div>
          <Flex justify="space-between" align="center">
            <span className={s.price}>
              от <b>{price} ₽</b>
            </span>
            <Button buttonType="secondary">
              <Plus />
              <p> Добавить</p>
            </Button>
          </Flex>
        </Flex>
      </Link>
    </article>
  );
};
