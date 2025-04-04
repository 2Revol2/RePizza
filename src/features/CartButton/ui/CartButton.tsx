"use client";
import Button from "@/shared/ui/Button/Button";
import s from "./CartButton.module.scss";
import { Flex } from "antd";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useToogleDrawerStore } from "@/shared/store/toogleDrawerStore";


export const CartButton = () => {
  const toogleDrawer = useToogleDrawerStore((state) => state.setIsActive);

  return (
    <>
      <div onClick={() => toogleDrawer(true)}>
        <Button className={s.button}>
          <b>520 ₽</b>
          <span className={s.divider} />
          <Flex className={s.cart} align="center" gap={8}>
            <ShoppingCart strokeWidth={2} height={20} width={20} />
            <b>3</b>
          </Flex>
          <ArrowRight width={20} className={s.arrowRight} />
        </Button>
      </div>
    </>
  );
};
