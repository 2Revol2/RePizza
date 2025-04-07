"use client";
import { ProductWithRelations } from "@/shared/types/ProductWithRelations";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../components/ChooseProductForm/ChooseProductForm";
import { ChoosePizzaForm } from "../components/ChoosePizzaForm/ChoosePizzaForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUserCartItem } from "@/shared/api/cart/api";
import toast from "react-hot-toast";

type ChooseProductModalProps = {
  product: ProductWithRelations;
};

export const ChooseProductModal = ({ product }: ChooseProductModalProps) => {
  const router = useRouter();
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
      router.back();
    } catch (error) {
      console.log(error);
      toast.error("Не удалось добавить товар в корзину");
    }
  };

  return (
    <Modal
      open={Boolean(product)}
      footer={null}
      centered
      className="modal"
      onCancel={() => router.back()}
      width={1000}
      style={{ padding: 0 }}
    >
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
    </Modal>
  );
};
