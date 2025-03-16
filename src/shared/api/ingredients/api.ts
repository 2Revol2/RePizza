import { Ingredient } from "@prisma/client";
import { baseInstance } from "../base";

export const getAllIngredients = async () =>
  (await baseInstance.get<Ingredient[]>("/ingredients")).data;
