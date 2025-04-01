"use client";
import { useToogleDrawerStore } from "@/shared/store/toogleDrawerStore";
import s from "./Drawer.module.scss";
import { Drawer as AntdDrawer, Flex } from "antd";
import Link from "next/link";
import Button from "@/shared/ui/Button/Button";
import { ArrowRight } from "lucide-react";
import { CartItemInfo } from "@/shared/ui/CartItemInfo/CartItemInfo";
import { CountButton } from "@/shared/ui/CountButton/CountButton";

export const Drawer = () => {
  const { isActive, setIsActive } = useToogleDrawerStore();

  const onClose = () => {
    setIsActive(!isActive);
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
      title="В корзине 4 товара"
    >
      <CartItemInfo name="Сырная" details="Сыр, овощи" />
      
      <Flex align="center" gap={10}>
        <CountButton type="minus" />
        <b>1</b>
        <CountButton type="plus" />
      </Flex>
    </AntdDrawer>
  );
};
