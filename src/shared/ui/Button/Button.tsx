import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./Button.module.scss";
import classNames from "classnames";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonType?: "outline" | "default" | "secondary";
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  buttonType = "default",
  className,
  loading,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={classNames(s.button, s[buttonType], className)}
    >
      {loading ? <Loader2 className={s.loader} /> : children}
    </button>
  );
}
