import { ReactNode } from "react";
import s from "./Button.module.scss";
import classNames from "classnames";

type ButtonProps = {
  children: ReactNode;
  type?: "login" | "default" | 'secondary';
  className?: string;
};

export default function Button({
  children,
  type = "default",
  className,
}: ButtonProps) {
  return <button className={classNames(className, s[type])}>{children}</button>;
}