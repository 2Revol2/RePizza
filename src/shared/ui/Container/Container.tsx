import { ReactNode } from "react";
import s from "./Container.module.scss";
import classNames from "classnames";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
  return <div className={classNames(s.container, className)}>{children}</div>;
}
