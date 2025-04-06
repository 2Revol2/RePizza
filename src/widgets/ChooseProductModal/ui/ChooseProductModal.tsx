"use client";
import { ProductWithRelations } from "@/shared/types/ProductWithRelations";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../components/ChooseProductForm/ChooseProductForm";
import { ChoosePizzaForm } from "../components/ChoosePizzaForm/ChoosePizzaForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUserCartItem } from "@/shared/api/cart/api";

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

  const addProductToCart = () => {
    addCartItem.mutate({ productItemId: firstProduct.id });
  };
  const addPizzaToCart = (productItemId: number, ingredients: number[]) => {
    addCartItem.mutate({ productItemId, ingredients });
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
        <ChoosePizzaForm product={product} addPizza={addPizzaToCart} />
      ) : (
        <ChooseProductForm product={product} addProduct={addProductToCart} />
      )}
    </Modal>
  );
};
