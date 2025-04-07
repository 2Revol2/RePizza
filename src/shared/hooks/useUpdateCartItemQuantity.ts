import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserCartItem } from "../api/cart/api";

export const useUpdateCartItemQuantity = () => {
  const queryClient = useQueryClient();

  const updateCartItemQuantity = useMutation({
    mutationFn: ({ id, quantity }: { id: number; quantity: number }) =>
      updateUserCartItem(id, quantity),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const handleUpdateCartItem = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateCartItemQuantity.mutate({ id, quantity: newQuantity });
  };

  return handleUpdateCartItem;
};
