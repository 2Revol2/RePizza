import s from "./CartItemPrice.module.scss";
type CartItemPriceProps = {
  value: number;
};

export const CartItemPrice = ({ value }: CartItemPriceProps) => {
  return <h2 className={s.price}>{value} ₽</h2>;
};
