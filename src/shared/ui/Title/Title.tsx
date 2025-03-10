import s from "./Title.module.scss";
import classNames from "classnames";
import { JSX, ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  className?: string;
  Level: keyof JSX.IntrinsicElements;
  size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
};

export const Title = ({ children, className, Level, size }: TitleProps) => {
  return (
    <Level className={classNames(s.title, className, s[size])}>
      {children}
    </Level>
  );
};
