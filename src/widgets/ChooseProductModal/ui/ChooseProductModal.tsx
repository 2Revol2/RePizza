"use client";

import { ProductWithRelations } from "@/shared/types/ProductWithRelations";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../components/ChooseProductForm/ChooseProductForm";
import { ChoosePizzaForm } from "../components/ChoosePizzaForm/ChoosePizzaForm";

type ChooseProductModalProps = {
  product: ProductWithRelations;
};

export const ChooseProductModal = ({ product }: ChooseProductModalProps) => {
  const router = useRouter();
  
  const isPizzaForm = Boolean(product.items[0].pizzaType)

  return (
    <Modal
      open={Boolean(product)}
      footer={null}
      centered
      onCancel={() => router.back()}
      width={1000}
      style={{padding: 0, }}
    >
      
      {isPizzaForm ? <ChoosePizzaForm  product={product}/> : <ChooseProductForm  product={product}/>}
    </Modal>
  );
};
