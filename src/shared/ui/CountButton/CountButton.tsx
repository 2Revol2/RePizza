import { Minus, Plus } from "lucide-react";
import Button from "../Button/Button";
import s from "./CountButton.module.scss";
type CountButtonProps = {
  type: "plus" | "minus";
  onClick?: () => void;
};

export const CountButton = ({ type, onClick }: CountButtonProps) => {
  return (
    <Button className={s.button} onClick={onClick} buttonType="outline">
      {type === "plus" ? <Plus/> : <Minus />}
    </Button>
  );
};
