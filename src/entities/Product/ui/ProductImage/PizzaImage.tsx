import classNames from "classnames";
import s from './PizzaImage.module.scss'

type ProductImageProps = {
  size: 20 | 30 | 40;
  imageUrl: string;
  name: string;
};

export const PizzaImage = ({ size, imageUrl, name }: ProductImageProps) => {
  return (
    <div className={s.wrapper}>
      <img
        src={imageUrl}
        alt={name}
        className={classNames(s.image, {
          [s.small]: size === 20,
          [s.medium]: size === 30,
          [s.large]: size === 40,
        })}
      />
      <div className={s.dashed} />
      <div className={s.dotted} />
    </div>
  );
};
