import { FullCart } from "@/shared/types/FullCart";
import { baseInstance } from "../base";

export const getUserCart = async () =>
  (await baseInstance.get<FullCart>("/cart")).data;
