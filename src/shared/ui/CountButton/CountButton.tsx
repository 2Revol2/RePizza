import { Minus, Plus } from "lucide-react";
import Button from "../Button/Button";
import s from "./CountButton.module.scss";
type CountButtonProps = {
  type: "plus" | "minus";
  disabled?: boolean;
  onClick?: () => void;
};

export const CountButton = ({ type, disabled, onClick }: CountButtonProps) => {
  return (
    <Button
      disabled={disabled}
      className={s.button}
      onClick={onClick}
      buttonType="outline"
    >
      {type === "plus" ? <Plus /> : <Minus />}
    </Button>
  );
};
