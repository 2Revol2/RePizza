import { ProductWithRelations } from "@/shared/types/ProductWithRelations";
import s from "./ChooseProductForm.module.scss";
import { Title } from "@/shared/ui/Title/Title";
import Button from "@/shared/ui/Button/Button";
type ChooseProductFormProps = {
  product: ProductWithRelations;
  price: number
  addProduct?: () => void;
  loading?: boolean
};

export const ChooseProductForm = ({
  product,
  price,
  loading,
  addProduct,
}: ChooseProductFormProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.imageWrapper}>
        <img
          height={300}
          width={300}
          className={s.image}
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className={s.info}>
        <Title size="sm" Level="h3">
          {product.name}
        </Title>

        <Button loading={loading} onClick={() => addProduct?.()} className={s.button}>
          Добавить в корзину {price} ₽
        </Button>
      </div>
    </div>
  );
};
