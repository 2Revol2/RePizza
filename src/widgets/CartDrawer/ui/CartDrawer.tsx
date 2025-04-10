"use client";
import { useToogleDrawerStore } from "@/shared/store/toogleDrawerStore";
import s from "./CartDrawer.module.scss";
import { Drawer as AntdDrawer, Flex } from "antd";
import Link from "next/link";
import Button from "@/shared/ui/Button/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CartItem } from "@/entities/CartItem";
import { getCartItemDetails } from "@/shared/lib/getCartItemDetails";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { NormalizedCartItem } from "@/shared/types/NormalizedCartItem";
import { useUpdateCartItemQuantity } from "@/shared/hooks/useUpdateCartItemQuantity";
import { useDeleteCartItem } from "@/shared/hooks/useDeleteCartItem";
import Image from "next/image";
import { Title } from "@/shared/ui/Title/Title";

type CartDrawerProps = {
  totalAmount?: number;
  items?: NormalizedCartItem[];
};

export const CartDrawer = ({ totalAmount, items }: CartDrawerProps) => {
  const { isActive, setIsActive } = useToogleDrawerStore();
  const isNotEmptyCart = totalAmount ? true : false
  const { handleUpdateCartItem, loading: updateLoading } =
    useUpdateCartItemQuantity();
  const { handleDeleteCartItem, loading: deleteLoading } = useDeleteCartItem();


  return (
    <AntdDrawer
      className={s.drawer}
      open={isActive}
      onClose={() => setIsActive(!isActive)}
      footer={
        isNotEmptyCart && (
          <div className={s.footer}>
            <div className={s.priceWrapper}>
              <div className={s.price}>
                <span>Итого</span>
                <div className={s.divider} />
              </div>
              <span>{totalAmount} ₽</span>
            </div>
            <Link href={"/cart"} className={s.button}>
              <Button
                disabled={updateLoading || deleteLoading}
                loading={updateLoading || deleteLoading}
                className={s.button}
              >
                Оформить заказ
                <ArrowRight />
              </Button>
            </Link>
          </div>
        )
      }
      title={isNotEmptyCart  && `В корзине ${items?.length} товара`}
    >
      {!isNotEmptyCart && (
        <Flex align="center" vertical justify="center" style={{height: '90%'}}>
          <Image
            src={"/assets/empty-box.png"}
            width={120}
            height={120}
            alt="Empty cart"
          />
          <Title size="sm" Level="h3">
            Корзина пустая
          </Title>
          <p className={s.emptyCartInfo}>Добавьте хотябы один продукт, чтобы совершить заказ</p>
          <Button onClick={()=> setIsActive(false)}>
            <ArrowLeft />
            Вернуться назад
          </Button>
        </Flex>
      )}

      {isNotEmptyCart && (
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
      )}
    </AntdDrawer>
  );
};
