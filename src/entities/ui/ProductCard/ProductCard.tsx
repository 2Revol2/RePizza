import Link from "next/link";
import s from "./ProductCard.module.scss";
import { Flex } from "antd";
import { Title } from "@/shared/ui/Title/Title";
import Button from "@/shared/ui/Button/Button";
import { Plus } from "lucide-react";
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  desc: string;
};

// type ProductCardProps = {
//   product: Product;
// };

export const ProductCard = ({ id, name, price, image, desc }: Product) => {
  return (
    <div className={s.card}>
      <Link href={`/product/${id}}`}>
        <Flex justify="center" align="center" className={s.imageWrapper}>
          <img width={215} height={215} src={image} alt={name} />
        </Flex>
        <Title Level="h4" size="sm">
          {name}
        </Title>
        <p className={s.desc}>{desc}</p>
        <Flex justify="space-between" align="center">
          <span className={s.price}>
            от <b>{price} ₽</b>
          </span>
          <Button type="secondary">
            <Plus />
            Добавить
          </Button>
        </Flex>
      </Link>
    </div>
  );
};
