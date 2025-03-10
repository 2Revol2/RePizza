import { ChangeEventHandler } from "react";
import s from "./Input.module.scss";

type InputProps = {
  min: number;
  max: number;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
export const Input = ({
  min,
  max,
  value,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <input
      onChange={onChange}
      min={min}
      max={max}
      placeholder={placeholder}
      className={s.input}
      type="number"
      value={value}
    />
  );
};
