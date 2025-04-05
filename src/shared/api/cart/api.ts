import { FullCart } from "@/shared/types/FullCart";
import { baseInstance } from "../base";

export const getUserCart = async () =>
  (await baseInstance.get<FullCart>("/cart")).data;

export const updateUserCartItem = async (id: number, quantity: number) =>
  await baseInstance.patch(`/cart/${id}`, { quantity });

export const deleteUserCartItem = async (id: number) =>
  await baseInstance.delete(`/cart/${id}`);
