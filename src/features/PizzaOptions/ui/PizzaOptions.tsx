import classNames from "classnames";
import s from "./PizzaOptions.module.scss";
type Variants = {
  name: string;
  value: number;
  disabled?: boolean;
};

type PizzaOptionsProps = {
  options: Variants[];
  value: Variants["value"];
  setValue: (value: Variants['value']) => void
};

export const PizzaOptions = ({ options, setValue, value }: PizzaOptionsProps) => {
  return (
    <div className={s.options}>
      {options.map((item) => (
        <button
          className={classNames(
            value === item.value ? s.active : s.button
          )}
          onClick={()=> setValue(item.value)}
          disabled={item.disabled}
          key={item.name}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
