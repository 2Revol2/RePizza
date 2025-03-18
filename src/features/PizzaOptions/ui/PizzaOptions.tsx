import classNames from "classnames";
import s from "./PizzaOptions.module.scss";
type Variants = {
  name: string;
  value: string;
  disabled?: boolean;
};

type PizzaOptionsProps = {
  options: Variants[];
  selectedValue: Variants["value"];
};

export const PizzaOptions = ({ options, selectedValue }: PizzaOptionsProps) => {
  return (
    <div className={s.options}>
      {options.map((item) => (
        <button
          className={classNames(
            selectedValue === item.value ? s.active : s.button
          )}
          disabled={item.disabled}
          key={item.name}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
