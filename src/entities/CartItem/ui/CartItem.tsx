import { CartItemImage } from "@/shared/ui/CartItemImage/CartItemImage";
import s from "./CartItem.module.scss";
import { Flex } from "antd";
import { CartItemInfo } from "@/shared/ui/CartItemInfo/CartItemInfo";
import { CartItemPrice } from "@/shared/ui/CartItemPrice/CartItemPrice";
import { Trash2Icon } from "lucide-react";
import { CartCounter } from "@/features/CartCounter";

type CartItemProps = {
  imageUrl: string;
  name: string;
  details: string;
  quantity: number;
  price: number;
  updateCartItemQuantity?: (type: "plus" | "minus") => void;
  handleDeleteCartItem?: () => void;
};

export const CartItem = ({
  imageUrl,
  name,
  details,
  quantity,
  price,
  updateCartItemQuantity,
  handleDeleteCartItem,
}: CartItemProps) => {
  return (
    <Flex gap={24} className={s.cartItem}>
      <CartItemImage src={imageUrl} alt={name} />

      <Flex vertical flex={1} gap={12}>
        <CartItemInfo name={name} details={details} />
        <div className={s.divider} />

        <Flex justify="space-between">
          <CartCounter onClick={updateCartItemQuantity} value={quantity} />

          <Flex align="center" gap={12}>
            <CartItemPrice value={price} />
            <Trash2Icon
              className={s.trashIcon}
              size={16}
              onClick={handleDeleteCartItem}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
