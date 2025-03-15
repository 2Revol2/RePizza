import { Product } from "@prisma/client";
import { baseInstance } from "../base";

export const SearchApi = async (query: string) =>
  (
    await baseInstance.get<Product[]>("/products/search", {
      params: {
        query: query,
      },
    })
  ).data;
