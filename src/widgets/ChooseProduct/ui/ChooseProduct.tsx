"use client";

import { addUserCartItem } from "@/shared/api/cart/api";
import { ProductWithRelations } from "@/shared/types/ProductWithRelations";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ChoosePizzaForm } from "../components/ChoosePizzaForm/ChoosePizzaForm";
import { ChooseProductForm } from "../components/ChooseProductForm/ChooseProductForm";

type ChooseProductProps = {
  product: ProductWithRelations;
  onSubmit?: () => void;
};
// Компонент рисуется и в модалке и на самой странице продукта
export const ChooseProduct = ({ product, onSubmit }: ChooseProductProps) => {
  const queryClient = useQueryClient();
  const firstProduct = product.items[0];
  const isPizzaForm = Boolean(firstProduct.pizzaType);

  const addCartItem = useMutation({
    mutationFn: ({
      productItemId,
      ingredients,
    }: {
      productItemId: number;
      ingredients?: number[];
    }) => addUserCartItem({ productItemId, ingredients }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const addProduct = (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstProduct.id;
      addCartItem.mutate({ productItemId: itemId, ingredients });
      toast.success("Товар добавлен в корзину");
      onSubmit?.();
    } catch (error) {
      console.log(error);
      toast.error("Не удалось добавить товар в корзину");
    }
  };

  return (
    <div>
      {isPizzaForm ? (
        <ChoosePizzaForm
          product={product}
          addPizza={addProduct}
          loading={addCartItem.isPending}
        />
      ) : (
        <ChooseProductForm
          product={product}
          price={firstProduct.price}
          addProduct={addProduct}
          loading={addCartItem.isPending}
        />
      )}
    </div>
  );
};
