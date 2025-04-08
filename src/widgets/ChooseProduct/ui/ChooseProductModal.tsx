"use client";

import { ProductWithRelations } from "@/shared/types/ProductWithRelations";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { ChooseProduct } from "./ChooseProduct";

type ChooseProductModalProps = {
  product: ProductWithRelations;
};

export const ChooseProductModal = ({ product }: ChooseProductModalProps) => {
  const router = useRouter();
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
      <ChooseProduct product={product} onSubmit={() => router.back()} />
    </Modal>
  );
};
