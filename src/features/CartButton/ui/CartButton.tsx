"use client";
import Button from "@/shared/ui/Button/Button";
import s from "./CartButton.module.scss";
import { Flex } from "antd";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useToogleDrawerStore } from "@/shared/store/toogleDrawerStore";
import { CartDrawer } from "@/widgets/CartDrawer";
import { useQuery } from "@tanstack/react-query";
import { getUserCart } from "@/shared/api/cart/api";
import { calcTotalCartPrice } from "@/shared/lib/calcTotalCartPrice";

export const CartButton = () => {
  const toogleDrawer = useToogleDrawerStore((state) => state.setIsActive);
  
  const { data: cartData, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getUserCart(),
    select: (DataFromServer) => {
      return {
        totalAmout: DataFromServer.totalAmount,
        items: DataFromServer.items.map((item) => ({
          id: item.id,
          quantity: item.quantity,
          name: item.productItem.product.name,
          imageUrl: item.productItem.product.imageUrl,
          price: calcTotalCartPrice(
            item.quantity,
            item.ingredients,
            item.productItem.price
          ),
          disabled: false,
          pizzaSize: item.productItem.size,
          pizzaType: item.productItem.pizzaType,
          ingredients: item.ingredients.map((item) => ({
            name: item.name,
            price: item.price,
          })),
        })),
      };
    },
  });

  return (
    <>
      <div onClick={() => toogleDrawer(true)}>
        <Button loading={isLoading} className={s.button}>
          <b>{cartData?.totalAmout} ₽</b>
          <span className={s.divider} />
          <Flex className={s.cart} align="center" gap={8}>
            <ShoppingCart strokeWidth={2} height={20} width={20} />
            <b>{cartData?.items.length}</b>
          </Flex>
          <ArrowRight width={20} className={s.arrowRight} />
        </Button>
      </div>
      {/* Нарушаем принципы FSD, но я считаю что лучше сделать 1 запрос на сервер в одном месте, чем 2 одинаковых запроса в разных местах*/}
      <CartDrawer totalAmount={cartData?.totalAmout} items={cartData?.items} />
    </>
  );
};
