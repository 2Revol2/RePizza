import { CountButton } from "@/shared/ui/CountButton/CountButton";
import { Flex } from "antd";

type CartCounterProps = {
  value: number;
  onClick?: (type: "plus" | "minus") => void;
};

export const CartCounter = ({ value, onClick }: CartCounterProps) => {
  return (
    <Flex align="center" gap={10}>
      <CountButton type="minus" onClick={() => onClick?.("minus")} />
      <b>{value}</b>
      <CountButton type="plus" onClick={() => onClick?.("plus")} />
    </Flex>
  );
};
