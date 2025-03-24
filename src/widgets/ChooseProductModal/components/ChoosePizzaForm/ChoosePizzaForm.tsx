import { ProductWithRelations } from "@/shared/types/ProductWithRelations";
import Button from "@/shared/ui/Button/Button";
import { Title } from "@/shared/ui/Title/Title";
import s from "./ChoosePizzaForm.module.scss";
import { PizzaImage } from "@/entities/Product";
import { PizzaOptions } from "@/features/PizzaOptions";
type ChoosePizzaFormProps = {
  product: ProductWithRelations;
};

export const ChoosePizzaForm = ({ product }: ChoosePizzaFormProps) => {
  const textDetails = "30 см, традиционное тесто 30, ";
  const totalPrice = 300;
  return (
    <div className={s.wrapper}>
      <div className={s.imageWrapper}>
        <PizzaImage size={30} imageUrl={product.imageUrl} name={product.name} />
      </div>
      <div className={s.info}>
        <Title size="sm" Level="h3">
          {product.name}
        </Title>
        <p className={s.desc}>{textDetails}</p>
        <PizzaOptions
          options={[
            { value: "20", name: "Маленькая" },
            { value: "30", name: "Средняя" },
            { value: "40", name: "Большая", disabled: true },
          ]}
          selectedValue={"30"}
        />
            <PizzaOptions
          options={[
            { value: "1", name: "Традиционное" },
            { value: "2", name: "Тонкое" },
          ]}
          selectedValue={"1"}
        />
        <Button className={s.button}>Добавить в корзину {totalPrice} ₽</Button>
      </div>
    </div>
  );
};
