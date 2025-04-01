import s from "./CartItemInfo.module.scss";
type CartItemInfoProps = {
  name: string;
  details: string;
};

export const CartItemInfo = ({ name, details }: CartItemInfoProps) => {
  return (
    <div>
      <h2 className={s.name}>{name}</h2>
      {details && <p className={s.details}>{details}</p>}
    </div>
  );
};
