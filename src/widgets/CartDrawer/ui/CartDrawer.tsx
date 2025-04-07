"use client";
import { useToogleDrawerStore } from "@/shared/store/toogleDrawerStore";
import s from "./CartDrawer.module.scss";
import { Drawer as AntdDrawer, Flex } from "antd";
import Link from "next/link";
import Button from "@/shared/ui/Button/Button";
import { ArrowRight } from "lucide-react";
import { CartItem } from "@/entities/CartItem";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteUserCartItem,
  updateUserCartItem,
} from "@/shared/api/cart/api";
import { getCartItemDetails } from "@/shared/lib/getCartItemDetails";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { NormalizedCartItem } from "@/shared/types/NormalizedCartItem";

type CartDrawerProps = {
   totalAmount?: number;
   items?: NormalizedCartItem[];
};

export const CartDrawer = ({ totalAmount, items }: CartDrawerProps) => {
  const { isActive, setIsActive } = useToogleDrawerStore();
  const queryClient = useQueryClient();

  const onClose = () => {
    setIsActive(!isActive);
  };

  const updateCartItemQuantity = useMutation({
    mutationFn: ({ id, quantity }: { id: number; quantity: number }) =>
      updateUserCartItem(id, quantity),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const deleteCartItem = useMutation({
    mutationFn: ({ id }: { id: number }) => deleteUserCartItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const handleUpdateCartItem = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateCartItemQuantity.mutate({ id, quantity: newQuantity });
  };

  const handleDeleteCartItem = (id: number) => {
    deleteCartItem.mutate({ id });
  };
  return (
    <AntdDrawer
      className={s.drawer}
      open={isActive}
      onClose={onClose}
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
