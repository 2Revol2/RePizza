import s from "./CartItemImage.module.scss";

type CartItemImageProps = {
  alt: string;
  src: string;
};

export const CartItemImage = ({ src, alt }: CartItemImageProps) => {
  return <img width={35} height={35} className={s.image} src={src} alt={alt} />;
};
