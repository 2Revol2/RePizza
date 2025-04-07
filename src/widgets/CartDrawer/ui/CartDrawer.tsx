"use client";
import { useToogleDrawerStore } from "@/shared/store/toogleDrawerStore";
import s from "./CartDrawer.module.scss";
import { Drawer as AntdDrawer, Flex } from "antd";
import Link from "next/link";
import Button from "@/shared/ui/Button/Button";
import { ArrowRight } from "lucide-react";
import { CartItem } from "@/entities/CartItem";
import { getCartItemDetails } from "@/shared/lib/getCartItemDetails";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { NormalizedCartItem } from "@/shared/types/NormalizedCartItem";
import { useUpdateCartItemQuantity } from "@/shared/hooks/useUpdateCartItemQuantity";
import { useDeleteCartItem } from "@/shared/hooks/useDeleteCartItem";

type CartDrawerProps = {
  totalAmount?: number;
  items?: NormalizedCartItem[];
};

export const CartDrawer = ({ totalAmount, items }: CartDrawerProps) => {
  const { isActive, setIsActive } = useToogleDrawerStore();

  const handleUpdateCartItem = useUpdateCartItemQuantity();
  const handleDeleteCartItem = useDeleteCartItem();

  return (
    <AntdDrawer
      className={s.drawer}
      open={isActive}
      onClose={() => setIsActive(!isActive)}
      footer={
        <div className={s.footer}>
          <div className={s.priceWrapper}>
            <div className={s.price}>
              <span>Итого</span>
              <div className={s.divider} />
            </div>
            <span>{totalAmount} ₽</span>
          </div>
          <Link href={"/cart"} className={s.button}>
            <Button className={s.button}>
              Оформить заказ
              <ArrowRight />
            </Button>
          </Link>
        </div>
      }
      title={`В корзине ${items?.length} товара`}
    >
      <Flex vertical gap={10}>
        {items?.map((item) => (
          <CartItem
            key={item.id}
            imageUrl={item.imageUrl}
            details={getCartItemDetails(
              item.ingredients,
              item.pizzaType as PizzaType,
              item.pizzaSize as PizzaSize
            )}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            updateCartItemQuantity={(type) =>
              handleUpdateCartItem(item.id, item.quantity, type)
            }
            handleDeleteCartItem={() => handleDeleteCartItem(item.id)}
          />
        ))}
      </Flex>
    </AntdDrawer>
  );
};
