"use client";
import { useToogleDrawerStore } from "@/shared/store/toogleDrawerStore";
import s from "./CartDrawer.module.scss";
import { Drawer as AntdDrawer, Flex } from "antd";
import Link from "next/link";
import Button from "@/shared/ui/Button/Button";
import { ArrowRight } from "lucide-react";
import { CartItem } from "@/entities/CartItem";
import { useQuery } from "@tanstack/react-query";
import { getUserCart } from "@/shared/api/cart/api";
import { calcTotalCartPrice } from "@/shared/lib/calcTotalCartPrice";
import { getCartItemDetails } from "@/shared/lib/getCartItemDetails";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";

export const CartDrawer = () => {
  const { isActive, setIsActive } = useToogleDrawerStore();

  const onClose = () => {
    setIsActive(!isActive);
  };

  const { data: cartData } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getUserCart(),
    select: (DataFromServer) => {
      return DataFromServer.items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        name: item.product.product.name,
        imageUrl: item.product.product.imageUrl,
        price: calcTotalCartPrice(
          item.quantity,
          item.ingredients,
          item.product.price
        ),
        disabled: false,
        pizzaSize: item.product.size,
        pizzaType: item.product.pizzaType,
        ingredients: item.ingredients.map((item) => ({
          name: item.name,
          price: item.price,
        })),
      }));
    },
  });

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
            <span>400 ₽</span>
          </div>
          <Link href={"/cart"} className={s.button}>
            <Button className={s.button}>
              Оформить заказ
              <ArrowRight />
            </Button>
          </Link>
        </div>
      }
      title={`В корзине ${cartData?.length} товара`}
    >
      <Flex vertical gap={10}>
        {cartData?.map((item) => (
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
          />
        ))}
      </Flex>
    </AntdDrawer>
  );
};
