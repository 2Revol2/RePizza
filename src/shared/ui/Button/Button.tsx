import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonType?: "outline" | "default" | 'secondary';
  className?: string;
};

export default function Button({
  children,
  buttonType = "default",
  className,
  onClick
}: ButtonProps) {
  return <button onClick={onClick} className={classNames(className, s[buttonType])}>{children}</button>;
}