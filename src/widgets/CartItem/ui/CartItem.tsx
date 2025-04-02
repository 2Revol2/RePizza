import { CartItemImage } from "@/shared/ui/CartItemImage/CartItemImage";
import s from "./CartItem.module.scss";

import { Flex } from "antd";
import { CartItemInfo } from "@/shared/ui/CartItemInfo/CartItemInfo";
import { CountButton } from "@/shared/ui/CountButton/CountButton";
import { CartItemPrice } from "@/shared/ui/CartItemPrice/CartItemPrice";
import { Trash2Icon } from "lucide-react";

type CartItemProps = {
  imageUrl: string;
  name: string;
  details: string;
  quantity: number;
  price: number;
};

export const CartItem = ({
  imageUrl,
  name,
  details,
  quantity,
  price,
}: CartItemProps) => {
  return (
    <Flex
      gap={24}
      className={s.cartItem}
    >
      <CartItemImage src={imageUrl} alt={name} />

      <Flex vertical flex={1} gap={12}>
        <CartItemInfo name={name} details={details} />
        <div className={s.divider}/>

        <Flex justify="space-between">
          <Flex align="center" gap={10}>
            <CountButton type="minus" />
            <p>{quantity}</p>
            <CountButton type="plus" />
          </Flex>

          <Flex align="center" gap={12}>
            <CartItemPrice value={price} />
            <Trash2Icon className={s.trashIcon} size={16} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
