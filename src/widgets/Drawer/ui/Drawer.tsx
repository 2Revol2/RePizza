"use client";
import { useToogleDrawerStore } from "@/shared/store/toogleDrawerStore";
import s from "./Drawer.module.scss";
import { Drawer as AntdDrawer, Flex } from "antd";
import Link from "next/link";
import Button from "@/shared/ui/Button/Button";
import { ArrowRight } from "lucide-react";
import { CartItem } from "@/widgets/CartItem";

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
      <Flex vertical gap={10}>
        <CartItem
          imageUrl="https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp"
          details="капуста, 30 см, грибы"
          name="Сырная"
          price={400}
          quantity={5}
        />
      </Flex>
    </AntdDrawer>
  );
};
